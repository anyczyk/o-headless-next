<?php
$blog_details = get_blog_details( get_current_blog_id() );
$blogname = $blog_details->blogname;
?>
<footer class="ho-footer text-center text-lg-start">
    <div class="container">
        <div class="row">
            <div class="col-sm-6 col-lg-3 mb-5">
                <h2 class="ho-footer__title ho-first-amber-letter h4 mb-3"><?= $blogname == 'semDesign [pl]' ? 'Kontakt' : 'Contact' ?></h2>
                <nav>
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'menu'        => 'Contact',
                        'container'      => false,
                        'menu_class'     => 'list-unstyled',
                        'fallback_cb'    => false,
                        'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                    ));
                    ?>
                </nav>
            </div>
            <div class="col-sm-6 col-lg-3 mb-5">
                <h2 class="ho-footer__title ho-first-amber-letter h4 mb-3"><?= $blogname == 'semDesign [pl]' ? 'Menu główne' : 'Main menu' ?></h2>
                <nav>
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'menu_id'        => 'primary-menu',
                        'container'      => false,
                        'menu_class'     => 'list-unstyled',
                        'fallback_cb'    => false,
                        'items_wrap'     => '<ul id="%1$s" class="%2$s ho-footer-main-menu">%3$s</ul>',
                    ));
                    ?>
                </nav>
            </div>
            <div class="col-sm-6 col-lg-3 mb-5">
                <h2 class="ho-footer__title ho-first-amber-letter h4 mb-3"><?= $blogname == 'semDesign [pl]' ? 'Social linki' : 'Social links' ?></h2>
                <nav>
                    <?php
                    wp_nav_menu( array(
                        'theme_location' => 'primary',
                        'menu'           => 'Social links',
                        'container'      => false,
                        'menu_class'     => 'list-unstyled d-flex gap-2 justify-content-center justify-content-lg-start',
                        'fallback_cb'    => false,
                        'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                    ) );
                    ?>
                </nav>
            </div>
            <div class="col-sm-6 col-lg-3 mb-5">
                <h2 class="ho-footer__title ho-first-amber-letter h4 mb-3"><?= $blogname == 'semDesign [pl]' ? 'Strona' : 'Website' ?></h2>
                <nav>
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'menu'        => 'Website',
                        'container'      => false,
                        'menu_class'     => 'list-unstyled',
                        'fallback_cb'    => false,
                        'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                    ));
                    ?>
                </nav>
            </div>
            <hr class="mt-3" />
            <div class="col">
                <p class="mb-0">&copy; <?php echo date('Y'); ?> <?= esc_html(get_option( 'my_main_title_field' )) ?>. <?= $blogname == 'semDesign [pl]' ? 'Wszelkie prawa zastrzeżone' : 'All rights reserved' ?>.</p>
            </div>
        </div>
    </div>
</footer>
<div class="ho-cookies ho-cookies--hidden ho-bg-primary">
    <div class="container text-center p-5">
        <p><?= $blogname == 'semDesign [pl]' ? 'Ta strona używa plików cookie, aby zapewnić prawidłowe działanie, analizę i personalizację treści. Możesz zaakceptować lub odrzucić wszystkie.' : 'This site uses cookies to ensure proper operation, analysis and personalization of content. You can accept all or reject all.' ?> </p>
        <p>
            <button class="btn btn--green ho-btn-cookies-accept"><?= $blogname == 'semDesign [pl]' ? 'Akceptuj wszystko' : 'Accept all' ?></button> or
            <button class="btn btn--red ho-btn-cookies-reject"><?= $blogname == 'semDesign [pl]' ? 'Odrzuć wszystko' : 'Reject all' ?></button>
        </p>
    </div>
</div>
<button aria-label="Back to top" class="btn ho-back-to-top"><i class="icon-up-open"></i></button>
<?php wp_footer(); ?>
</body>
</html>
