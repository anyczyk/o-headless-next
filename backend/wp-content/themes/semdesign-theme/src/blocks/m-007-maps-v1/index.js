import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { registerBlockType } from '@wordpress/blocks';
import {
    useBlockProps,
    InspectorControls,
    PanelColorSettings,
    MediaUpload,
    MediaUploadCheck
} from '@wordpress/block-editor';

import {
    Button,
    TextControl,
    PanelBody,
    SelectControl,
    RangeControl,
    ToggleControl
} from '@wordpress/components';

import { TextareaWithFormatting } from '../../assets/js/blocks-components/TextareaWithFormatting';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import {
    GoogleMap,
    Marker,
    InfoWindow,
    useJsApiLoader
} from '@react-google-maps/api';

registerBlockType('semdesign/m-007-maps-v1', {
    attributes: {
        image: {
            type: 'object',
            default: {
                url: '',
                alt: ''
            }
        },
        imageLink: {
            type: 'string',
            default: ''
        },
        pins: {
            type: 'array',
            default: []
        },
        customAttributes: {
            type: 'string',
            default: ''
        },
        size: {
            type: 'string',
            default: 'medium'
        },
        zoom: {
            type: 'string',
            default: '2'
        },
        coordinatesCenter: {
            type: 'string',
            default: '0,0'
        },
        topOverlap: {
            type: 'boolean',
            default: false
        },
        textColor: {
            type: 'string',
            default: 'ho-text-color-default'
        },
        bgColor: {
            type: 'string',
            default: 'ho-bg-color-default'
        },
    },

    edit: (props) => {
        const {
            attributes: {
                image,
                imageLink = '',
                pins = [],
                customAttributes = '',
                size = 'medium',
                coordinatesCenter = '0,0',
                textColor = 'ho-text-color-default',
                bgColor = 'ho-bg-color-default',
                zoom = '2'
            },
            setAttributes,
            clientId
        } = props;

        const [activeSlideIndex, setActiveSlideIndex] = useState(null);
        const [selectedMarker, setSelectedMarker] = useState(null);
        const [lockMap, setLockMap] = useState(true);

        const toggleLockMap = () => {
            setLockMap(prev => !prev);
        };

        // Wyliczamy początkowe położenie mapy:
        const initialCenter = coordinatesCenter !== '0,0'
            ? {
                lat: parseFloat(coordinatesCenter.split(',')[0]),
                lng: parseFloat(coordinatesCenter.split(',')[1])
            }
            : { lat: 0, lng: 0 };

        // Lokalny stan: obiekt mapy + bieżące centrum i zoom
        const [mapInstance, setMapInstance] = useState(null);
        const [currentCenter, setCurrentCenter] = useState(initialCenter);
        const [currentZoom, setCurrentZoom] = useState(parseInt(zoom));

        const handleSlideToggle = (index, move) => {
            if (move) {
                setActiveSlideIndex(null);
            } else {
                setActiveSlideIndex(activeSlideIndex === index ? null : index);
            }
        };

        const onDragEnd = (result) => {
            if (!result.destination) return;
            const newPins = Array.from(pins);
            const [movedItem] = newPins.splice(result.source.index, 1);
            newPins.splice(result.destination.index, 0, movedItem);
            setAttributes({ pins: newPins });
        };

        const sizeOptions = [
            { label: 'Small (h: 250px)', value: 'small' },
            { label: 'Medium (h: 360px)', value: 'medium' },
            { label: 'Large (h: 500px)', value: 'large' },
            { label: 'Half full (h: 50vh)', value: 'half-full' },
            { label: 'Full (h: 100vh)', value: 'full' },
            { label: 'Aspect ratio 3:2', value: 'aspect-ratio-3-2' },
            { label: 'Aspect ratio 2:1', value: 'aspect-ratio-2-1' },
            { label: 'Aspect ratio 16:9 (laptops 15.6")', value: 'aspect-ratio-16-9' },
            { label: 'Aspect ratio 16:10 (laptops 16")', value: 'aspect-ratio-16-10' },
            { label: 'Aspect ratio 21:9 (Panorama screen)', value: 'aspect-ratio-panorama' },
            { label: 'Aspect ratio 2.39:1 (Cinema screen)', value: 'aspect-ratio-cinema' },
        ];

        // Funkcja dodająca pinezkę
        const addPin = (lat, lng) => {
            const newPin = {
                pinCustomAttributes: '',
                coordinatesPin: (lat && lng) ? `${lat},${lng}` : '',
                pinLink: false,
                pinTitle: '',
                link: '',
                pinDescription: '',
                textColor: textColor,
                bgColor: bgColor
            };
            setAttributes({ pins: [...pins, newPin] });
        };

        const removePin = (index) => {
            const newPins = pins.filter((_, i) => i !== index);
            setAttributes({ pins: newPins });
        };

        const updatePin = (index, data) => {
            const newPins = pins.map((pin, i) => {
                if (i === index) {
                    return { ...pin, ...data };
                }
                return pin;
            });
            setAttributes({ pins: newPins });
        };

        const togglePinLink = (index) => {
            const currentValue = pins[index].pinLink;
            updatePin(index, { pinLink: !currentValue });
        };

        const handleMarkerClick = (markerIndex) => {
            setSelectedMarker(markerIndex);
        };

        const handleMouseEnter = () => {
            // zaznacz blok w edytorze
            wp.data.dispatch('core/block-editor').selectBlock(clientId);
        };

        // Funkcje obsługi mapy (onLoad, onIdle)
        const onMapLoad = (map) => {
            setMapInstance(map);
            const center = map.getCenter();
            setCurrentCenter({ lat: center.lat(), lng: center.lng() });
            if (map.getZoom() !== parseInt(zoom)) {
                map.setZoom(parseInt(zoom));
            }
        };

        const onMapIdle = () => {
            if (mapInstance) {
                const center = mapInstance.getCenter();
                setCurrentCenter({ lat: center.lat(), lng: center.lng() });
                setCurrentZoom(mapInstance.getZoom());
            }
        };

        const { isLoaded, loadError } = useJsApiLoader({
            googleMapsApiKey: 'AIzaSyD3w8OGWy7QNGq8Eb60GrKw3giU7uKrWbA',
        });

        if (loadError) {
            return (
                <div {...useBlockProps()}>
                    {__('Błąd ładowania Google Maps.', 'semdesign')}
                </div>
            );
        }

        if (!isLoaded) {
            return (
                <div {...useBlockProps()}>
                    {__('Ładowanie mapy...', 'semdesign')}
                </div>
            );
        }

        const blockProps = useBlockProps({
            className: `ho-module-m-007-maps-v1 ho-module-m-007-maps-v1--${size}`,
        });

        return (
            <div {...blockProps} onClick={handleMouseEnter}>
                <InspectorControls>
                    <PanelBody title="Settings Map">
                        <SelectControl
                            label="Size"
                            value={size}
                            options={sizeOptions}
                            onChange={(value) => setAttributes({ size: value })}
                        />
                        <TextControl
                            label="Coordinates for Center Map"
                            value={coordinatesCenter}
                            onChange={(value) => setAttributes({ coordinatesCenter: value })}
                        />
                        <RangeControl
                            label="Zoom"
                            value={parseInt(zoom)}
                            onChange={(value) => setAttributes({ zoom: value.toString() })}
                            min={0}
                            max={22}
                            step={1}
                        />
                        <TextControl
                            label="Custom Attributes"
                            value={customAttributes}
                            onChange={(value) => setAttributes({ customAttributes: value })}
                        />
                    </PanelBody>

                    <PanelBody title="Pins">
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="items-list-droppable">
                                {(provided) => (
                                    <div
                                        className="items-list-droppable"
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                    >
                                        {pins.map((item, index) => (
                                            <Draggable
                                                key={`items-${index}`}
                                                draggableId={`items-${index}`}
                                                index={index}
                                            >
                                                {(provided) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        style={{ ...provided.draggableProps.style }}
                                                        className={`slide-settings ho-item-settings ${activeSlideIndex === index ? 'ho-item-settings--show' : ''}`}
                                                    >
                                                        <div className="ho-settings-header">
                                                            <div
                                                                className="ho-settings-header__btn-open-options"
                                                                onClick={() => handleSlideToggle(index)}
                                                            >
                                                                <i className="icon-down-open" /> Pin {index + 1}
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
                                                            <TextControl
                                                                label="Coordinates pin"
                                                                value={item.coordinatesPin}
                                                                onChange={(value) => updatePin(index, { coordinatesPin: value })}
                                                            />
                                                            <ToggleControl
                                                                label="Pin link to Google Maps or Custom Link"
                                                                checked={item.pinLink}
                                                                onChange={() => togglePinLink(index)}
                                                            />
                                                            <hr/>
                                                            <TextControl
                                                                label="Custom Link"
                                                                value={item.link}
                                                                onChange={(value) => updatePin(index, { link: value })}
                                                            />
                                                            {!item.pinLink ? (
                                                                <>
                                                                    <hr/>
                                                                    <TextControl
                                                                        label="Title"
                                                                        value={item.pinTitle}
                                                                        onChange={(value) => updatePin(index, { pinTitle: value })}
                                                                    />
                                                                    <hr/>
                                                                    <TextareaWithFormatting
                                                                        item={item}
                                                                        index={index}
                                                                        updateItem={updatePin}
                                                                    />
                                                                </>
                                                            ) : ''}
                                                            <PanelColorSettings
                                                                title={__('Color', 'semdesign')}
                                                                initialOpen={true}
                                                                className="ps-0 pe-0 pt-3 pb-3"
                                                                colorSettings={[
                                                                    {
                                                                        value: item.textColor,
                                                                        onChange: (newColor) => updatePin(index, { textColor: newColor }),
                                                                        label: __('Text Color', 'semdesign'),
                                                                    },
                                                                    {
                                                                        value: item.bgColor,
                                                                        onChange: (newColor) => updatePin(index, { bgColor: newColor }),
                                                                        label: __('Background Color', 'semdesign'),
                                                                    },
                                                                ]}
                                                            />
                                                            <hr/>
                                                            <Button
                                                                onClick={() => removePin(index)}
                                                                className="components-button is-secondary"
                                                                isDestructive
                                                            >
                                                                Remove item
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
                        <Button onClick={() => addPin()} isPrimary>
                            <i className="icon-location" /> Add pin
                        </Button>
                    </PanelBody>
                    <PanelBody title="Placeholder" initialOpen={true}>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={(media) =>
                                    setAttributes({ image: { url: media.url, alt: media.alt } })
                                }
                                allowedTypes={['image']}
                                value={image.url}
                                render={({ open }) => (
                                    image.url ? (
                                        <>
                                            <img className="mb-2" src={image.url} alt={image.alt} style={{ maxWidth: '100%' }} />
                                            <div className="d-flex w-100 mb-2 justify-content-between">
                                                <Button onClick={() => setAttributes({ image: { url: '', alt: '' } })} isSecondary>
                                                    {__('Remove image', 'semdesign')}
                                                </Button>
                                                <Button onClick={open} isPrimary>
                                                    {__('Change image', 'semdesign')}
                                                </Button>
                                            </div>
                                        </>
                                    ) : (
                                        <Button className="mb-2" onClick={open} isPrimary>
                                            {__('Add image', 'semdesign')}
                                        </Button>
                                    )
                                )}
                            />
                        </MediaUploadCheck>
                        <TextControl
                            label={__('Alt text', 'semdesign')}
                            value={image.alt}
                            onChange={(value) => setAttributes({ image: { ...image, alt: value } })}
                        />
                        <TextControl
                            label="Link"
                            value={imageLink}
                            onChange={(value) => setAttributes({ imageLink: value })}
                        />
                    </PanelBody>
                </InspectorControls>

                {/* Mapa w edytorze */}
                <div className="ho-module-m-007-maps-v1__map w-100">
                    <div className="ho-module-m-007-maps-v1__map-buttons d-flex w-100 gap-2 p-2">
                        <button onClick={() => addPin(currentCenter.lat.toFixed(4), currentCenter.lng.toFixed(4))}
                                disabled={lockMap}
                                className="components-button is-primary"
                        >
                            <i className="icon-location" /> {__('Add Pin', 'semdesign')}
                        </button>
                        <button
                            onClick={() =>
                                setAttributes({
                                    coordinatesCenter: `${currentCenter.lat},${currentCenter.lng}`,
                                    zoom: currentZoom.toString()
                                })
                            }
                            disabled={lockMap}
                            className="components-button is-primary"
                        >
                            <i className="icon-floppy" /> {__('Set current Center coordinate and Zoom', 'semdesign')}
                        </button>
                        <button onClick={toggleLockMap} className="ms-auto components-button is-primary">
                            <i className={lockMap ? 'icon-lock-2' : 'icon-lock-open'}/> {lockMap ? 'Unlock Map' : 'Lock Map'}
                        </button>
                    </div>
                    <div
                        className={`ho-module-m-007-maps-v1__map-init ${lockMap ? 'ho-module-m-007-maps-v1__map-init--lock' : ''} ho-module-m-007-maps-v1__map-init--${size}`}>
                        <p className="ho-module-m-007-maps-v1__map-init-info-set m-0 p-2">Current center coordinates: lat: {currentCenter.lat.toFixed(4)},
                            lng: {currentCenter.lng.toFixed(4)}, zoom: {currentZoom}</p>
                        <GoogleMap
                            center={currentCenter}
                            zoom={parseInt(zoom) ? parseInt(zoom) : 2}
                            onLoad={onMapLoad}
                            onIdle={onMapIdle}
                            mapContainerClassName={`w-100 h-100`}
                        >
                            {pins.map((pin, index) => {
                                const coords = pin.coordinatesPin.split(',');
                                if (coords.length !== 2) return null;
                                const [latitude, longitude] = coords.map(Number);
                                return (
                                    <div key={index}>
                                        <Marker
                                            position={{lat: latitude, lng: longitude}}
                                            label={{
                                                text: `${Number(index + 1)}`,
                                                color: "white",
                                                fontSize: "16px",
                                                fontWeight: "bold"
                                            }}
                                            onClick={() => {
                                                if (pin.pinTitle || pin.pinDescription) {
                                                    handleMarkerClick(index);
                                                } else {
                                                    if (pin.pinLink) {
                                                        if (pin.link) {
                                                            window.open(pin.link, '_blank');
                                                        } else {
                                                            window.open(`https://www.google.com/maps/place/${latitude},${longitude}/@${latitude},${longitude},${zoom}z?hl=en`, '_blank');
                                                        }
                                                    }
                                                }
                                            }}
                                        />
                                        {selectedMarker === index && (pin.pinTitle || pin.pinDescription) && (
                                            <InfoWindow
                                                position={{lat: latitude, lng: longitude}}
                                                onCloseClick={() => setSelectedMarker(null)}
                                                options={
                                                    typeof window !== 'undefined' && window.google && window.google.maps
                                                        ? {pixelOffset: new window.google.maps.Size(0, -30)}
                                                        : {}
                                                }
                                            >
                                                <div className="ho-module-m-007-maps-v1__map-cloud">
                                                    {pin.pinTitle ? <h3 className="h6">{pin.pinTitle}</h3> : ''}
                                                    {pin.pinDescription ? <p>{pin.pinDescription}</p> : ''}
                                                    {pin.link ? (
                                                        <a target="_blank" rel="noreferrer" href={pin.link}>
                                                            <i className="icon-link"></i> More...
                                                        </a>
                                                    ) : (
                                                        <a target="_blank" rel="noreferrer"
                                                           href={`https://www.google.com/maps/place/${latitude},${longitude}/@${latitude},${longitude},${zoom}z?hl=en`}>
                                                            <i className="icon-link"></i> Check on the Google Maps page...
                                                        </a>
                                                    )}
                                                </div>
                                            </InfoWindow>
                                        )}
                                    </div>
                                );
                            })}
                        </GoogleMap>
                    </div>
                    {/*{(() => {*/}
                    {/*    if (image && image.url) {*/}
                    {/*        const imgElement = (*/}
                    {/*            <img*/}
                    {/*                className={`d-block w-100 object-fit-cover ho-module-m-007-maps-v1__placeholder ho-module-m-007-maps-v1__map-init--${size}`}*/}
                    {/*                src={image.url}*/}
                    {/*                alt={image.alt}*/}
                    {/*            />*/}
                    {/*        );*/}
                    {/*        return imageLink ? (*/}
                    {/*            <a href={imageLink} target="_blank" rel="noreferrer">*/}
                    {/*                {imgElement}*/}
                    {/*            </a>*/}
                    {/*        ) : (*/}
                    {/*            imgElement*/}
                    {/*        );*/}
                    {/*    } else {*/}
                    {/*        return <p>No placeholder</p>;*/}
                    {/*    }*/}
                    {/*})()}*/}
                </div>
            </div>
        );
    },

    save: (props) => {
        const {
            attributes: { image, imageLink, pins, size, zoom, coordinatesCenter }
        } = props;

        const blockProps = useBlockProps.save({
            className: 'ho-module-m-007-maps-v1',
        });

        return (
            <div {...blockProps}>
                {/*{pins.map((pin, index) => (*/}
                {/*    <div key={index}>*/}
                {/*        Pin {index} - {pin.coordinatesPin} - {pin.pinTitle} / {pin.pinDescription} / {pin.link}*/}
                {/*    </div>*/}
                {/*))}*/}
                <div className="ho-module-m-007-maps-v1__map w-100">
                    <div
                        data-zoom={zoom}
                        data-center-coordinate={coordinatesCenter}
                        data-pin-titles={pins.map((pin, index) => (index === 0) ? pin.pinTitle : `|${pin.pinTitle}`).join('')}
                        data-pin-descriptions={pins.map((pin, index) => (index === 0) ? pin.pinDescription : `|${pin.pinDescription}`).join('')}
                        data-pin-links={pins.map((pin, index) => (index === 0) ? pin.link : `|${pin.link}`).join('')}
                        data-pin-links-boolean = {pins.map((pin, index) => (index === 0) ? pin.pinLink : `|${pin.pinLink}`).join('')}
                        data-pin-coordinates={pins.map((pin, index) => (index === 0) ? pin.coordinatesPin : `|${pin.coordinatesPin}`).join('')}
                        className={`ho-module-m-007-maps-v1__map-init ho-module-m-007-maps-v1__map-init--${size}`}>
                    </div>

                    {(image && image.url) ? <div className="ho-module-m-007-maps-v1__image-init d-none">
                        {(() => {
                            if (image && image.url) {
                                const imgElement = (
                                    <img
                                        className={`d-block w-100 object-fit-cover ho-module-m-007-maps-v1__placeholder ho-module-m-007-maps-v1__map-init--${size}`}
                                        src={image.url}
                                        alt={image.alt}
                                    />
                                );
                                return imageLink ? (
                                    <a href={imageLink} target="_blank" rel="noreferrer">
                                        {imgElement}
                                    </a>
                                ) : (
                                    imgElement
                                );
                            }
                        })()}
                    </div> : ''}
                </div>
            </div>
        );
    },
});
