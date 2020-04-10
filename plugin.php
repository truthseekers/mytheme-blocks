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

function mytheme_blocks_register_block_type($block, $options = array()) {
    register_block_type(
        'mytheme-blocks/' . $block,
        array_merge(
            array(
                'editor_script' => 'mytheme-blocks-editor-script',
            ),
            $options
        )
    );
}

function mytheme_blocks_register() {

    wp_register_script(
        'mytheme-blocks-editor-script',
        plugins_url('dist/editor.js', __FILE__),
        array('wp-blocks', 'wp-i18n', 'wp-element')
    );

    mytheme_blocks_register_block_type('firstblock');
    mytheme_blocks_register_block_type('secondblock', array());



}

add_action('init', 'mytheme_blocks_register');


?>