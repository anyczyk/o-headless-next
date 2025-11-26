<?php
function semdesign_theme_child_enqueue_styles() {
    wp_enqueue_style( 'semdesign-theme-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'semdesign-theme-child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array('semdesign-theme-style'),
        wp_get_theme()->get('Version')
    );
}
add_action( 'wp_enqueue_scripts', 'semdesign_theme_child_enqueue_styles' );