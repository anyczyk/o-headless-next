import { registerBlockType } from '@wordpress/blocks';
import {
    useBlockProps,
    InspectorControls,
    MediaUpload,
    MediaUploadCheck,
    RichText
} from '@wordpress/block-editor';
import { PanelBody, Button, TextControl, SelectControl } from '@wordpress/components';

// react-beautiful-dnd
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

registerBlockType('semdesign/m-003-portfolio-v1', {
    edit: (props) => {
        const {
            attributes: { portfolio = [], tagName = 'h3' },
            setAttributes,
            clientId,
        } = props;

        // Funkcja wywoływana po "upuszczeniu" elementu
        const onDragEnd = (result) => {
            if (!result.destination) return;

            const newPortfolio = Array.from(portfolio);
            // Wycinamy przenoszony element
            const [movedItem] = newPortfolio.splice(result.source.index, 1);
            // Wstawiamy go w nowe miejsce
            newPortfolio.splice(result.destination.index, 0, movedItem);

            setAttributes({ portfolio: newPortfolio });
        };

        const tagOptions = [
            { label: 'Heading 2 [h2]', value: 'h2' },
            { label: 'Heading 3 [h3]', value: 'h3' },
            { label: 'Heading 4 [h4]', value: 'h4' },
            { label: 'Heading 5 [h5]', value: 'h5' },
            { label: 'Heading 6 [h6]', value: 'h6' },
            { label: 'Paragraph [p]', value: 'p' },
            { label: 'Div [div]', value: 'div' },
        ];

        const updateItem = (index, data) => {
            const newPortfolio = portfolio.map((slide, i) => {
                if (i === index) {
                    return { ...slide, ...data };
                }
                return slide;
            });
            setAttributes({ portfolio: newPortfolio });
        };

        const removeImage = (index) => {
            updateItem(index, { imageUrl: '', imageAlt: '', imageSrcset: '' });
        };

        const removeItem = (index) => {
            const newPortfolio = portfolio.filter((item, i) => i !== index);
            setAttributes({ portfolio: newPortfolio });
        };

        const addItem = () => {
            const newItem = [
                ...portfolio,
                { imageUrl: '', imageAlt: '', imageSrcset: '',  title: '', description: '', urlSite: '', urlGooglePlay: '', urlYoutube: '' },
            ];
            setAttributes({ portfolio: newItem });
        };

        const handleMouseEnter = () => {
            wp.data.dispatch('core/block-editor').selectBlock(clientId);
        };

        const blockProps = useBlockProps({ className: 'ho-module-m-003-portfolio-v1 pt-5 pb-5' });

        return (
            <div {...blockProps} onClick={handleMouseEnter}>
                <InspectorControls>
                    <PanelBody title="Ustawienia Portfolio">
                        <p>Main options</p>
                        <SelectControl
                            label="Title Tag"
                            value={tagName}
                            options={tagOptions}
                            onChange={(value) => setAttributes({ tagName: value })}
                        />
                    </PanelBody>
                </InspectorControls>


                    <div className="container container--960">
                        {/* DRAG & DROP CONTEXT */}
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="portfolio-list-droppable">
                                {(provided) => (
                                    <ul
                                        className="ho-module-m-003-portfolio-v1__main-list list-unstyled d-flex flex-column gap-3"
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                    >
                                        {portfolio.length > 0 ? (
                                            portfolio.map((item, index) => (
                                                <Draggable
                                                    key={`portfolio-${index}`}
                                                    draggableId={`portfolio-${index}`}
                                                    index={index}
                                                >
                                                    {(provided) => (
                                                        <li
                                                            {...provided.draggableProps}
                                                            ref={provided.innerRef}
                                                            style={{
                                                                ...provided.draggableProps.style
                                                            }}
                                                            className="ho-module-m-003-portfolio-v1__main-list-item d-flex"
                                                        >
                                                            <span
                                                                className="ho-module-m-003-portfolio-v1__move-item"
                                                                {...provided.dragHandleProps}         // TU DRAG HANDLE
                                                            >
                                                                <i className="icon-drag" />
                                                            </span>

                                                            <div className="ho-module-m-003-portfolio-v1__image flex-shrink-1">
                                                                <MediaUploadCheck>
                                                                    <MediaUpload
                                                                        // onSelect={(media) =>
                                                                        //     updateItem(index, {
                                                                        //         imageUrl: media.sizes && media.sizes.medium
                                                                        //             ? media.sizes.medium.url
                                                                        //             : media.url || media.source_url,
                                                                        //     })
                                                                        //
                                                                        // }

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
                                                                                        <i className="dashicons dashicons-remove"/>{' '}
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
                                                                                    <span
                                                                                        className="d-none">{item.imageUrl ? 'Zmień / Edytuj' : 'Wybierz obraz'}</span>
                                                                                </Button>
                                                                                <div
                                                                                    className="ho-module-m-003-portfolio-v1__image-settings">
                                                                                    <TextControl
                                                                                        placeholder="Alt..."
                                                                                        value={item.imageAlt}
                                                                                        onChange={(value) => updateItem(index, {imageAlt: value})}
                                                                                    />
                                                                                    <TextControl
                                                                                        label="Srcset"
                                                                                        disabled="disabled"
                                                                                        value={item.imageSrcset}
                                                                                        onChange={(value) => updateItem(index, {imageSrcset: value})}
                                                                                        className="d-none"
                                                                                    />
                                                                                </div>

                                                                                {item.imageUrl && (
                                                                                    <img
                                                                                        width="250"
                                                                                        onClick={open}
                                                                                        src={item.imageUrl}
                                                                                        srcSet={item.imageSrcset}
                                                                                        alt={item.imageAlt ? item.imageAlt : ''}
                                                                                    />
                                                                                )}
                                                                            </>
                                                                        )}
                                                                    />
                                                                </MediaUploadCheck>
                                                            </div>

                                                            <div
                                                                className="w-100 d-flex gap-1 align-self-center flex-column pt-3 pb-3 ps-3 pe-3">
                                                                <div className="ho-module-m-003-portfolio-v1__title">
                                                                    <RichText
                                                                        tagName={tagName}
                                                                        className="h4"
                                                                        value={item.title}
                                                                        onChange={(value) =>
                                                                            updateItem(index, {title: value})
                                                                        }
                                                                        placeholder="Wpisz tytuł..."
                                                                    />
                                                                </div>
                                                                <div
                                                                    className="ho-module-m-003-portfolio-v1__description">
                                                                    <RichText
                                                                        tagName="p"
                                                                        value={item.description}
                                                                        onChange={(value) =>
                                                                            updateItem(index, {
                                                                                description: value,
                                                                            })
                                                                        }
                                                                        placeholder="Wpisz opis..."
                                                                    />
                                                                </div>

                                                                <div
                                                                    className="ho-module-m-003-portfolio-v1__www d-flex gap-3">
                                                                    {item.urlSite && (
                                                                        <a
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            href={item.urlSite}
                                                                        >
                                                                            <i className="icon-link"/> WWW
                                                                        </a>
                                                                    )}
                                                                    <TextControl
                                                                        placeholder="URL site"
                                                                        value={item.urlSite}
                                                                        onChange={(value) =>
                                                                            updateItem(index, {urlSite: value})
                                                                        }
                                                                    />
                                                                </div>

                                                                <div
                                                                    className="ho-module-m-003-portfolio-v1__github d-flex gap-3">
                                                                    {item.urlGooglePlay && (
                                                                        <a
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            href={item.urlGooglePlay}
                                                                        >
                                                                            <i className="icon-android"/> APK
                                                                        </a>
                                                                    )}
                                                                    <TextControl
                                                                        placeholder="URL Google Play Store"
                                                                        value={item.urlGooglePlay}
                                                                        onChange={(value) =>
                                                                            updateItem(index, {urlGooglePlay: value})
                                                                        }
                                                                    />
                                                                </div>

                                                                <div
                                                                    className="ho-module-m-003-portfolio-v1__github d-flex gap-3">
                                                                    {item.urlYoutube && (
                                                                        <a
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            href={item.urlYoutube}
                                                                        >
                                                                            <i className="icon-youtube"/> YouTube
                                                                        </a>
                                                                    )}
                                                                    <TextControl
                                                                        placeholder="URL YouTube"
                                                                        value={item.urlYoutube}
                                                                        onChange={(value) =>
                                                                            updateItem(index, {urlYoutube: value})
                                                                        }
                                                                    />
                                                                </div>
                                                                <Button
                                                                    className="components-button is-secondary align-self-start d-flex gap-1"
                                                                    onClick={() => removeItem(index)}
                                                                >
                                                                    <i className="dashicons dashicons-remove"/> Usuń
                                                                    item
                                                                </Button>
                                                            </div>
                                                        </li>
                                                    )}
                                                </Draggable>
                                            ))
                                        ) : (
                                            <h2>Component Portfolio v2</h2>
                                        )}
                                        {/* placeholder */}
                                        {provided.placeholder}
                                    </ul>
                                )}
                            </Droppable>
                        </DragDropContext>

                        <Button className="d-flex gap-1" onClick={addItem} isPrimary>
                            <i className="dashicons dashicons-insert"/> Dodaj item
                        </Button>
                    </div>

            </div>
        );
    },

    save: (props) => {
        const {
            attributes: {portfolio = [], tagName = 'h3'},
        } = props;

        const blockProps = useBlockProps.save({
            className: 'ho-module-m-003-portfolio-v1 pt-5 pb-5',
        });
        const Tag = tagName;
        return (
            <div {...blockProps}>
                <div className="container container--960">
                    <ul className="ho-module-m-003-portfolio-v1__main-list list-unstyled d-flex flex-column gap-3">
                        {portfolio.map((item, index) => (
                            <li
                                key={index}
                                className="ho-module-m-003-portfolio-v1__main-list-item d-flex"
                            >
                                {item.imageUrl && (
                                    <div className="ho-module-m-003-portfolio-v1__image flex-shrink-1">
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={item.urlSite}
                                        >
                                            <img width="250" src={item.imageUrl} srcSet={item.imageSrcset} alt={item.imageAlt ? item.imageAlt : ''} />
                                        </a>
                                    </div>
                                )}
                                <div className="w-100 d-flex gap-1 align-self-center flex-column pt-3 pb-3 ps-3 pe-3">
                                    {item.title && (
                                        <div className="ho-module-m-003-portfolio-v1__title">
                                            <Tag className="h4">{item.title}</Tag>
                                        </div>
                                    )}
                                    {item.description && (
                                        <div className="ho-module-m-003-portfolio-v1__description">
                                            <p>{item.description}</p>
                                        </div>
                                    )}
                                    {item.urlSite && (
                                        <div className="ho-module-m-003-portfolio-v1__www">
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={item.urlSite}
                                            >
                                                <i className="icon-link" /> WWW
                                            </a>
                                        </div>
                                    )}
                                    {item.urlGooglePlay && (
                                        <div className="ho-module-m-003-portfolio-v1__github">
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={item.urlGooglePlay}
                                            >
                                                <i className="icon-android" /> APK
                                            </a>
                                        </div>
                                    )}
                                    {item.urlYoutube && (
                                        <div className="ho-module-m-003-portfolio-v1__github">
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={item.urlYoutube}
                                            >
                                                <i className="icon-youtube" /> YouTube
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    },
});
