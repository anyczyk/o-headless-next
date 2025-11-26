<?php
if ( ! function_exists( 'render_dynamic_portfolio' ) ) {
    function render_dynamic_portfolio( $attributes ) {
        ob_start();
        ?>
            <div class="wp-block-semdesign-portfolio portfolio-container">
                <p>Test 123</p>
            </div>
        <?php
        wp_reset_postdata();
        return ob_get_clean();
    }
}

add_action( 'init', function () {
    $registry = WP_Block_Type_Registry::get_instance();
    if ( $registry->is_registered( 'semdesign/portfolio' ) ) {
        $registry->unregister( 'semdesign/portfolio' );
    }
    register_block_type( 'semdesign/portfolio', [
        'render_callback' => 'render_dynamic_portfolio',
    ] );
} );
