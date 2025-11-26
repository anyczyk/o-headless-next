import { registerBlockType } from '@wordpress/blocks';
import {
    useBlockProps,
    InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, ToggleControl, SelectControl, TextControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

registerBlockType('semdesign/d-001-slider-dynamic-v1', {
    edit: (props) => {
        const {
            attributes: { selectedCPT = 'post', autoplay = false, postsLimit = null, ids = '', tagName = 'h3' },
            setAttributes,
            clientId
        } = props;

        const blockProps = useBlockProps({
            className: 'swiper-module',
        });

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
                if (idsArray.length > 0) {
                    return select('core').getEntityRecords('postType', selectedCPT, {
                        include: idsArray,
                        orderby: 'include',
                        per_page: idsArray.length,
                        _embed: true,
                    });
                } else {
                    return select('core').getEntityRecords('postType', selectedCPT, {
                        per_page: perPage,
                        _embed: true,
                    });
                }
            },
            [selectedCPT, perPage, ids]
        );

        const toggleAutoplay = () => {
            setAttributes({ autoplay: !autoplay });
        };

        const swiperModules = [Navigation, Pagination, Autoplay];

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
                    <Swiper
                        modules={swiperModules}
                        navigation
                        pagination={{ clickable: true }}
                        autoHeight={true}
                        autoplay={autoplay ? { delay: 3000 } : false}
                    >
                        {posts.map((post) => (
                            <SwiperSlide key={post.id}>
                                {post._embedded &&
                                post._embedded['wp:featuredmedia'] &&
                                post._embedded['wp:featuredmedia'][0] ? (
                                    <img
                                        className={'wp-block-semdesign-d-001-slider-dynamic-v1__image'}
                                        src={
                                            post._embedded['wp:featuredmedia'][0].source_url
                                        }
                                        alt={post.title.rendered}
                                    />
                                ) : (
                                    'Brak obrazu'
                                )}
                                <div className={'container'}>
                                    <div>
                                        {post.title && (
                                            <Tag
                                                className={'h2'}
                                                dangerouslySetInnerHTML={{
                                                    __html: post.title.rendered,
                                                }}
                                            />
                                        )}
                                        {post.excerpt && (
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: post.excerpt.rendered,
                                                }}
                                            />
                                        )}
                                        <hr />
                                        {post.sale_price ? (
                                            <p>
                                                <small>
                                                    Cena: <del>{post.regular_price} zł</del>{' '}
                                                    {post.sale_price} zł
                                                </small>
                                            </p>
                                        ) : post.price ? (
                                            <p>
                                                <small>
                                                    Cena: <strong>{post.price}</strong> zł
                                                </small>
                                            </p>
                                        ) : post.product && (
                                            <p>
                                                <small>Brak towaru</small>
                                            </p>
                                        )}
                                        <a className="btn btn--blur-light" href={'#'}>
                                            Zobacz więcej
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
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
