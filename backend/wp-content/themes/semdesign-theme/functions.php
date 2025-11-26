<?php
function allow_svg_upload($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'allow_svg_upload');
function semdesign_enqueue_styles() {
    wp_enqueue_style('semdesign-style', get_stylesheet_uri());

    wp_enqueue_style(
        'fontello-css',
        get_template_directory_uri()  . '/src/assets/vendors/fonts/fontello/css/fontello.css',
        [],
        '1.0.0'
    );

    $theme_version = wp_get_theme()->get('Version');
    wp_enqueue_style(
        'semdesign-main-style',
        get_template_directory_uri() . '/build/assets/main.css',
        array(),
        $theme_version
    );

    wp_enqueue_style( 'swiper', get_template_directory_uri()  . '/src/assets/vendors/css/swiper-bundle.min.css', array(), '6.8.4' );
    wp_enqueue_script( 'swiper', get_template_directory_uri()  . '/src/assets/vendors/js/swiper-bundle.min.js', array(), '6.8.4', true );

    wp_enqueue_script(
        'semdesign-main-script',
        get_template_directory_uri() . '/build/assets/main.js',
        array(),
        $theme_version,
        true // Ładuj w stopce
    );
}
add_action('wp_enqueue_scripts', 'semdesign_enqueue_styles');

function semdesign_enqueue_editor_styles() {
    if (is_admin() && function_exists('get_current_screen')) {
        $screen = get_current_screen();
        if ($screen && $screen->is_block_editor) {
            wp_enqueue_style(
                'semdesign-editor-style',
                get_template_directory_uri() . '/build/assets/editor.css',
                ['wp-edit-blocks'], // Gutenbergowe style
                filemtime(get_template_directory() . '/build/assets/editor.css')
            );
        }
    }
}
add_action('admin_enqueue_scripts', 'semdesign_enqueue_editor_styles');

// Rejestrowanie bloków z użyciem metadanych z block.json
function semdesign_register_blocks() {
    foreach ( glob( get_template_directory() . '/build/blocks/*/block.json' ) as $block_json ) {
        register_block_type_from_metadata( dirname( $block_json ) );
    }
}
add_action( 'init', 'semdesign_register_blocks' );


function register_my_menus()
{
    register_nav_menus(array(
        'primary' => __('Primary Menu'),
        'shop' => __('Shop Menu'),
    ));
}

add_action('after_setup_theme', 'register_my_menus');

// swiper css for editor
function enqueue_swiper_styles_in_editor() {
    wp_enqueue_style(
        'swiper-editor-styles',
        get_template_directory_uri()  . '/src/assets/vendors/css/swiper-bundle.min.css',
        array(),
        '8.0.0'
    );
    wp_enqueue_style(
        'fontello-css',
        get_template_directory_uri()  . '/src/assets/vendors/fonts/fontello/css/fontello.css',
        [],
        '1.0.0'
    );
}
add_action('enqueue_block_editor_assets', 'enqueue_swiper_styles_in_editor');

function enqueue_editor_styles() {
    wp_enqueue_style(
        'editor-style',
        get_template_directory_uri()  . '/src/assets/vendors/css/editor-style.css',
        [],
        '1.0.0'
    );
}
add_action('admin_init', 'enqueue_editor_styles');

// render all existing render files for blocks
if ( ! is_admin() && !( defined( 'REST_REQUEST' ) && REST_REQUEST ) ) {
    $blocks_dir = get_template_directory() . '/src/blocks';

    foreach ( glob( $blocks_dir . '/*/render.php' ) as $file ) {
        require_once $file;
    }
}

// prices for gutenberg blocks
function add_wc_product_prices_to_rest( $response, $post, $request ) {
    if ( 'product' === $post->post_type ) {
        $product = wc_get_product( $post->ID );
        if ( $product ) {
            $response->data['product'] = 'product';
            $response->data['price'] = $product->get_price();
            $response->data['regular_price'] = $product->get_regular_price();
            $response->data['sale_price'] = $product->get_sale_price();
        }
    }

    return $response;
}
add_filter( 'rest_prepare_product', 'add_wc_product_prices_to_rest', 10, 3 );

function add_product_meta_to_rest_api() {
    register_rest_field( 'product', 'product_meta', [
        'get_callback' => function( $object ) {
            return [
                'price'         => get_post_meta( $object['id'], '_price', true ),
                'regular_price' => get_post_meta( $object['id'], '_regular_price', true ),
                'sale_price'    => get_post_meta( $object['id'], '_sale_price', true ),
                'stock_status'  => get_post_meta( $object['id'], '_stock_status', true ),
            ];
        },
        'schema' => null,
    ] );
}
add_action( 'rest_api_init', 'add_product_meta_to_rest_api' );

function add_featured_image_to_rest_api() {
    // Dodajemy pole 'better_featured_image' do wybranych typów wpisów
    register_rest_field( ['post', 'page', 'product'], 'better_featured_image', [
        'get_callback' => 'get_rest_featured_image',
        'update_callback' => null,
        'schema' => null,
    ]);
}

function get_rest_featured_image( $object, $field_name, $request ) {
    if ( isset( $object['featured_media'] ) && $object['featured_media'] ) {
        $img = wp_get_attachment_image_src( $object['featured_media'], 'full' );
        if ( $img ) {
            return $img[0];
        }
    }
    return false;
}

add_action( 'rest_api_init', 'add_featured_image_to_rest_api' );

add_theme_support( 'post-thumbnails' );

// Registery gutenberg category semDesign for blocks
function my_custom_block_categories( $categories, $post ) {
    $custom_category = [
        [
            'slug'  => 'semdesign',
            'title' => __( 'semDesign', 'semdesign' ),
            'icon'  => 'smiley',
        ],
    ];

    return array_merge( $custom_category, $categories );
}
add_filter( 'block_categories_all', 'my_custom_block_categories', 10, 2 );

// Registery gutenberg category semDesign for patterns
function my_custom_block_pattern_category() {
    register_block_pattern_category(
        'semdesign',
        array(
            'label' => __( 'semDesign', 'semdesign' )
        )
    );
}
add_action( 'init', 'my_custom_block_pattern_category' );



// Add extra buttons for core/button block
add_action( 'init', function() {
    register_block_style(
        'core/button',
        [
            'name'  => 'default',
            'label' => __( 'Default', 'semdesign' ),
        ]
    );
    register_block_style(
        'core/button',
        [
            'name'  => 'blur-light',
            'label' => __( 'Blur light', 'semdesign' ),
        ]
    );
    register_block_style(
        'core/button',
        [
            'name'  => 'blur-dark',
            'label' => __( 'Blur dark', 'semdesign' ),
        ]
    );
});

include_once('functions/disabled-comments.php');

include_once ('functions/cpt/projects.php');

include_once ('functions/custom-settings.php');

include_once ('functions/social-links-nav-fix.php');
