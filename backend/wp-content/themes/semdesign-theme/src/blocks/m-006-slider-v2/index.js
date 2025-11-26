import { __ } from '@wordpress/i18n';
import { useState, useRef } from '@wordpress/element';
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
    BaseControl
} from '@wordpress/components';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Komponent umożliwiający formatowanie tekstu – wrapowanie zaznaczonego fragmentu
const TextareaWithFormatting = ({ slide, index, updateSlide }) => {
    const [selection, setSelection] = useState({ start: 0, end: 0 });
    const textareaRef = useRef(null);

    const handleSelectionChange = () => {
        if (textareaRef.current) {
            const start = textareaRef.current.selectionStart;
            const end = textareaRef.current.selectionEnd;
            setSelection({ start, end });
        }
    };

    const wrapSelection = (tag) => {
        const text = slide.description || '';
        const { start, end } = selection;
        if (start === end) return;
        const before = text.slice(0, start);
        const selected = text.slice(start, end);
        const after = text.slice(end);
        let wrapped;
        if (tag === 'a') {
            wrapped = `<a target="_blank" href="#">${ selected }</a>`;
        } else {
            wrapped = `<${tag}>${ selected }</${tag}>`;
        }
        const newText = before + wrapped + after;
        updateSlide(index, { description: newText });
        setSelection({ start: 0, end: 0 });
    };

    return (
        <>
            <TextareaControl
                label="Description"
                value={ slide.description }
                onChange={ ( value ) => updateSlide(index, { description: value }) }
                onKeyUp={ handleSelectionChange }
                onMouseUp={ handleSelectionChange }
                ref={ textareaRef }
            />

            <button
                className="components-button is-secondary fw-bold"
                disabled={selection.start === selection.end}
                onClick={() => wrapSelection('strong')}
            >
                b
            </button>
            {' '}
            <button
                className="components-button is-secondary fst-italic"
                disabled={selection.start === selection.end}
                onClick={() => wrapSelection('i')}
            >
                i
            </button>
            {' '}
            <button
                className="components-button is-secondary"
                disabled={selection.start === selection.end}
                onClick={() => wrapSelection('a')}
            >
                link
            </button>
        </>
    );
};

