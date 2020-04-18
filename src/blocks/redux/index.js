import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from './edit';

registerBlockType('mytheme-blocks/redux', {
    title: __('Redux Test', 'mytheme-blocks'),

    description: __('redux test block.', 'mytheme-blocks'),

    category: 'mytheme-category',

    edit: edit,

    save() {
        return null
    }
})
