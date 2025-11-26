<?php
if ( ! function_exists( 'semdesign_m_006_slider_v2_render_callback' ) ) {
    function semdesign_m_006_slider_v2_render_callback( $attributes ) {
        // Wyciągamy atrybuty. Dla bezpieczeństwa -> sprawdzamy, czy istnieją.
        $slides     = isset($attributes['slides']) ? $attributes['slides'] : [];
        $size       = isset($attributes['size']) ? $attributes['size'] : 'large';
        $topOverlap = ! empty($attributes['topOverlap']);
        $autoplay   = ! empty($attributes['autoplay']);
        $delay = $attributes['delay'] ?? "5000";
        $loop   = ! empty($attributes['loop']);
        $autoHeight = ! empty($attributes['autoHeight']);
        $effectFade = $attributes['effectFade'];
        $dots       = $attributes['dots'];
        $arrows     = ! empty($attributes['arrows']);
        $firstTagH1 = ! empty($attributes['firstTagH1']);
        $tagName    = ! empty($attributes['tagName']) ? $attributes['tagName'] : 'h3';
        $customAttributes = $attributes['customAttributes'];

        // Klasy głównego wrappera
        $wrapper_classes = [
                'swiper-module',
            'ho-module-m-006-slider-v2',
            'ho-module-m-006-slider-v2--' . $size,
        ];
        if ( $topOverlap ) {
            $wrapper_classes[] = 'ho-module-m-006-slider-v2--top-overlap';
        }
        if( $autoHeight) {
            $wrapper_classes[] = 'ho-module-m-006-slider-v2--auto-height';
        }
        if ( count($slides) > 1 ) {
            $wrapper_classes[] = 'ho-module-m-006-slider-v2--swiper-active';
        }
        if ( ! empty( $attributes['className'] ) ) {
            $wrapper_classes[] = $attributes['className'];
        }

        $wrapper_class_str = implode( ' ', $wrapper_classes );

        // Budujemy output
        ob_start();
        ?>

        <div <?= $customAttributes ?> class="<?php echo esc_attr($wrapper_class_str); ?>">
<!--            <div class="container-fluid">-->
                <div
                    class="swiper-main swiper-container"
                    data-pagination-clickable="true"
                    data-autoplay="<?php echo $autoplay ? 'true' : 'false'; ?>"
                    data-loop="<?php echo $loop ? 'true' : 'false'; ?>"
                    data-delay="<?= $delay ?>"
                    data-auto-height="<?php echo $autoHeight ? 'true' : 'false'; ?>"
                    data-effect-fade="<?php echo $effectFade ? 'fade' : 'slide' ?>"
                    data-dots="<?php echo $dots ? 'true' : 'false'; ?>"
                    data-arrows="<?php echo $arrows ? 'true' : 'false'; ?>"
                >
                    <div class="swiper-wrapper">
                        <?php if ( ! empty($slides) ) : ?>
                            <?php foreach ( $slides as $index => $slide ) :
                                $bgColor     = isset($slide['bgColor']) ? $slide['bgColor'] : '';
                                $textColor   = isset($slide['textColor']) ? $slide['textColor'] : '';
                                $classes     = isset($slide['customClasses']) ? $slide['customClasses'] : '';
                                $title       = isset($slide['title']) ? $slide['title'] : '';
                                $subTitle     = isset($slide['subTitle']) ? $slide['subTitle'] : '';
                                $description = isset($slide['description']) ? $slide['description'] : '';
                                $caption     = isset($slide['caption']) ? $slide['caption'] : '';
                                $buttonUrl   = isset($slide['buttonUrl']) ? $slide['buttonUrl'] : '';
                                $buttonLabel = isset($slide['buttonLabel']) ? $slide['buttonLabel'] : '';
                                $openInNewTab= ! empty($slide['openInNewTab']);
                                $imageId     = ! empty($slide['imageId']) ? (int) $slide['imageId'] : 0;

                                $overLayGradient = ! empty($slide['overLayGradient']);
                                $overLayFull     = ! empty($slide['overLayFull']);
                                $horizontal      = isset($slide['horizontalAlignment']) ? $slide['horizontalAlignment'] : 'start';
                                $vertical        = isset($slide['verticalAlignment']) ? $slide['verticalAlignment'] : 'center';
                                $imagePosition   = isset($slide['imagePosition']) ? $slide['imagePosition'] : 'center';

                                // Generujemy klasy slajdu:
                                $slide_class = [
                                    'swiper-slide',
                                    'justify-content-center',
                                    'd-flex ',
                                    "id-{$index}",
                                    "ho-module-m-006-slider-v2__horizontal-alignment-{$horizontal}",
                                    "ho-module-m-006-slider-v2__vertical-alignment-{$vertical}",
                                    $classes,
                                ];
                                $slide_class_str = implode( ' ', array_filter($slide_class) );

                                // Style inline do slajdu (kolory)
                                $slide_style = '';
                                if ( $bgColor || $textColor ) {
                                    $slide_style = 'style="';
                                    if ( $bgColor ) {
                                        $slide_style .= 'background-color:' . esc_attr($bgColor) . ';';
                                    }
                                    if ( $textColor ) {
                                        $slide_style .= 'color:' . esc_attr($textColor) . ';';
                                    }
                                    $slide_style .= '"';
                                }

                                // Przygotowanie obrazka:
                                $img_html = '';
                                if ( $imageId > 0 ) {
                                    // Pobieramy dane dla rozmiaru medium_large (baza) – WP wygeneruje srcset na podstawie dostępnych rozmiarów
                                    $src   = wp_get_attachment_image_src( $imageId, 'full' );
                                    $srcset = wp_get_attachment_image_srcset( $imageId, 'full' );
                                    $sizes  = wp_get_attachment_image_sizes( $imageId, 'full' );

                                    if ( $src ) {
                                        // Pobieramy alt – najpierw z _wp_attachment_image_alt, potem tytuł obrazu
                                        $alt = get_post_meta( $imageId, '_wp_attachment_image_alt', true );
                                        if ( ! $alt ) {
                                            $alt = get_the_title( $imageId );
                                        }

                                        // Klasa CSS obrazka, zależna od położenia (zmienna $imagePosition)
                                        $img_class = "ho-module-m-006-slider-v2__image ms-auto me-auto object-position-{$imagePosition}";

                                        // Generujemy tag <img> z automatycznie wygenerowanymi atrybutami src, srcset i sizes
                                        $img_html  = '<img class="' . esc_attr( $img_class ) . '" loading="lazy" ';
                                        $img_html .= 'src="' . esc_url( $src[0] ) . '" ';
    //                                    $img_html .= 'srcset="' . esc_attr( $srcset ) . '" ';
                                        $img_html .= 'sizes="' . esc_attr( $sizes ) . '" ';
                                        $img_html .= 'alt="' . esc_attr( $alt ) . '">';
                                    }
                                }
                                ?>
                                    <div class="<?php echo esc_attr($slide_class_str); ?>" data-hash="slide-<?= $index+1 ?>" <?php echo $slide_style; ?>>
                                        <div class="d-flex w-100 p-lg-5 justify-content-center <?= !$autoHeight ? 'mt-auto mb-auto' : '' ?>">
                                            <?php
                                                if ( $img_html ) {
                                            ?>
                                                    <div class="ho-module-m-006-slider-v2__wrap-image d-flex justify-content-center <?= !$autoHeight ? 'align-items-center' : '' ?>">
                                                        <?= $img_html ?>
                                                    </div>
                                            <?php
                                                }
                                            ?>

                                            <?php if(($buttonUrl && $buttonLabel) || $caption || $description || $title) { ?>
                                                <div class="ho-module-m-006-slider-v2__wrap-text pt-3 pb-3 pt-lg-0 pb-lg-0  d-flex text-<?php echo esc_attr($horizontal); ?> justify-content-<?php echo esc_attr($horizontal); ?>">
                                                    <div class="ps-3 pe-3 ps-lg-5 pe-lg-5 pt-3 pb-3 pt-lg-0 pb-lg-0 overflow-auto d-flex w-100">
                                                        <div class="d-flex flex-column w-100 <?php
                                                            if ( $vertical === 'start' || $vertical === 'end' ) {
                                                                if($vertical === 'start') {
                                                                    echo 'mt-0 mb-auto';
                                                                } else {
                                                                    echo 'mb-0 mt-auto';
                                                                }
                                                            } else {
                                                                echo 'mt-auto mb-auto';
                                                            }
                                                        ?>">
                                                            <?php
                                                            if ( $firstTagH1 && $index === 0 && $title ) {
                                                                echo '<h1 class="ho-module-m-006-slider-v2__title">' . $title . '</h1>';
                                                            } elseif ( $title ) {
                                                                echo '<' . $tagName . ' class="ho-module-m-006-slider-v2__title">' . $title . '</' . $tagName . '>';
                                                            }

                                                            if ( $subTitle ) {
                                                                echo '<p class="ho-module-m-006-slider-v2__sub-title">' . $subTitle . '</p>';
                                                            }

                                                            if ( $description ) {
                                                                echo '<p class="ho-module-m-006-slider-v2__description">' . $description . '</p>';
                                                            }
                                                            if ( $caption ) {
                                                                echo '<p class="ho-module-m-006-slider-v2__caption"><i>' . esc_html($caption) . '</i></p>';
                                                            }

                                                            // Przycisk
                                                            if ( $buttonUrl && $buttonLabel ) {
                                                                $target = $openInNewTab ? '_blank' : '_self';
                                                                $rel    = $openInNewTab ? 'noopener noreferrer' : '';

                                                                echo '<a class="btn btn--blur-light" href="' . esc_url($buttonUrl) . '" target="' . esc_attr($target) . '" rel="' . esc_attr($rel) . '">';
                                                                echo esc_html($buttonLabel);
                                                                echo '</a>';
                                                            }
                                                            ?>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button aria-label="Info - show description" class="ho-module-m-006-slider-v2__toggle-text"><i class="icon-info-circled"></i></button>
                                            <?php } ?>
                                        </div>
                                    </div>
                            <?php endforeach; ?>
                        <?php endif; ?>
                    </div>

                    <?php if ( $arrows ) : ?>
                        <button class="swiper-button-prev"></button>
                        <button class="swiper-button-next"></button>
                    <?php endif; ?>
                    <?php if ( $dots ) : ?>
                        <div class="swiper-pagination"></div>
                    <?php endif; ?>
                </div>
<!--            </div>-->
        </div>
        <?php

        // Zwracamy zawartość
        return ob_get_clean();
    }
}
add_action( 'init', function () {
    $registry = WP_Block_Type_Registry::get_instance();
    if ( $registry->is_registered( 'semdesign/m-006-slider-v2' ) ) {
        $registry->unregister( 'semdesign/m-006-slider-v2' );
    }
    register_block_type( __DIR__ . '/block.json', [
        'render_callback' => 'semdesign_m_006_slider_v2_render_callback',
    ] );
} );
