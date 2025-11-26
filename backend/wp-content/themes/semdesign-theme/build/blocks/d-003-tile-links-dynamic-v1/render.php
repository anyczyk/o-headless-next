<?php
if ( ! function_exists( 'render_d_003_tile_links_dynamic_v1' ) ) {
    function render_d_003_tile_links_dynamic_v1( $attributes ) {
        $selectedCPT = isset( $attributes['selectedCPT'] ) ? $attributes['selectedCPT'] : 'post';
        $postsLimit  = isset( $attributes['postsLimit'] ) ? intval( $attributes['postsLimit'] ) : -1;
        $ids         = isset( $attributes['ids'] ) ? $attributes['ids'] : '';
        $tagName    = isset( $attributes['tagName'] ) ? $attributes['tagName'] : 'h3';
        $bgColor = isset($attributes['bgColor']) ? $attributes['bgColor'] : 'inherit';
        $textColor = isset($attributes['textColor']) ? $attributes['textColor'] : 'inherit';
        $animateTiles = isset( $attributes['animateTiles'] );


        // Ensure postsLimit is a positive number or -1
        if ( $postsLimit <= 0 ) {
            $postsLimit = -1; // Fetch all posts
        }

        // Process IDs if provided
        $ids_array = array();
        if ( ! empty( $ids ) ) {
            $ids_array = array_map( 'intval', explode( ',', $ids ) );
            // Remove any zero or negative IDs
            $ids_array = array_filter( $ids_array, function( $id ) { return $id > 0; } );
        }

        $args = array(
            'post_type'      => $selectedCPT,
            'posts_per_page' => $postsLimit,
        );

        if ( ! empty( $ids_array ) ) {
            $args['post__in'] = $ids_array;
            $args['orderby']  = 'post__in';
            $args['posts_per_page'] = count( $ids_array );
        }

        $query = new WP_Query( $args );

        ob_start();
        if ( $query->have_posts() ) {
            ?>
            <div class="ho-module-d-003-tile-links-dynamic-v1 pt-5 pb-5" style="<?= $bgColor ? 'background-color: ' . $bgColor .';' : '' ?> <?= $textColor ? 'color: ' . $textColor . ';' : '' ?>">
                <div class="container">
                    <ul class="list-unstyled ho-module-m-005-tiles-with-slider-modals-v1__list">
                        <?php
                        $i=0;
                        while ( $query->have_posts() ) {
                        $query->the_post();
                        $image_url = get_the_post_thumbnail_url( get_the_ID(), 'full' );
                        $post_link = get_permalink( get_the_ID() );
                        $i++;
                        ?>
                            <li <?= $animateTiles ? ($i%2) ? 'data-aos="fade-right"' : 'data-aos="fade-left"' : '' ?>>
                                <a href="<?= $post_link ?>">
                                    <div class="ho-module-d-003-tile-links-dynamic-v1__tile-image-and-title pt-3 pb-3 ps-3 pe-3">
                                        <?php if ( $image_url ) : ?>
                                            <img class="wp-block-semdesign-d-001-slider-dynamic-v1__image" loading="lazy" src="<?php echo esc_url( $image_url ); ?>" alt="<?php the_title_attribute(); ?>" />
                                        <?php endif; ?>
                                        <<?= $tagName ?> class="h4 ho-module-d-003-tile-links-dynamic-v1__tile-image-and-title-t pt-3 pb-3 ps-3 pe-3"><?php the_title(); ?></<?= $tagName ?>>
                                    </div>
                                </a>
                            </li>
                        <?php
                        }
                        ?>
                    </ul>
                </div>
            </div>
            <?php
            wp_reset_postdata();
        }
        return ob_get_clean();
    }
}

add_action( 'init', function () {
    $registry = WP_Block_Type_Registry::get_instance();
    if ( $registry->is_registered( 'semdesign/d-003-tile-links-dynamic-v1' ) ) {
        $registry->unregister( 'semdesign/d-003-tile-links-dynamic-v1' );
    }
    register_block_type( 'semdesign/d-003-tile-links-dynamic-v1', [
        'render_callback' => 'render_d_003_tile_links_dynamic_v1',
    ] );
} );
