import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { registerBlockType } from '@wordpress/blocks';
import {
    useBlockProps,
    MediaUpload,
    MediaUploadCheck,
    InspectorControls,
    PanelColorSettings,
    __experimentalLinkControl as LinkControl,
} from '@wordpress/block-editor';

import {
    Button,
    TextControl,
    PanelBody,
    ToggleControl,
    TextareaControl,
    SelectControl,
    BaseControl,
} from '@wordpress/components';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

registerBlockType('semdesign/m-001-slider-v1', {
    attributes: {
        slides: {
            type: 'array',
            default: []
        },
        customAttributes: {
            type: 'string',
            default: ''
        },
        size: {
            type: 'string',
            default: 'large'
        },
        topOverlap: {
            type: 'boolean',
            default: false
        },
        autoplay: {
            type: 'boolean',
            default: false
        },
        loop: {
            type: 'boolean',
            default: false
        },
        autoHeight: {
            type: 'boolean',
            default: true
        },
        effectFade: {
            type: 'boolean',
            default: false
        },
        dots: {
            type: 'boolean',
            default: true
        },
        arrows: {
            type: 'boolean',
            default: true
        },
        firstTagH1: {
            type: 'boolean',
            default: false
        },
        tagName: {
            type: 'string',
            default: 'h3'
        }
    },

    // ----- 1) TYLKO EDYCJA -----
    edit: (props) => {
        const {
            attributes: {
                slides = [],
                customAttributes = '',
                size = 'large',
                topOverlap = false,
                autoplay = false,
                loop = false,
                autoHeight = true,
                effectFade = false,
                dots = true,
                arrows = true,
                firstTagH1 = false,
                tagName = 'h3'
            },
            setAttributes,
            clientId
        } = props;

        // Indeks slajdu, który jest aktualnie otwarty w panelu
        const [activeSlideIndex, setActiveSlideIndex] = useState(null);

        // Rozwijanie / zamykanie opcji slajdu (akordeon)
        const handleSlideToggle = (index, move) => {
            if (move) {
                setActiveSlideIndex(null);
            } else {
                setActiveSlideIndex(activeSlideIndex === index ? null : index);
            }
        };

        // Drag & drop
        const onDragEnd = (result) => {
            if (!result.destination) return;
            const newSlides = Array.from(slides);
            const [movedItem] = newSlides.splice(result.source.index, 1);
            newSlides.splice(result.destination.index, 0, movedItem);
            setAttributes({ slides: newSlides });
        };

        // Opcje do <SelectControl>
        const tagOptions = [
            { label: 'Heading 2 [h2]', value: 'h2' },
            { label: 'Heading 3 [h3]', value: 'h3' },
            { label: 'Heading 4 [h4]', value: 'h4' },
            { label: 'Heading 5 [h5]', value: 'h5' },
            { label: 'Heading 6 [h6]', value: 'h6' },
            { label: 'Paragraph [p]', value: 'p' },
            { label: 'Div [div]', value: 'div' },
        ];
        const sizeOptions = [
            { label: 'Large', value: 'large' },
            { label: 'Medium', value: 'medium' },
            { label: 'Small', value: 'small' },
            { label: 'Full', value: 'full' },
            { label: 'Aspect ratio 3:2', value: 'aspect-ratio-3-2' },
        ];

        const [swiperInstance, setSwiperInstance] = useState(null);

        // Dodawanie nowego slajdu
        const addSlide = () => {
            const newSlides = [
                ...slides,
                {
                    // Najważniejsze: imageId = 0 (brak)
                    imageId: 0,
                    imageUrl: '',
                    imageUrl2x: '',
                    imagePosition: 'center',
                    overLayGradient: true,
                    overLayFull: false,
                    horizontalAlignment: 'start',
                    verticalAlignment: 'center',
                    caption: '',
                    title: '',
                    description: '',
                    buttonLabel: '',
                    buttonUrl: '',
                    openInNewTab: false,
                    textColor: '',
                    bgColor: '',
                    customClasses: ''
                }
            ];
            setAttributes({ slides: newSlides });
        };

        // Usuwanie slajdu
        const removeSlide = (index) => {
            const newSlides = slides.filter((_, i) => i !== index);
            setAttributes({ slides: newSlides });
        };

        // Aktualizacja jednego slajdu
        const updateSlide = (index, data) => {
            const newSlides = slides.map((slide, i) => {
                if (i === index) {
                    return { ...slide, ...data };
                }
                return slide;
            });
            setAttributes({ slides: newSlides });
        };

        // Usuwanie obrazka
        const removeImage = (index) => {
            updateSlide(index, {
                imageId: 0,
                imageUrl: '',
                imageUrl2x: ''
            });
        };

        // Togglery atrybutów
        const toggleAutoplay = () => {
            setAttributes({ autoplay: !autoplay });
        };
        const toggleLoop = () => {
            setAttributes({ loop: !loop });
        };
        const toggleAutoHeight = () => {
            setAttributes({ autoHeight: !autoHeight });
        };
        const toggleDots = () => {
            setAttributes({ dots: !dots });
        };

        const toggleEffectFade = () => {
            setAttributes({ effectFade: !effectFade });
        };
        const toggleArrows = () => {
            setAttributes({ arrows: !arrows });
        };
        const toggleTopOverlap = () => {
            setAttributes({ topOverlap: !topOverlap });
        };
        const toggleFirstTagH1 = () => {
            setAttributes({ firstTagH1: !firstTagH1 });
        };

        const toggleOverLayGradient = (index) => {
            const currentValue = slides[index].overLayGradient;
            updateSlide(index, { overLayGradient: !currentValue });
        };

        const toggleOverLayFull = (index) => {
            const currentValue = slides[index].overLayFull;
            updateSlide(index, { overLayFull: !currentValue });
        };

        // Moduły do Swipera
        const swiperModules = [Navigation, Pagination, Autoplay, EffectFade];
        const Tag = tagName;

        // Kliknięcie w kontener, aby zaznaczyć blok
        const handleMouseEnter = () => {
            wp.data.dispatch('core/block-editor').selectBlock(clientId);
        };

        // Właściwości dla wrappera
        const blockProps = useBlockProps({
            className: `swiper-module ho-module-m-001-slider-v1 ho-module-m-001-slider-v1--${size} ${
                slides.length > 1 ? 'ho-module-m-001-slider-v1--swiper-active' : ''
            }`,
        });

        return (
            <div {...blockProps} onClick={handleMouseEnter}>
                <InspectorControls>
                    <PanelBody title="Ustawienia Slidera">
                        <SelectControl
                            label="Size"
                            value={size}
                            options={sizeOptions}
                            onChange={(value) => {
                                setAttributes({ size: value });
                                setTimeout(() => {
                                    if (swiperInstance) {
                                        swiperInstance.update();
                                    }
                                }, 300);
                            }}
                        />
                        <SelectControl
                            label="Title Tag"
                            value={tagName}
                            options={tagOptions}
                            onChange={(value) => setAttributes({ tagName: value })}
                        />
                        <ToggleControl
                            label="First title h1 tag"
                            checked={firstTagH1}
                            onChange={toggleFirstTagH1}
                        />
                        <ToggleControl
                            label="Overlaps to the top"
                            checked={topOverlap}
                            onChange={toggleTopOverlap}
                        />
                        <ToggleControl
                            label="Autoplay"
                            checked={autoplay}
                            onChange={toggleAutoplay}
                        />
                        <ToggleControl
                            label="Loop"
                            checked={loop}
                            onChange={toggleLoop}
                        />
                        <ToggleControl
                            label="Auto height"
                            checked={autoHeight}
                            onChange={toggleAutoHeight}
                        />
                        <ToggleControl
                            label="Effect Fade"
                            checked={effectFade}
                            onChange={() => {
                                toggleEffectFade();
                            }}
                        />
                        <ToggleControl
                            label="Dots"
                            checked={dots}
                            onChange={toggleDots}
                        />
                        <ToggleControl
                            label="Arrows"
                            checked={arrows}
                            onChange={toggleArrows}
                        />
                        <TextControl
                            label="Custom Attributes"
                            value={customAttributes}
                            onChange={(value) => setAttributes({customAttributes: value})}
                        />
                    </PanelBody>

                    <PanelBody title="Slajdy">
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="slides-list-droppable">
                                {(provided) => (
                                    <div
                                        className="slides-list-droppable"
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                    >
                                        {slides.map((slide, index) => (
                                            <Draggable
                                                key={`slides-${index}`}
                                                draggableId={`slides-${index}`}
                                                index={index}
                                            >
                                                {(provided) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        style={{ ...provided.draggableProps.style }}
                                                        className={`slide-settings ho-item-settings ${
                                                            activeSlideIndex === index ? 'ho-item-settings--show' : ''
                                                        }`}
                                                    >
                                                        <div className="ho-settings-header">
                                                            <div
                                                                className="ho-settings-header__btn-open-options"
                                                                onClick={() => handleSlideToggle(index)}
                                                            >
                                                                <i className="icon-down-open" /> Slide {index + 1}
                                                            </div>
                                                            <span
                                                                className="ho-settings-header__move"
                                                                {...provided.dragHandleProps}
                                                                onMouseDown={() => handleSlideToggle(index, true)}
                                                            >
                                                                <i className="icon-drag"/>
                                                            </span>
                                                        </div>

                                                        <div className="ho-settings-options">
                                                            <MediaUploadCheck>
                                                                <MediaUpload
                                                                    onSelect={(media) => {
                                                                        updateSlide(index, {
                                                                            imageId: media.id,
                                                                            imageUrl: media.url,
                                                                            imageUrl2x: media.sizes?.large?.url || media.url
                                                                        });
                                                                    }}
                                                                    allowedTypes={['image']}
                                                                    render={({open}) => (
                                                                        <Button
                                                                            className="ho-btn-edit p-0 mb-2"
                                                                            style={{height: 'auto'}}
                                                                            onClick={open}
                                                                        >
                                                                            {slide.imageUrl ? (
                                                                                <img
                                                                                    src={slide.imageUrl}
                                                                                    alt=""
                                                                                    style={{width: '100%'}}
                                                                                />
                                                                            ) : (
                                                                                <div className="components-button is-secondary">
                                                                                    Choose image
                                                                                </div>
                                                                            )}
                                                                        </Button>
                                                                    )}
                                                                />
                                                            </MediaUploadCheck>

                                                            {slide.imageUrl && (
                                                                <>
                                                                    <BaseControl label="Image position">
                                                                        <div className="d-grid gap-1 grid-template-columns-repeat-3-1fr">
                                                                            {/* 9 przycisków do wyrównania */}
                                                                            <button
                                                                                className={`components-button ho-icon-position ho-icon-position--left-top ${
                                                                                    slide.imagePosition === 'left-top' ? 'is-primary' : 'is-secondary'
                                                                                }`}
                                                                                onClick={() => updateSlide(index, {imagePosition: 'left-top'})}
                                                                                title="left-top"
                                                                            >
                                                                                <i className="dashicons dashicons-arrow-up-alt2"/>
                                                                            </button>
                                                                            <button
                                                                                className={`components-button ho-icon-position ${
                                                                                    slide.imagePosition === 'top' ? 'is-primary' : 'is-secondary'
                                                                                }`}
                                                                                onClick={() => updateSlide(index, {imagePosition: 'top'})}
                                                                                title="top"
                                                                            >
                                                                                <i className="dashicons dashicons-arrow-up-alt2"/>
                                                                            </button>
                                                                            <button
                                                                                className={`components-button ho-icon-position ho-icon-position--right-top ${
                                                                                    slide.imagePosition === 'right-top' ? 'is-primary' : 'is-secondary'
                                                                                }`}
                                                                                onClick={() => updateSlide(index, {imagePosition: 'right-top'})}
                                                                                title="right-top"
                                                                            >
                                                                                <i className="dashicons dashicons-arrow-up-alt2"/>
                                                                            </button>

                                                                            <button
                                                                                className={`components-button ho-icon-position ${
                                                                                    slide.imagePosition === 'left' ? 'is-primary' : 'is-secondary'
                                                                                }`}
                                                                                onClick={() => updateSlide(index, {imagePosition: 'left'})}
                                                                                title="Left"
                                                                            >
                                                                                <i className="dashicons dashicons-arrow-left-alt2"/>
                                                                            </button>
                                                                            <button
                                                                                className={`components-button ho-icon-position ${
                                                                                    slide.imagePosition === 'center' ? 'is-primary' : 'is-secondary'
                                                                                }`}
                                                                                onClick={() => updateSlide(index, {imagePosition: 'center'})}
                                                                                title="center"
                                                                            >
                                                                                <i className="dashicons dashicons-fullscreen-exit-alt"/>
                                                                            </button>
                                                                            <button
                                                                                className={`components-button ho-icon-position ${
                                                                                    slide.imagePosition === 'right' ? 'is-primary' : 'is-secondary'
                                                                                }`}
                                                                                onClick={() => updateSlide(index, {imagePosition: 'right'})}
                                                                                title="right"
                                                                            >
                                                                                <i className="dashicons dashicons-arrow-right-alt2"/>
                                                                            </button>

                                                                            <button
                                                                                className={`components-button ho-icon-position ho-icon-position--left-bottom ${
                                                                                    slide.imagePosition === 'left-bottom' ? 'is-primary' : 'is-secondary'
                                                                                }`}
                                                                                onClick={() => updateSlide(index, {imagePosition: 'left-bottom'})}
                                                                                title="left-bottom"
                                                                            >
                                                                                <i className="dashicons dashicons-arrow-down-alt2"/>
                                                                            </button>
                                                                            <button
                                                                                className={`components-button ho-icon-position ${
                                                                                    slide.imagePosition === 'bottom' ? 'is-primary' : 'is-secondary'
                                                                                }`}
                                                                                onClick={() => updateSlide(index, {imagePosition: 'bottom'})}
                                                                                title="bottom"
                                                                            >
                                                                                <i className="dashicons dashicons-arrow-down-alt2"/>
                                                                            </button>
                                                                            <button
                                                                                className={`components-button ho-icon-position ho-icon-position--right-bottom ${
                                                                                    slide.imagePosition === 'right-bottom' ? 'is-primary' : 'is-secondary'
                                                                                }`}
                                                                                onClick={() => updateSlide(index, {imagePosition: 'right-bottom'})}
                                                                                title="right-bottom"
                                                                            >
                                                                                <i className="dashicons dashicons-arrow-down-alt2"/>
                                                                            </button>
                                                                        </div>
                                                                    </BaseControl>

                                                                    <Button
                                                                        className="components-button is-secondary mb-3"
                                                                        onClick={() => removeImage(index)}
                                                                        isDestructive
                                                                        style={{marginTop: '5px'}}
                                                                    >
                                                                        Remove image
                                                                    </Button>
                                                                </>
                                                            )}

                                                            <ToggleControl
                                                                label="OverLay"
                                                                checked={slide.overLayGradient}
                                                                onChange={() => toggleOverLayGradient(index)}
                                                            />

                                                            {slide.overLayGradient && (
                                                                <ToggleControl
                                                                    label="OverLay Full"
                                                                    checked={slide.overLayFull}
                                                                    onChange={() => toggleOverLayFull(index)}
                                                                />
                                                            )}

                                                            <BaseControl label="Horizontal Alignment">
                                                                <div className="d-flex gap-1">
                                                                    <button
                                                                        className={`components-button ${
                                                                            slide.horizontalAlignment === 'start' ? 'is-primary' : 'is-secondary'
                                                                        }`}
                                                                        onClick={() => updateSlide(index, {horizontalAlignment: 'start'})}
                                                                    >
                                                                        <i className="dashicons dashicons-editor-alignleft"/>
                                                                    </button>
                                                                    <button
                                                                        className={`components-button ${
                                                                            slide.horizontalAlignment === 'center' ? 'is-primary' : 'is-secondary'
                                                                        }`}
                                                                        onClick={() => updateSlide(index, {horizontalAlignment: 'center'})}>
                                                                        <i className="dashicons dashicons-editor-aligncenter"/>
                                                                    </button>
                                                                    <button
                                                                        className={`components-button ${
                                                                            slide.horizontalAlignment === 'end' ? 'is-primary' : 'is-secondary'
                                                                        }`}
                                                                        onClick={() => updateSlide(index, {horizontalAlignment: 'end'})}>
                                                                        <i className="dashicons dashicons-editor-alignright"/>
                                                                    </button>
                                                                </div>
                                                            </BaseControl>

                                                            <BaseControl label="Vertical Alignment">
                                                                <div className="d-flex gap-1">
                                                                    <button
                                                                        className={`components-button ${
                                                                            slide.verticalAlignment === 'start' ? 'is-primary' : 'is-secondary'
                                                                        }`}
                                                                        onClick={() => updateSlide(index, {verticalAlignment: 'start'})}
                                                                    >
                                                                        <i className="dashicons dashicons-arrow-up"/>
                                                                    </button>
                                                                    <button
                                                                        className={`components-button ${
                                                                            slide.verticalAlignment === 'center' ? 'is-primary' : 'is-secondary'
                                                                        }`}
                                                                        onClick={() => updateSlide(index, {verticalAlignment: 'center'})}>
                                                                        <i className="dashicons dashicons-image-flip-vertical"/>
                                                                    </button>
                                                                    <button
                                                                        className={`components-button ${
                                                                            slide.verticalAlignment === 'end' ? 'is-primary' : 'is-secondary'
                                                                        }`}
                                                                        onClick={() => updateSlide(index, {verticalAlignment: 'end'})}>
                                                                        <i className="dashicons dashicons-arrow-down"/>
                                                                    </button>
                                                                </div>
                                                            </BaseControl>

                                                            <PanelColorSettings
                                                                title={__('Color', 'semdesign')}
                                                                initialOpen={true}
                                                                className="ps-0 pe-0 pt-3 pb-3"
                                                                colorSettings={[
                                                                    {
                                                                        value: slide.textColor,
                                                                        onChange: (newColor) =>
                                                                            updateSlide(index, {textColor: newColor}),
                                                                        label: __('Text Color', 'semdesign'),
                                                                    },
                                                                    {
                                                                        value: slide.bgColor,
                                                                        onChange: (newColor) =>
                                                                            updateSlide(index, {bgColor: newColor}),
                                                                        label: __('Background Color', 'semdesign'),
                                                                    },
                                                                ]}
                                                            />

                                                            <TextControl
                                                                label="Title"
                                                                value={slide.title}
                                                                onChange={(value) => updateSlide(index, {title: value})}
                                                            />
                                                            <TextareaControl
                                                                label="Description"
                                                                value={slide.description}
                                                                onChange={(value) => updateSlide(index, {description: value})}
                                                            />
                                                            <TextControl
                                                                label="Caption"
                                                                value={slide.caption}
                                                                onChange={(value) => updateSlide(index, {caption: value})}
                                                            />

                                                            <hr/>

                                                            {slide.buttonUrl && (
                                                                <button
                                                                    isDestructive
                                                                    className="components-button is-secondary mb-3"
                                                                    onClick={() => updateSlide(index, {
                                                                        buttonUrl: '',
                                                                        openInNewTab: false,
                                                                        buttonLabel: ''
                                                                    })}
                                                                >
                                                                    <i className="icon-cancel-circled" /> Clear button
                                                                </button>
                                                            )}

                                                            <TextControl
                                                                label="Label button"
                                                                placeholder="Enter label..."
                                                                className="mb-1"
                                                                value={slide.buttonLabel}
                                                                onChange={(value) => updateSlide(index, {buttonLabel: value})}
                                                            />

                                                            <LinkControl
                                                                value={{
                                                                    url: slide.buttonUrl,
                                                                    opensInNewTab: slide.openInNewTab,
                                                                }}
                                                                onChange={(newValue) => {
                                                                    const url = newValue?.url ?? '';
                                                                    const openTab = newValue?.opensInNewTab ?? false;
                                                                    updateSlide(index, {
                                                                        buttonUrl: url,
                                                                        openInNewTab: url ? openTab : false,
                                                                    });
                                                                }}
                                                                withCreateSuggestion={true}
                                                                allowTarget={true}
                                                            />

                                                            <hr/>

                                                            <TextControl
                                                                label="Custom classes"
                                                                value={slide.customClasses}
                                                                onChange={(value) => updateSlide(index, {customClasses: value})}
                                                            />

                                                            <hr/>
                                                            <Button
                                                                onClick={() => removeSlide(index)}
                                                                className="components-button is-secondary"
                                                                isDestructive
                                                            >
                                                                Remove slide
                                                            </Button>
                                                        </div>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                        <Button onClick={addSlide} isPrimary>
                            Add slide
                        </Button>
                    </PanelBody>
                </InspectorControls>

                {/* Podgląd slidera w edytorze (tylko podgląd, finalnie HTML generuje render.php) */}
                {slides.length ? (
                    <Swiper
                        key={effectFade ? 'fade' : 'slide'}
                        modules={swiperModules}
                        navigation={ arrows }
                        pagination={ dots ? { clickable: true } : false }
                        effect={effectFade ? 'fade' : 'slide'}
                        fadeEffect={{ crossFade: true }}
                        autoHeight={true}
                        onSwiper={setSwiperInstance}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide
                                key={index}
                                style={{ backgroundColor: slide.bgColor, color: slide.textColor }}
                                className={`slide-${index}
                                    ho-module-m-001-slider-v1__horizontal-alignment-${slide.horizontalAlignment}
                                    ho-module-m-001-slider-v1__vertical-alignment-${slide.verticalAlignment}
                                    ${!slide.overLayGradient ? 'ho-module-m-001-slider-v1__overlay-gradient-hidden' : ''}
                                    ${slide.overLayFull ? 'ho-module-m-001-slider-v1__overlay-full' : ''}
                                    ${slide.customClasses}
                                `}
                            >
                                {slide.imageUrl ? (
                                    <img
                                        className={`ho-module-m-001-slider-v1__image object-position-${slide.imagePosition}`}
                                        src={slide.imageUrl}
                                        alt="Preview"
                                    />
                                ) : null}
                                <div className={`container d-flex text-${slide.horizontalAlignment} justify-content-${slide.horizontalAlignment} ${
                                    (slide.verticalAlignment === 'start' || slide.verticalAlignment === 'end')
                                        ? (slide.verticalAlignment === 'start' ? 'mt-0' : 'mb-0')
                                        : ''
                                }`}>
                                    <div>
                                        {slide.title && <Tag className="h2">{slide.title}</Tag>}
                                        {slide.description && <p>{slide.description}</p>}
                                        {slide.caption && <p><i>{slide.caption}</i></p>}

                                        {slide.buttonUrl && slide.buttonLabel && (
                                            <a
                                                className="btn btn--blur-light"
                                                href={slide.buttonUrl}
                                                target={slide.openInNewTab ? '_blank' : undefined}
                                                rel={slide.openInNewTab ? 'noopener noreferrer' : undefined}
                                            >
                                                {slide.buttonLabel}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <h2 className="ho-bg-primary">[m-001] Slider v1</h2>
                )}
            </div>
        );
    },

    // ----- 2) Zapis: pusty, bo jest to blok dynamiczny -----
    save: () => {
        return null;
    },
});