registerBlockType('semdesign/m-006-slider-v2', {
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
        delay: {
            type: "number",
            default: 5000
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
                delay = 5000,
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
        const [showTextForImage, setShowTextForImage] = useState({});
        // const refSwiper = useRef(null);


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
                    subTitle: '',
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
            setTimeout(function() {
                swiperInstance.updateAutoHeight();
            },600);
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
            className: `swiper-module ho-module-m-006-slider-v2 ho-module-m-006-slider-v2--${size} ${
                slides.length > 1 ? 'ho-module-m-006-slider-v2--swiper-active' : ''
            } ${autoHeight ? 'ho-module-m-006-slider-v2--auto-height' : ''}`,
        });

        const toggleShowText = (index) => {
            setShowTextForImage((prev) => ({
                ...prev,
                [index]: !prev[index],
            }));

            setTimeout(function () {
                swiperInstance.updateAutoHeight();
            }, 200);
        };

        return (
            <div {...blockProps} onClick={handleMouseEnter}>
                <InspectorControls>
                    <PanelBody title="Ustawienia Slidera">
                        {/*<SelectControl*/}
                        {/*    label="Size"*/}
                        {/*    value={size}*/}
                        {/*    options={sizeOptions}*/}
                        {/*    onChange={(value) => {*/}
                        {/*        setAttributes({ size: value });*/}
                        {/*        setTimeout(() => {*/}
                        {/*            if (swiperInstance) {*/}
                        {/*                swiperInstance.update();*/}
                        {/*            }*/}
                        {/*        }, 300);*/}
                        {/*    }}*/}
                        {/*/>*/}
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
                        {autoplay ? <TextControl
                            type="number"
                            label="Slide delay [ms]"
                            value={delay}
                            onChange={ ( value ) => setAttributes({ delay: parseInt(value, 10) || 0 }) }
                            min={ 0 }
                            max={ 100000 }
                            step={ 1000 }
                        /> : ''}
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
                            onChange={toggleEffectFade}
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
                            onChange={(value) => setAttributes({ customAttributes: value })}
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
                                                                <i className="icon-drag" />
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
                                                                                <div
                                                                                    className="components-button is-secondary">
                                                                                    Choose image
                                                                                </div>
                                                                            )}
                                                                        </Button>
                                                                    )}
                                                                />
                                                            </MediaUploadCheck>

                                                            {slide.imageUrl && (
                                                                <>
                                                                    {/*<BaseControl label="Image position">*/}
                                                                    {/*    <div*/}
                                                                    {/*        className="d-grid gap-1 grid-template-columns-repeat-3-1fr">*/}
                                                                    {/*        <button*/}
                                                                    {/*            className={`components-button ho-icon-position ho-icon-position--left-top ${*/}
                                                                    {/*                slide.imagePosition === 'left-top' ? 'is-primary' : 'is-secondary'*/}
                                                                    {/*            }`}*/}
                                                                    {/*            onClick={() => updateSlide(index, {imagePosition: 'left-top'})}*/}
                                                                    {/*            title="left-top"*/}
                                                                    {/*        >*/}
                                                                    {/*            <i className="dashicons dashicons-arrow-up-alt2"/>*/}
                                                                    {/*        </button>*/}
                                                                    {/*        <button*/}
                                                                    {/*            className={`components-button ho-icon-position ${*/}
                                                                    {/*                slide.imagePosition === 'top' ? 'is-primary' : 'is-secondary'*/}
                                                                    {/*            }`}*/}
                                                                    {/*            onClick={() => updateSlide(index, {imagePosition: 'top'})}*/}
                                                                    {/*            title="top"*/}
                                                                    {/*        >*/}
                                                                    {/*            <i className="dashicons dashicons-arrow-up-alt2"/>*/}
                                                                    {/*        </button>*/}
                                                                    {/*        <button*/}
                                                                    {/*            className={`components-button ho-icon-position ho-icon-position--right-top ${*/}
                                                                    {/*                slide.imagePosition === 'right-top' ? 'is-primary' : 'is-secondary'*/}
                                                                    {/*            }`}*/}
                                                                    {/*            onClick={() => updateSlide(index, {imagePosition: 'right-top'})}*/}
                                                                    {/*            title="right-top"*/}
                                                                    {/*        >*/}
                                                                    {/*            <i className="dashicons dashicons-arrow-up-alt2"/>*/}
                                                                    {/*        </button>*/}

                                                                    {/*        <button*/}
                                                                    {/*            className={`components-button ho-icon-position ${*/}
                                                                    {/*                slide.imagePosition === 'left' ? 'is-primary' : 'is-secondary'*/}
                                                                    {/*            }`}*/}
                                                                    {/*            onClick={() => updateSlide(index, {imagePosition: 'left'})}*/}
                                                                    {/*            title="Left"*/}
                                                                    {/*        >*/}
                                                                    {/*            <i className="dashicons dashicons-arrow-left-alt2"/>*/}
                                                                    {/*        </button>*/}
                                                                    {/*        <button*/}
                                                                    {/*            className={`components-button ho-icon-position ${*/}
                                                                    {/*                slide.imagePosition === 'center' ? 'is-primary' : 'is-secondary'*/}
                                                                    {/*            }`}*/}
                                                                    {/*            onClick={() => updateSlide(index, {imagePosition: 'center'})}*/}
                                                                    {/*            title="center"*/}
                                                                    {/*        >*/}
                                                                    {/*            <i className="dashicons dashicons-fullscreen-exit-alt"/>*/}
                                                                    {/*        </button>*/}
                                                                    {/*        <button*/}
                                                                    {/*            className={`components-button ho-icon-position ${*/}
                                                                    {/*                slide.imagePosition === 'right' ? 'is-primary' : 'is-secondary'*/}
                                                                    {/*            }`}*/}
                                                                    {/*            onClick={() => updateSlide(index, {imagePosition: 'right'})}*/}
                                                                    {/*            title="right"*/}
                                                                    {/*        >*/}
                                                                    {/*            <i className="dashicons dashicons-arrow-right-alt2"/>*/}
                                                                    {/*        </button>*/}

                                                                    {/*        <button*/}
                                                                    {/*            className={`components-button ho-icon-position ho-icon-position--left-bottom ${*/}
                                                                    {/*                slide.imagePosition === 'left-bottom' ? 'is-primary' : 'is-secondary'*/}
                                                                    {/*            }`}*/}
                                                                    {/*            onClick={() => updateSlide(index, {imagePosition: 'left-bottom'})}*/}
                                                                    {/*            title="left-bottom"*/}
                                                                    {/*        >*/}
                                                                    {/*            <i className="dashicons dashicons-arrow-down-alt2"/>*/}
                                                                    {/*        </button>*/}
                                                                    {/*        <button*/}
                                                                    {/*            className={`components-button ho-icon-position ${*/}
                                                                    {/*                slide.imagePosition === 'bottom' ? 'is-primary' : 'is-secondary'*/}
                                                                    {/*            }`}*/}
                                                                    {/*            onClick={() => updateSlide(index, {imagePosition: 'bottom'})}*/}
                                                                    {/*            title="bottom"*/}
                                                                    {/*        >*/}
                                                                    {/*            <i className="dashicons dashicons-arrow-down-alt2"/>*/}
                                                                    {/*        </button>*/}
                                                                    {/*        <button*/}
                                                                    {/*            className={`components-button ho-icon-position ho-icon-position--right-bottom ${*/}
                                                                    {/*                slide.imagePosition === 'right-bottom' ? 'is-primary' : 'is-secondary'*/}
                                                                    {/*            }`}*/}
                                                                    {/*            onClick={() => updateSlide(index, {imagePosition: 'right-bottom'})}*/}
                                                                    {/*            title="right-bottom"*/}
                                                                    {/*        >*/}
                                                                    {/*            <i className="dashicons dashicons-arrow-down-alt2"/>*/}
                                                                    {/*        </button>*/}
                                                                    {/*    </div>*/}
                                                                    {/*</BaseControl>*/}

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

                                                            {/*<ToggleControl*/}
                                                            {/*    label="OverLay"*/}
                                                            {/*    checked={slide.overLayGradient}*/}
                                                            {/*    onChange={() => toggleOverLayGradient(index)}*/}
                                                            {/*/>*/}

                                                            {/*{slide.overLayGradient && (*/}
                                                            {/*    <ToggleControl*/}
                                                            {/*        label="OverLay Full"*/}
                                                            {/*        checked={slide.overLayFull}*/}
                                                            {/*        onChange={() => toggleOverLayFull(index)}*/}
                                                            {/*    />*/}
                                                            {/*)}*/}

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
                                                                        onClick={() => updateSlide(index, {horizontalAlignment: 'center'})}
                                                                    >
                                                                        <i className="dashicons dashicons-editor-aligncenter"/>
                                                                    </button>
                                                                    <button
                                                                        className={`components-button ${
                                                                            slide.horizontalAlignment === 'end' ? 'is-primary' : 'is-secondary'
                                                                        }`}
                                                                        onClick={() => updateSlide(index, {horizontalAlignment: 'end'})}
                                                                    >
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
                                                                        onClick={() => updateSlide(index, {verticalAlignment: 'center'})}
                                                                    >
                                                                        <i className="dashicons dashicons-image-flip-vertical"/>
                                                                    </button>
                                                                    <button
                                                                        className={`components-button ${
                                                                            slide.verticalAlignment === 'end' ? 'is-primary' : 'is-secondary'
                                                                        }`}
                                                                        onClick={() => updateSlide(index, {verticalAlignment: 'end'})}
                                                                    >
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
                                                            <hr />
                                                            <TextControl
                                                                label="Title"
                                                                value={slide.title}
                                                                onChange={(value) => updateSlide(index, {title: value})}
                                                            />
                                                            <hr/>
                                                            <TextControl
                                                                label="Sub Title"
                                                                value={slide.subTitle}
                                                                onChange={(value) => updateSlide(index, {subTitle: value})}
                                                            />
                                                            <hr/>
                                                            <TextareaWithFormatting
                                                                slide={slide}
                                                                index={index}
                                                                updateSlide={updateSlide}
                                                            />
                                                            <hr/>
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
                                                                    onClick={() =>
                                                                        updateSlide(index, {
                                                                            buttonUrl: '',
                                                                            openInNewTab: false,
                                                                            buttonLabel: ''
                                                                        })
                                                                    }
                                                                >
                                                                    <i className="icon-cancel-circled"/> Clear button
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
                        navigation={arrows}
                        pagination={dots ? { clickable: true } : false}
                        effect={effectFade ? 'fade' : 'slide'}
                        fadeEffect={{ crossFade: true }}
                        autoHeight={autoHeight}
                        onSwiper={setSwiperInstance}
                        // ref={refSwiper}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide
                                key={index}
                                style={{ backgroundColor: slide.bgColor, color: slide.textColor }}
                                className={`d-flex justify-content-center slide-${index} ho-module-m-006-slider-v2__horizontal-alignment-${slide.horizontalAlignment} ho-module-m-006-slider-v2__vertical-alignment-${slide.verticalAlignment} ${slide.customClasses}`}
                            >
                                <div className={`d-flex w-100 p-lg-5 justify-content-center ${!autoHeight ? 'mt-auto mb-auto' : ''}`}>
                                    {slide.imageUrl ? (
                                        <div
                                            className={`ho-module-m-006-slider-v2__wrap-image d-flex justify-content-center ${!autoHeight ? 'align-items-center' : ''}`}
                                        >
                                            <img
                                                className={`ho-module-m-006-slider-v2__image ms-auto me-auto object-position-${slide.imagePosition}`}
                                                src={slide.imageUrl}
                                                alt="Preview"
                                            />
                                        </div>
                                    ) : null}

                                    {((slide.buttonUrl && slide.buttonLabel) || slide.caption || slide.description || slide.title || slide.subTitle) ? (
                                        <>
                                            <div
                                                className={`ho-module-m-006-slider-v2__wrap-text d-flex ${
                                                    showTextForImage[index] ? 'ho-module-m-006-slider-v2__wrap-text--show' : ''
                                                } text-${slide.horizontalAlignment} justify-content-${slide.horizontalAlignment}`}
                                            >
                                                <div className="ps-3 pe-3 ps-lg-5 pe-lg-5 pt-3 pb-3 pt-lg-0 pb-lg-0 overflow-auto d-flex w-100">
                                                    <div className={`d-flex flex-column w-100 ${
                                                        slide.verticalAlignment === 'start' || slide.verticalAlignment === 'end'
                                                            ? slide.verticalAlignment === 'start'
                                                                ? 'mt-0 mb-auto'
                                                                : 'mb-0 mt-auto'
                                                            : 'mt-auto mb-auto'
                                                    }`}>
                                                        {slide.title && <Tag className="ho-module-m-006-slider-v2__title" dangerouslySetInnerHTML={{ __html: slide.title }} />}
                                                        {slide.subTitle && <p className="ho-module-m-006-slider-v2__sub-title" dangerouslySetInnerHTML={{ __html: slide.subTitle }} />}
                                                        {slide.description && <p className="ho-module-m-006-slider-v2__description" dangerouslySetInnerHTML={{ __html: slide.description }} />}
                                                        {slide.caption && <p className="ho-module-m-006-slider-v2__caption"><i dangerouslySetInnerHTML={{ __html: slide.caption }} /></p>}
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
                                            </div>
                                            <button
                                                aria-label="Info - show description"
                                                onClick={() => toggleShowText(index)}
                                                className="ho-module-m-006-slider-v2__toggle-text"
                                            >
                                                <i className="icon-info-circled"></i>
                                            </button>
                                        </>
                                    ) : (
                                        ''
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <h2 className="ho-bg-primary">[m-006] Slider v2</h2>
                )}
            </div>
        );
    },
    save: () => {
        return null;
    },
});
