import { registerBlockType } from '@wordpress/blocks';
import {
    useBlockProps,
    InspectorControls,
    MediaUpload,
    MediaUploadCheck,
    RichText, PanelColorSettings
} from '@wordpress/block-editor';
import { PanelBody, Button, TextControl, SelectControl, TextareaControl } from '@wordpress/components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef } from '@wordpress/element';
import {__} from "@wordpress/i18n";
import { parseAttributes } from '../../assets/js/functions';

registerBlockType('semdesign/m-005-tiles-with-slider-modals-v1', {
    edit: (props) => {
        const {
            attributes: { tilesModals = [], tagName = 'h3', textColor = '', bgColor='', customAttributes = '' },
            setAttributes,
            clientId,
        } = props;

        const tagOptions = [
            { label: 'Heading 2 [h2]', value: 'h2' },
            { label: 'Heading 3 [h3]', value: 'h3' },
            { label: 'Heading 4 [h4]', value: 'h4' },
            { label: 'Heading 5 [h5]', value: 'h5' },
            { label: 'Heading 6 [h6]', value: 'h6' },
            { label: 'Paragraph [p]', value: 'p' },
            { label: 'Div [div]', value: 'div' },
        ];

        const blockProps = useBlockProps({ className: 'o-m-005-tiles-with-slider-modals-v1' });

        // --- Refs for Swiper instance ---
        const swiperRef = useRef(null);

        const updateItem = (index, data) => {
            const newTilesModals = tilesModals.map((slide, i) => {
                if (i === index) {
                    return { ...slide, ...data };
                }
                return slide;
            });
            setAttributes({ tilesModals: newTilesModals });
        };

        const removeImage = (index) => {
            updateItem(index, { imageUrl: '', imageAlt: '', imageSrcset: '' });
        };

        const removeItem = (index) => {
            const newPortfolio = tilesModals.filter((item, i) => i !== index);
            setAttributes({ tilesModals: newPortfolio });
        };

        const addItem = () => {
            const newItem = [
                ...tilesModals,
                { imageUrl: '', imageAlt: '', imageSrcset: '', tileTitle: '', tileCustomAttributes: '', modalTitle: '', modalSubTitle: '', modalDescription: '' },
            ];
            setAttributes({ tilesModals: newItem });
        };

        const Tag = tagName;
        const swiperModules = [Navigation, Pagination, Autoplay];

        // --- Funkcja do ustawiania aktywnego slajdu ---
        const setSlide = (id) => {
            if (swiperRef.current) {
                swiperRef.current.slideTo(id);
            }
        };

        const handleMouseEnter = () => {
            wp.data.dispatch('core/block-editor').selectBlock(clientId);
        };

        return (
            <div {...blockProps} onClick={handleMouseEnter}>
                <InspectorControls>
                    <PanelBody title="Ustawienia Portfolio">
                        <p>Main options</p>
                        <SelectControl
                            label="Title tag in modal"
                            value={tagName}
                            options={tagOptions}
                            onChange={(value) => setAttributes({ tagName: value })}
                        />
                        <PanelColorSettings
                            title={__('Color', 'semdesign')}
                            initialOpen={true}
                            className="ps-0 pe-0 pt-3 pb-3"
                            colorSettings={[
                                {
                                    value: textColor,
                                    onChange: (newColor) => setAttributes({ textColor: newColor }),
                                    label: __('Text Color', 'semdesign'),
                                },
                                {
                                    value: bgColor,
                                    onChange: (newColor) => setAttributes({ bgColor: newColor }),
                                    label: __('Background Color', 'semdesign'),
                                },
                            ]}
                        />
                        <TextControl
                            label="Custom Attributes"
                            value={customAttributes}
                            onChange={(value) => setAttributes({customAttributes: value})}
                        />
                    </PanelBody>
                    <PanelBody title="Projects">
                        {tilesModals.map((item, index) => (
                            <div key={index} className="m-005-tiles-with-slider-modals-v1-list-settings">
                                <div className="ho-editor-image mb-3">
                                    <MediaUploadCheck>
                                        <MediaUpload
                                            onSelect={(media) => {
                                                wp.apiFetch({ path: `/wp/v2/media/${media.id}` }).then((fullMedia) => {
                                                    const srcset = fullMedia.description.rendered;
                                                    const regex = /srcset="([^"]+)"/;
                                                    const match = srcset.match(regex);
                                                    updateItem(index, {
                                                        imageUrl: media.url || media.source_url,
                                                        imageAlt: media.alt || '',
                                                        imageSrcset: match[1] || '',
                                                    });
                                                });
                                            }}

                                            allowedTypes={['image']}
                                            render={({ open }) => (
                                                <>
                                                    {item.imageUrl && (
                                                        <Button
                                                            className="components-button is-secondary"
                                                            onClick={() => removeImage(index)}
                                                            isDestructive
                                                            title="Usuń obraz"
                                                        >
                                                            <i className="dashicons dashicons-remove"/>
                                                            <span className="d-none">Usuń obraz</span>
                                                        </Button>
                                                    )}
                                                    <Button
                                                        className="components-button is-secondary"
                                                        onClick={open}
                                                        title={item.imageUrl ? 'Zmień / Edytuj' : 'Wybierz obraz'}
                                                    >
                                                        {item.imageUrl ? (
                                                            <i className="dashicons dashicons-edit"/>
                                                        ) : (
                                                            <>
                                                                <i className="dashicons dashicons-insert"/>
                                                                <i className="dashicons dashicons-format-image"/>
                                                            </>
                                                        )}
                                                        <span className="d-none">
                                                            {item.imageUrl ? 'Zmień / Edytuj' : 'Wybierz obraz'}
                                                        </span>
                                                    </Button>
                                                    {item.imageUrl ? (
                                                        <img onClick={open} src={item.imageUrl} alt="Image"/>
                                                    ) : ''}
                                                </>
                                            )}
                                        />
                                    </MediaUploadCheck>
                                </div>
                                {item.imageUrl ? <>
                                    <TextControl
                                        label="Alt"
                                        value={item.imageAlt}
                                        onChange={(value) => updateItem(index, { imageAlt: value })}
                                        className="mb-3"
                                    />
                                    <TextControl
                                        label="Srcset"
                                        disabled="disabled"
                                        value={item.imageSrcset}
                                        onChange={(value) => updateItem(index, { imageSrcset: value })}
                                        className="mb-3"
                                    />
                                </> : ''}

                                <TextControl
                                    label="Tile Title"
                                    value={item.tileTitle}
                                    onChange={(value) => updateItem(index, { tileTitle: value })}
                                    className="mb-3"
                                />
                                <TextControl
                                    label="Custom Attributes"
                                    value={item.tileCustomAttributes}
                                    onChange={(value) => updateItem(index, { tileCustomAttributes: value })}
                                    className="mb-3"
                                />
                                <TextControl
                                    label="Modal Title"
                                    value={item.modalTitle}
                                    onChange={(value) => updateItem(index, { modalTitle: value })}
                                    className="mb-3"
                                />
                                <TextControl
                                    label="Modal Sub-Title"
                                    value={item.modalSubTitle}
                                    onChange={(value) => updateItem(index, { modalSubTitle: value })}
                                    className="mb-3"
                                />
                                <TextareaControl
                                    label="Modal Description"
                                    value={item.modalDescription}
                                    onChange={(value) => updateItem(index, { modalDescription: value })}
                                    className="mb-3"
                                />
                                <Button
                                    className="components-button is-secondary"
                                    onClick={() => removeItem(index)}
                                >
                                    <i className="dashicons dashicons-remove"/> Remove item
                                </Button>
                                <hr/>
                            </div>
                        ))}
                        <Button onClick={addItem} isPrimary>
                            <i className="dashicons dashicons-insert"/> Add item
                        </Button>
                    </PanelBody>
                </InspectorControls>
                {tilesModals.length > 0 ? <div className="ho-module-m-005-tiles-with-slider-modals-v1 pt-5 pb-5" style={{ backgroundColor: bgColor, color: textColor }}>
                    <div className="container">
                        <ul className="list-unstyled ho-module-m-005-tiles-with-slider-modals-v1__list">
                            {tilesModals.map((item, index) =>
                                <li key={index}>
                                    {/* setSlide wywołujemy tutaj */}
                                    <div role="button" onClick={() => setSlide(index)}
                                         className="ho-module-m-005-tiles-with-slider-modals-v1__tile-image-and-title pt-3 pb-3 ps-3 pe-3">
                                        {item.imageUrl && <img src={item.imageUrl} srcSet={item.imageSrcset} alt={item.imageAlt ? item.imageAlt : 'Image' }/>}
                                        {item.tileTitle && (
                                            <Tag
                                                className="h4 ho-module-m-005-tiles-with-slider-modals-v1__tile-image-and-title-t pt-3 pb-3 ps-3 pe-3">
                                                {item.tileTitle}
                                            </Tag>
                                        )}
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="ho-module-m-005-tiles-with-slider-modals-v1-modal">
                        <div className="ho-module-m-005-tiles-with-slider-modals-v1-modal__swiper" style={{ backgroundColor: bgColor, color: textColor }}>
                            <Swiper
                                modules={swiperModules}
                                navigation
                                pagination={{clickable: true}}
                                autoHeight={true}
                                // Odbieramy instancję Swipera i przypisujemy ją do swiperRef
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                            >
                                {tilesModals.map((item, index) => (
                                    <SwiperSlide key={index}
                                                 className="d-block d-lg-flex align-items-center pb-5 pt-3 ps-3 pe-3 p-lg-5 gap-5">
                                        {item.imageUrl && (
                                            <div
                                                className="ho-module-m-005-tiles-with-slider-modals-v1-modal__swiper-image mb-3 mb-lg-0">
                                                <img
                                                    src={item.imageUrl} srcSet={item.imageSrcset} alt={item.imageAlt ? item.imageAlt : 'Image' } /></div>)}
                                        <div className="ho-module-m-005-tiles-with-slider-modals-v1-modal__swiper-text">
                                            {item.modalTitle && <Tag className="h4">{item.modalTitle}</Tag>}
                                            {item.modalSubTitle && <p>{item.modalSubTitle}</p>}
                                            {item.modalDescription && <div>{item.modalDescription}</div>}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div> : <p>Tiles with slider modals</p>}
            </div>
        );
    },

    save: (props) => {
        const {
            attributes: {tilesModals, autoplay, tagName, bgColor, textColor, customAttributes}
        } = props;

        const Tag = tagName;

        return (tilesModals.length > 0 &&
            <div className="ho-module-m-005-tiles-with-slider-modals-v1 pt-5 pb-5" style={{ backgroundColor: bgColor, color: textColor }} data-bg-color={bgColor} data-text-color={textColor} {...parseAttributes(customAttributes)}>
                <div className="container">
                    <ul className="list-unstyled ho-module-m-005-tiles-with-slider-modals-v1__list">
                        {tilesModals.map((item, index) =>
                            <li key={index} {...parseAttributes(item.tileCustomAttributes)}>
                                <div role="button" data-index={index}
                                     className="ho-module-m-005-tiles-with-slider-modals-v1__tile-image-and-title pt-3 pb-3 ps-3 pe-3"
                                     data-image={item.imageUrl}
                                     data-image-alt={item.imageAlt}
                                     data-image-srcset = {item.imageSrcset}
                                     data-modal-title={item.modalTitle}
                                     data-modal-sub-title={item.modalSubTitle}
                                     data-modal-description={item.modalDescription}
                                     data-autoplay={autoplay}
                                     data-tag={Tag}
                                >
                                    {item.imageUrl && <img src={item.imageUrl} srcset={item.imageSrcset} alt={item.imageAlt ? item.imageAlt : 'Image' }/>}
                                    {item.tileTitle && (
                                        <Tag
                                            className="h4 ho-module-m-005-tiles-with-slider-modals-v1__tile-image-and-title-t pt-3 pb-3 ps-3 pe-3">
                                            {item.tileTitle}
                                        </Tag>
                                    )}
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    },
});
