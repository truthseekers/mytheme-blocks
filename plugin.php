<?php
/**
 * Plugin Name: mytheme-blocks 222
 * Plugin URI: https://alialaa.com/
 * Description: blocks for mytheme.
 * Author: alialaa
 * Author URI: https://alialaa.com/
 */

if( ! defined( 'ABSPATH') ) {
    exit;
}



function mytheme_blocks_register() {

    wp_register_script(
        'mytheme-blocks-firstblock-editor-script',
        plugins_url('blocks/firstblock/index.js', __FILE__),
        array('wp-blocks', 'wp-i18n', 'wp-element')
    );

    register_block_type(
        'mytheme-blocks/firstblock',
        array(
            'editor_script' => 'mytheme-blocks-firstblock-editor-script',
            // 'script',
            // 'style',
            // 'editor_style'
        )
    );
}

add_action('init', 'mytheme_blocks_register');


?>