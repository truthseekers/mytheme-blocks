<?php

/**
 * Plugin Name: mytheme-blocks 222
 * Plugin URI: https://alialaa.com/
 * Description: blocks for mytheme.
 * Author: alialaa
 * Author URI: https://alialaa.com/
 */

if (!defined('ABSPATH')) {
    exit;
}

function mytheme_blocks_categories($categories, $post)
{
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'mytheme-category',
                'title' => __('My Theme Category', 'mytheme-blocks'),
                'icon' => 'wordpress'
            )
        )
    );
}
add_filter('block_categories', 'mytheme_blocks_categories', 10, 2);

function mytheme_blocks_register_block_type($block, $options = array())
{
    register_block_type(
        'mytheme-blocks/' . $block,
        array_merge(
            array(
                'editor_script' => 'mytheme-blocks-editor-script',
                'editor_style' => 'mytheme-blocks-editor-style',
                'script' => 'mytheme-blocks-script',
                'style' => 'mytheme-blocks-style',
            ),
            $options
        )
    );
}

function mytheme_blocks_register()
{

    wp_register_script(
        'mytheme-blocks-editor-script',
        plugins_url('dist/editor.js', __FILE__),
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components', 'lodash', 'wp-blob', 'wp-data', 'wp-html-entities', 'wp-compose')
    );

    wp_register_script(
        'mytheme-blocks-script',
        plugins_url('dist/script.js', __FILE__),
        array('jquery')
    );

    wp_register_style(
        'mytheme-blocks-editor-style',
        plugins_url('dist/editor.css', __FILE__),
        array('wp-edit-blocks')
    );

    wp_register_style(
        'mytheme-blocks-style',
        plugins_url('dist/style.css', __FILE__)
    );

    mytheme_blocks_register_block_type('firstblock');
    mytheme_blocks_register_block_type('secondblock', array());
    mytheme_blocks_register_block_type('team-member');
    mytheme_blocks_register_block_type('team-members');
    mytheme_blocks_register_block_type('latest-posts', array(
        'render_callback' => 'mytheme_blocks_render_latest_posts_block',
        'attributes' => array(
            'numberOfPosts' => array(
                'type' => 'number',
                'default' => 5
            ),
            'postCategories' => array(
                'type' => 'string'
            )
        )
    ));
    mytheme_blocks_register_block_type('redux');
}

add_action('init', 'mytheme_blocks_register');

// Dynamic blocks have attributes defined in php

function mytheme_blocks_render_latest_posts_block($attributes)
{
    $args = array(
        'posts_per_page' => $attributes['numberOfPosts']
    );
    if ($attributes['postCategories']) {
        $args['cat'] = $attributes['postCategories'];
    }
    $query = new WP_Query($args);
    $posts = '';

    if ($query->have_posts()) {
        $posts .= '<ul class="wp-block-mytheme-blocks-latest-posts">';
        while ($query->have_posts()) {
            $query->the_post();
            $posts .= '<li><a href="' . esc_url(get_the_permalink()) . '">' . get_the_title() . '</a></li>';
        }
        $posts .= '</ul>';
        wp_reset_postdata();
        return $posts;
    } else {
        return '<div>' . __("No Posts Found", "mytheme-blocks") . '</div>';
    }
}
