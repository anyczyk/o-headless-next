<!DOCTYPE html>
<?php
$blog_details = get_blog_details( get_current_blog_id() );
$blogname = $blog_details->blogname;
$bar_top = get_option( 'bar_top' );
$class_bar_top = $bar_top ? 'ho-bar-top-hidden' : '';
?>
<html <?php language_attributes(); ?> <?= !is_user_logged_in() ? 'class="ho-no-user-logged"' : '' ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= $blogname == 'semDesign [pl]' ? 'Projektowanie stron www i aplikacji mobilnych' : 'Designing websites and mobile applications' ?> <?php wp_title('|', true, 'left'); ?></title
    <?php wp_head(); ?>
</head>
<body <?php body_class($class_bar_top); ?>>
<header class="site-header ho-bar">
    <?php if(!$bar_top) { ?>
        <div class="ho-bar__top">
            <div class="container-fluid container-lg d-flex justify-content-end align-items-center">
                <ul class="d-flex list-unstyled gap-3">
                    <?php if (class_exists('WooCommerce')) { ?>
                        <li>
                            <?php
                            $my_account_url = wc_get_page_permalink('myaccount');
                            ?>
                            <a class="ho-link-login" href="<?= esc_url($my_account_url) ?>">
                                <?php
                                if (is_user_logged_in()) {
                                    $current_user = wp_get_current_user();
                                    echo 'Witaj, <strong title="' . esc_html($current_user->user_login) . '">' . esc_html($current_user->user_login) . '</strong>!';
                                } else {
                                    echo 'Zaloguj się';
                                }
                                ?>
                            </a>
                        </li>
                        <li class="ho-link-cart">
                            <?php
                            if (class_exists('WooCommerce')) {
                                $cart_url = wc_get_page_permalink('cart');
                                $cart_count = WC()->cart->get_cart_contents_count();
                                echo '<a href="' . esc_url($cart_url) . '">Koszyk
<!--(<span class="cart-count">' . esc_html($cart_count) . '</span>)-->
                            </a>';
                            }
                            ?>
                        </li>
                        <li>
                            <?php
                            if (function_exists('render_block')) {
                                $block = [
                                    'blockName' => 'woocommerce/mini-cart',
                                    'attrs' => [
                                        'columns' => 1,
                                    ],
                                    'innerBlocks' => [],
                                    'innerHTML' => '',
                                    'innerContent' => [],
                                ];

                                // Renderuj blok w header.php
                                echo render_block($block);
                            }
                            ?>
                        </li>
                    <?php } ?>

                    <?php if ( function_exists( 'is_multisite' ) && is_multisite() ) { ?>
                        <?php
                        $current_blog = get_blog_details();
                        $current_path = untrailingslashit( $current_blog->path );

                        $sites = [
                            'en' => '/',
                            'pl' => '/pl'
                        ];
                        ?>
                        <li class="ho-link-lang <?= ($current_path === '' || $current_path === $sites['en']) ? 'ho-link-lang--active' : ''; ?>">
                            <a href="/">EN</a>
                        </li>
                        <li class="ho-link-lang <?= ($current_path === $sites['pl']) ? 'ho-link-lang--active' : ''; ?>">
                            <a href="/pl">PL</a>
                        </li>
                    <?php } ?>
                </ul>

                <?php
                //            wp_nav_menu(array(
                //                'theme_location' => 'shop',
                //                'menu_id'        => 'shop-menu',
                //                'container'      => false,
                //                'menu_class'     => 'd-flex list-unstyled gap-3',
                //                'fallback_cb'    => false,
                //                'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                //            ));
                ?>
            </div>
        </div>
    <?php } ?>

    <div class="ho-bar__bottom d-flex">
        <div class="container-fluid container-lg d-flex justify-content-between align-items-center">
            <div class="ho-logo">
                <a href="<?php echo esc_url(home_url('/')); ?>">
                    <?php
                    if (has_custom_logo()) {
                        the_custom_logo();
                    } else {
                        $logo_url = get_option('mytheme_logo');
                        $ico = $logo_url ? '<img width="28" height="28" src="' . esc_url( $logo_url ) . '" alt="semDesign Logo" />' : '';
                        echo '<div class="ho-bar__logo gap-2 d-flex align-items-center">'. $ico . '<span class="ho-hidden-first-letter">' . esc_html(get_option( 'my_main_title_field' )) .'</span></div>';
                    }
                    ?>
                </a>
            </div>
            <button aria-label="Show/Hide Menu" class="ho-bar__hamburger"><span>Menu</span></button>
            <div class="ho-bar__main-navigation ho-bar__main-navigation--<?= get_option('mobile_menu_slide_direction') ?>">
                <nav>
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'menu_id'        => 'primary-menu',
                        'container'      => false,
                        'menu_class'     => 'd-xl-flex list-unstyled gap-3 ho-bar__main-navigation-list',
                        'fallback_cb'    => false,
                        'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                    ));
                    ?>
                </nav>
            </div>
        </div>
    </div>
</header>
