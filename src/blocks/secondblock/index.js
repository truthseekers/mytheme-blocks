import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import './styles.editor.scss';

//const { registerBlockType } = wp.blocks;
//const { __ } = wp.i18n;

registerBlockType('mytheme-blocks/secondblock', {
    title: __('Second Block', 'mytheme-blocks'),
    description: __('Our second block', 'mytheme-blocks'),
    category: 'layout',
    icon: {
        background: '#f03',
        foreground: '#fff',
        src: <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>,
    },
    keywords: [__('Photo', 'mytheme-blocks'), __('Image', 'mytheme-blocks')],
    edit: ({ className }) => {
        return <p className={className}>Editor</p>;
    },
    save: () => {
        return <p>Saved Content</p>;
    }
})