import { registerBlockType } from '@wordpress/blocks';
import {
    useBlockProps,
    MediaUpload,
    MediaUploadCheck,
    InspectorControls,
} from '@wordpress/block-editor';
import {Button, PanelBody, SelectControl} from '@wordpress/components';
import { useState } from '@wordpress/element';

registerBlockType('semdesign/m-004-parallax-v1', {
    attributes: {
        imageUrl: {
            type: 'string',
            default: '',
        },
    },

    edit: ({ attributes, setAttributes }) => {
        const { imageUrl, size } = attributes;

        const sizeOptions = [
            { label: 'Large', value: 'large' },
            { label: 'Medium', value: 'medium' },
            { label: 'Small', value: 'small' },
        ];

        const blockProps = useBlockProps({
            className: `ho-module-m-004-parallax-v1 ho-module-m-004-parallax-v1--${size}`,
        });

        const onSelectImage = (media) => {
            setAttributes({ imageUrl: media.url });
        };

        return (
            <div {...blockProps}>
                <InspectorControls>
                    <PanelBody title="Image">
                        <SelectControl
                            label="Size"
                            value={size}
                            options={sizeOptions}
                            onChange={(value) => {
                                setAttributes({ size: value });
                            }}
                        />
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onSelectImage}
                                allowedTypes={['image']}
                                render={({ open }) => (
                                    <Button onClick={open} variant="primary">
                                        {imageUrl ? 'Change Image' : 'Select Image'}
                                    </Button>
                                )}
                            />
                        </MediaUploadCheck>
                    </PanelBody>
                </InspectorControls>
                <div style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}} className={'ho-module-m-004-parallax-v1__wrap-image'} />
            </div>
        );
    },

    save: ({ attributes }) => {
        const { imageUrl, size } = attributes;
        // const blockProps = useBlockProps.save();

        const blockProps = useBlockProps.save({
            className: `ho-module-m-004-parallax-v1 ho-module-m-004-parallax-v1--${size}`
        });

        return (
            <div {...blockProps}>
                <div
                    style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}
                    className="ho-module-m-004-parallax-v1__wrap-image lazy-background"
                >
                </div>
            </div>
        );
    },
});
