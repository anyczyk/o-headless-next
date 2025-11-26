<?php get_header(); ?>

    <main>

        <?php
        if ( post_password_required() ) {
                ?>

                    <div class="container container--960 pt-5 pb-5 d-flex justify-content-center align-items-center text-center">
                        <?= get_the_password_form(); ?>
                    </div>

                <?php

        } else {
            if (have_posts()) :
                while (have_posts()) : the_post();
                    the_content();
                endwhile;
            endif;
        }
        ?>
    </main>

<?php get_footer(); ?>