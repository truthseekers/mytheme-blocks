import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { InnerBlocks } from "@wordpress/editor";

registerBlockType('mytheme-block/team-members', {
    title: __( 'Team Members', 'mytheme-blocks'),

    description: __( 'Block showing a Team Members.', 'mytheme-blocks' ),

    icon: 'grid-view',

    category: 'mytheme-category',

    keywords: [ __('item', 'mytheme-blocks' ), __( 'member', 'mytheme-blocks' ),
    __( 'person', 'mytheme-blocks' ) ],

    edit( { className }) {
        console.log("some inner block in here");
        console.log(className);
        return (
            <div className={ className}>
                <InnerBlocks
                    allowedBlocks={ ['mytheme-blocks/team-member'] }
                    template={[
                        ['mytheme-blocks/team-member'],
                        ['mytheme-blocks/team-member'],
                    ]}
                />
            </div>
        )
    },

    save() {
        return (
            <div>
                <InnerBlocks.Content />
            </div>
        )
    }
})