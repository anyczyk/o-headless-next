import { registerBlockType } from '@wordpress/blocks';
import {
    useBlockProps,
    InspectorControls, RichText,
} from '@wordpress/block-editor';
import {PanelBody, TextControl, SelectControl, ToggleControl} from '@wordpress/components';

registerBlockType('semdesign/m-002-header-v1', {
    attributes: {
        title: {
            type: 'string',
            default: '',
        },
        tagName: {
            type: 'string',
            default: 'h2',
        },
        position: {
            type: "boolean",
            default: false
        }
    },

    edit: (props) => {
        const { attributes, setAttributes, clientId } = props;
        const { title, tagName, position } = attributes;
        const blockProps = useBlockProps();
        blockProps.className += ' ho-module-m-002-header-v1 d-flex align-items-center pt-1 pb-1';
        if (position) {
            blockProps.className += ' position-active';
        }

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

        const togglePosition = () => {
            setAttributes({ position: !position });
        };

        const handleMouseEnter = () => {
            wp.data.dispatch('core/block-editor').selectBlock(clientId);
        };

        return (
            <div {...blockProps} onClick={handleMouseEnter}>
                <InspectorControls>
                    <PanelBody title="Block Settings">
                        <ToggleControl
                            label="Position outside"
                            checked={position}
                            onChange={togglePosition}
                        />
                        {/*<TextControl*/}
                        {/*    label="Title"*/}
                        {/*    value={title}*/}
                        {/*    onChange={(value) => setAttributes({ title: value })}*/}
                        {/*/>*/}
                        <SelectControl
                            label="Tag"
                            value={tagName}
                            options={tagOptions}
                            onChange={(value) => setAttributes({ tagName: value })}
                        />
                    </PanelBody>
                </InspectorControls>
                <div className={'container'}>
                    <RichText
                        className="ho-module-m-002-header-v1__title"
                        tagName={tagName}
                        value={title}
                        onChange={(value) => setAttributes({ title: value })}
                        placeholder="Title..."
                    />
                    {/*{React.createElement(tagName, {}, title || 'Edit Block - see right side')}*/}
                </div>
            </div>
        );
    },

    save: (props) => {
        const { attributes } = props;
        const { title, tagName, position } = attributes;
        const blockProps = useBlockProps.save();
        blockProps.className += ' ho-module-m-002-header-v1 d-flex align-items-center pt-1 pb-1';
        if (position) {
            blockProps.className += ' position-active';
        }

        return (
            title && (
                <div {...blockProps}>
                    <div className="container">
                        {React.createElement(tagName || 'div', { className: 'ho-module-m-002-header-v1__title' }, title)}
                    </div>
                </div>
            )
        );
    },
});
