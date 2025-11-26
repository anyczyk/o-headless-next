import { registerBlockType } from '@wordpress/blocks';
import {
    useBlockProps,
    InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, ToggleControl, SelectControl, TextControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEffect, useState, useRef } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

// Importuj komponenty Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Importuj style Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

registerBlockType('semdesign/d-002-slider-carousel-dynamic-v1', {
    edit: (props) => {
        const {
            attributes: { selectedCPT = 'post', autoplay = false, postsLimit = null, ids = '', tagName = 'h3' },
            setAttributes,
            clientId,
        } = props;

        const blockProps = useBlockProps();

        const [postTypes, setPostTypes] = useState([]);

        const tagOptions = [
            { label: 'Heading 1 [h1]', value: 'h1' },
            { label: 'Heading 2 [h2]', value: 'h2' },
            { label: 'Heading 3 [h3]', value: 'h3' },
            { label: 'Heading 4 [h4]', value: 'h4' },
            { label: 'Heading 5 [h5]', value: 'h5' },
            { label: 'Heading 6 [h6]', value: 'h6' },
            { label: 'Paragraph [p]', value: 'p' },
            { label: 'Div [div]', value: 'div' },
        ];

        useEffect(() => {
            apiFetch({ path: '/wp/v2/types' }).then((types) => {
                const typesArray = Object.values(types);

                const filteredTypes = typesArray.filter((postType) => {
                    return (
                        postType.slug !== 'attachment' &&
                        postType.slug !== 'wp_block' &&
                        postType.slug !== 'wp_template' &&
                        postType.slug !== 'wp_template_part' &&
                        postType.slug !== 'wp_navigation' &&
                        postType.slug !== 'wp_global_styles' &&
                        postType.slug !== 'wp_font_family' &&
                        postType.slug !== 'wp_font_face' &&
                        postType.slug !== 'nav_menu_item'
                    );
                });

                setPostTypes(filteredTypes);
            });
        }, []);

        const perPage = postsLimit && postsLimit <= 100 ? postsLimit : 100;

        const idsArray = ids
            ? ids
                .split(',')
                .map((id) => parseInt(id.trim(), 10))
                .filter((id) => !isNaN(id))
            : [];

        const posts = useSelect(
            (select) => {
                const query = {
                    per_page: perPage,
                    _embed: true,
                    _fields: 'id,title,link,featured_media,_embedded,better_featured_image',
                };

                if (idsArray.length > 0) {
                    query.include = idsArray;
                    query.orderby = 'include';
                    query.per_page = idsArray.length;
                }

                if (selectedCPT === 'product') {
                    query.status = 'publish';
                    query._fields += ',product_meta';
                }

                return select('core').getEntityRecords('postType', selectedCPT, query);
            },
            [selectedCPT, perPage, ids]
        );

        const toggleAutoplay = () => {
            setAttributes({ autoplay: !autoplay });
        };

        const swiperModules = [Navigation, Pagination, Autoplay];

        // Utwórz referencje do przycisków nawigacji i paginacji
        const prevRef = useRef(null);
        const nextRef = useRef(null);
        const paginationRef = useRef(null);

        const Tag = tagName;

        const handleMouseEnter = () => {
            wp.data.dispatch('core/block-editor').selectBlock(clientId);
        };

        return (
            <div {...blockProps} onClick={handleMouseEnter}>
                <InspectorControls>
                    <PanelBody title="Ustawienia Slidera">
                        <SelectControl
                            label="Title Tag"
                            value={tagName}
                            options={tagOptions}
                            onChange={(value) => setAttributes({ tagName: value })}
                        />
                        <ToggleControl
                            label="Autoplay"
                            checked={autoplay}
                            onChange={toggleAutoplay}
                        />
                        {postTypes.length > 0 ? (
                            <SelectControl
                                label="Wybierz typ wpisu"
                                value={selectedCPT}
                                options={postTypes.map((postType) => ({
                                    label: postType.name,
                                    value: postType.slug,
                                }))}
                                onChange={(value) => setAttributes({ selectedCPT: value })}
                                disabled={ids.trim() !== ''}
                            />
                        ) : (
                            <p>Ładowanie typów wpisów...</p>
                        )}
                        {ids.trim() === '' && (
                            <TextControl
                                label="Limit liczby wpisów"
                                type="number"
                                value={postsLimit}
                                min={1}
                                max={100}
                                onChange={(value) => {
                                    const limit = parseInt(value, 10);
                                    setAttributes({ postsLimit: limit > 0 ? limit : null });
                                }}
                            />
                        )}
                        <TextControl
                            label="IDs (po przecinku)"
                            value={ids}
                            onChange={(value) => {
                                setAttributes({ ids: value });
                            }}
                            help="Wpisz ID postów oddzielone przecinkami, aby wyświetlić tylko te posty z wybranego typu wpisu."
                        />
                    </PanelBody>
                </InspectorControls>
                {posts === undefined && <p>Ładowanie wpisów...</p>}
                {posts && posts.length > 0 ? (
                    <div className="wp-block-semdesign-d-002-slider-carousel-dynamic-v1-wrap swiper-module">
                        <div className="container">
                            <Swiper
                                modules={swiperModules}
                                autoplay={autoplay ? { delay: 3000 } : false}
                                slidesPerView={4}
                                centeredSlides={true}
                                loop={true}
                                spaceBetween={10}
                                className="wp-block-semdesign-d-002-slider-carousel-dynamic-v1 swiper-carousel-dynamic swiper-container"
                                navigation={{
                                    prevEl: prevRef.current,
                                    nextEl: nextRef.current,
                                }}
                                pagination={{
                                    el: paginationRef.current,
                                    clickable: true,
                                }}
                                onSwiper={(swiper) => {
                                    // Opóźnienie przypisania elementów nawigacji i paginacji
                                    setTimeout(() => {
                                        if (swiper.params.navigation) {
                                            swiper.params.navigation.prevEl = prevRef.current;
                                            swiper.params.navigation.nextEl = nextRef.current;

                                            swiper.navigation.destroy();
                                            swiper.navigation.init();
                                            swiper.navigation.update();
                                        }

                                        if (swiper.params.pagination) {
                                            swiper.params.pagination.el = paginationRef.current;

                                            swiper.pagination.destroy();
                                            swiper.pagination.init();
                                            swiper.pagination.render();
                                            swiper.pagination.update();
                                        }
                                    });
                                }}
                            >
                                {posts.map((post) => {
                                    const imageUrl = post.better_featured_image ? post.better_featured_image : null;
                                    const postLink = post.link;

                                    // Inicjalizujemy zmienne dla danych produktu
                                    let price = null;
                                    let regular_price = null;
                                    let sale_price = null;
                                    let in_stock = true;

                                    // Jeśli typ wpisu to 'product', pobieramy dane z 'product_meta'
                                    if (selectedCPT === 'product' && post.product_meta) {
                                        price = post.product_meta.price;
                                        regular_price = post.product_meta.regular_price;
                                        sale_price = post.product_meta.sale_price;
                                        in_stock = post.product_meta.stock_status !== 'outofstock';
                                    }

                                    return (
                                        <SwiperSlide key={post.id} className="swiper-slide">
                                            {imageUrl && (
                                                <img
                                                    className="wp-block-semdesign-d-002-slider-carousel-dynamic-v1__image"
                                                    src={imageUrl}
                                                    alt={post.title.rendered}
                                                />
                                            )}
                                            <div className="swiper-slide__container">
                                                <div>
                                                    {post.title && (
                                                        <Tag
                                                            className={'h3'}
                                                            dangerouslySetInnerHTML={{
                                                                __html: post.title.rendered,
                                                            }}
                                                        />
                                                    )}
                                                    <hr />
                                                    {selectedCPT === 'product' && (
                                                        <p>
                                                            <small>
                                                                {in_stock ? (
                                                                    <>
                                                                        {price && <>Cena:{' '}</>}
                                                                        {sale_price && sale_price !== '' ? (
                                                                            <>
                                                                                <del>
                                                                                    {regular_price ? `${regular_price} zł` : `${price} zł`}
                                                                                </del>{' '}
                                                                                <strong>{sale_price} zł</strong>
                                                                            </>
                                                                        ) : price ? (
                                                                            <strong>{price} zł</strong>
                                                                        ) : (
                                                                            'Brak towaru'
                                                                        )}
                                                                    </>
                                                                ) : (
                                                                    'Brak towaru'
                                                                )}
                                                            </small>
                                                        </p>
                                                    )}
                                                    <a className="btn btn--blur-light" href={postLink}>
                                                        Zobacz więcej
                                                    </a>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                        <div className="swiper-pagination" ref={paginationRef}></div>
                        <button className="swiper-button-prev" ref={prevRef}></button>
                        <button className="swiper-button-next" ref={nextRef}></button>
                    </div>
                ) : posts && posts.length === 0 ? (
                    <p>Brak wpisów do wyświetlenia.</p>
                ) : null}
            </div>
        );
    },

    save: () => {
        return null;
    },
});
