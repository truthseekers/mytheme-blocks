import { registerBlockType, createBlock } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { InnerBlocks, InspectorControls } from "@wordpress/editor";
import { PanelBody, RangeControl } from "@wordpress/components";
const attributes = {
    columns: {
        type: 'number',
        default: 2
    }
}


registerBlockType('mytheme-blocks/team-members', {
    title: __('Team Members', 'mytheme-blocks'),

    description: __('Block showing a Team Members.', 'mytheme-blocks'),

    icon: 'grid-view',

    category: 'mytheme-category',

    supports: {
        html: false,
        align: ['wide', 'full']
    },

    transforms: {
        from: [
            {
                type: 'block',
                blocks: ['core/gallery'],
                transform: ({ columns, images }) => {
                    console.log(attributes);
                    let inner = images.map(({ alt, id, url }) => createBlock('mytheme-blocks/team-member', { alt, id, url }));
                    return createBlock('mytheme-blocks/team-members', {
                        columns: columns
                    }, inner);
                }
            },
            {
                type: 'block',
                blocks: ['core/image'],
                isMultiBlock: true,
                transform: (attributes) => {
                    let inner = attributes.map(({ alt, id, url }) => createBlock('mytheme-blocks/team-member', { alt, id, url }));
                    return createBlock('mytheme-blocks/team-members', {
                        columns: 3
                    }, inner);
                }
            }
        ]
    },

    keywords: [__('item', 'mytheme-blocks'), __('member', 'mytheme-blocks'),
    __('person', 'mytheme-blocks')],

    attributes,

    edit({ className, attributes, setAttributes }) {
        const { columns } = attributes
        return (
            <div className={`${className} has-${columns}-columns`}>
                <InspectorControls>
                    <PanelBody>
                        <RangeControl
                            label={__('Columns', 'mytheme-blocks')}
                            value={columns}
                            onChange={(columns) => setAttributes({ columns })}
                            min={1}
                            max={6}
                        />
                    </PanelBody>
                </InspectorControls>
                <InnerBlocks
                    allowedBlocks={['mytheme-blocks/team-member']}
                    template={[
                        ['mytheme-blocks/team-member'],
                        ['mytheme-blocks/team-member'],
                    ]}
                />
            </div>
        )
    },

    save({ attributes }) {
        const { columns } = attributes;
        return (
            <div className={`has-${columns}-columns`}>
                <InnerBlocks.Content />
            </div>
        )
    }
})
