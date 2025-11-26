import { registerBlockType } from '@wordpress/blocks';
import {
    useBlockProps,
    InspectorControls, PanelColorSettings,
} from '@wordpress/block-editor';
import {PanelBody, SelectControl, TextControl, ToggleControl} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import {__} from "@wordpress/i18n";

registerBlockType('semdesign/d-003-tile-links-dynamic-v1', {
    edit: (props) => {
        const {
            attributes: { selectedCPT = 'post', postsLimit = null, ids = '', tagName = 'h3', textColor = '', bgColor='', animateTiles = false },
            setAttributes,
            clientId
        } = props;

        const blockProps = useBlockProps({
            className: 'ho-module-d-003-tile-links-dynamic-v1 pt-5 pb-5',
        });

        const [postTypes, setPostTypes] = useState([]);

        const tagOptions = [
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

        const Tag = tagName;

        const toggleAnimateTiles = () => {
            setAttributes({ animateTiles: !animateTiles });
        };

        const handleMouseEnter = () => {
            wp.data.dispatch('core/block-editor').selectBlock(clientId);
        };

        return (
            <div {...blockProps} onClick={handleMouseEnter} style={{backgroundColor: bgColor, color: textColor}}>
                <InspectorControls>
                    <PanelBody title="Ustawienia Slidera">
                        <SelectControl
                            label="Title Tag"
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
                        <ToggleControl
                            label="Animate tiles"
                            checked={animateTiles}
                            onChange={toggleAnimateTiles}
                        />
                        {postTypes.length > 0 ? (
                            <SelectControl
                                label="Select entry type"
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
                                label="Entry limit"
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
                            label="IDs (after the comma)"
                            value={ids}
                            onChange={(value) => {
                                setAttributes({ ids: value });
                            }}
                            help="Enter post IDs separated by commas to display only posts from the selected post type."
                        />
                    </PanelBody>
                </InspectorControls>
                {posts === undefined && <p>Ładowanie wpisów...</p>}
                {posts && posts.length > 0 ? (
                    <div className="container">
                        <ul className="list-unstyled ho-module-m-005-tiles-with-slider-modals-v1__list">
                            {posts.map((post, index) => (
                                <li key={index}>
                                    <a href="#">
                                        <div
                                            className="ho-module-d-003-tile-links-dynamic-v1__tile-image-and-title pt-3 pb-3 ps-3 pe-3">
                                            {post._embedded &&
                                            post._embedded['wp:featuredmedia'] &&
                                            post._embedded['wp:featuredmedia'][0] ? (
                                                <img
                                                    src={
                                                        post._embedded['wp:featuredmedia'][0].source_url
                                                    }
                                                    alt={post.title.rendered}
                                                />
                                            ) : (
                                                'Brak obrazu'
                                            )}
                                            {post.title && (
                                                <Tag
                                                    className="h4 ho-module-d-003-tile-links-dynamic-v1__tile-image-and-title-t pt-3 pb-3 ps-3 pe-3"
                                                    dangerouslySetInnerHTML={{
                                                        __html: post.title.rendered,
                                                    }}
                                                />
                                            )}
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
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
