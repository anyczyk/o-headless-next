<?php
if ( ! function_exists( 'render_slider_dynamic_v1' ) ) {
    function render_slider_dynamic_v1( $attributes ) {
        $autoplay    = isset( $attributes['autoplay'] ) ? $attributes['autoplay'] : false;
        $selectedCPT = isset( $attributes['selectedCPT'] ) ? $attributes['selectedCPT'] : 'post';
        $postsLimit  = isset( $attributes['postsLimit'] ) ? intval( $attributes['postsLimit'] ) : -1;
        $ids         = isset( $attributes['ids'] ) ? $attributes['ids'] : '';
        $tagName    = isset( $attributes['tagName'] ) ? $attributes['tagName'] : 'h3';

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
            <div class="wp-block-semdesign-d-001-slider-dynamic-v1 swiper-dynamic swiper-container swiper-module" data-pagination-clickable="true" data-autoplay="<?php echo esc_attr( $autoplay ); ?>">
                <div class="swiper-wrapper">
                    <?php
                    while ( $query->have_posts() ) {
                        $query->the_post();
                        $image_url = get_the_post_thumbnail_url( get_the_ID(), 'full' );
                        $post_link = get_permalink( get_the_ID() );

                        // Get WooCommerce product if it exists
                        $product = function_exists( 'wc_get_product' ) ? wc_get_product( get_the_ID() ) : null;

                        if ( $product ) {
                            $price         = $product->get_price(); // Current price (sale price if exists)
                            $regular_price = $product->get_regular_price(); // Regular price
                            $sale_price    = $product->get_sale_price(); // Sale price
                        }
                        ?>
                        <div class="swiper-slide">
                            <?php if ( $image_url ) : ?>
                                <img class="wp-block-semdesign-d-001-slider-dynamic-v1__image" loading="lazy" src="<?php echo esc_url( $image_url ); ?>" alt="<?php the_title_attribute(); ?>" />
                            <?php endif; ?>
                            <div class="container">
                                <div>
                                    <<?= $tagName ?> class="h2"><?php the_title(); ?></<?= $tagName ?>>
                                    <p><?php echo get_the_excerpt(); ?></p>
                                    <?php
                                    if ( isset( $product ) && $product ) {
                                        echo '<hr /><p><small>';
                                        if ( $price ) {
                                            echo 'Cena: ';
                                            if ( $sale_price ) {
                                                echo '<del>' . wc_price( $regular_price ) . '</del> <strong>' . wc_price( $sale_price ) . '</strong>';
                                            } else {
                                                echo '<strong>' . wc_price( $price ) . '</strong>';
                                            }
                                        } else {
                                            echo 'Brak towaru';
                                        }
                                        echo '</small></p>';
                                    }
                                    ?>
                                    <a class="btn btn--blur-light" href="<?php echo esc_url( $post_link ); ?>">Zobacz więcej</a>
                                </div>
                            </div>
                        </div>
                        <?php
                    }
                    ?>
                </div>
                <button class="swiper-button-prev"></button>
                <button class="swiper-button-next"></button>
                <div class="swiper-pagination"></div>
            </div>
            <?php
            wp_reset_postdata();
        }
        return ob_get_clean();
    }
}

add_action( 'init', function () {
    $registry = WP_Block_Type_Registry::get_instance();
    if ( $registry->is_registered( 'semdesign/d-001-slider-dynamic-v1' ) ) {
        $registry->unregister( 'semdesign/d-001-slider-dynamic-v1' );
    }
    register_block_type( 'semdesign/d-001-slider-dynamic-v1', [
        'render_callback' => 'render_slider_dynamic_v1',
    ] );
} );
