<?php

// Add Logo to general settings
function mytheme_register_logo_setting() {
    register_setting('general', 'mytheme_logo', [
        'type'              => 'string',
        'sanitize_callback' => 'esc_url',
        'default'           => ''
    ]);

    add_settings_field(
        'mytheme_logo',
        __('Page logo:', 'mytheme'),
        'mytheme_logo_field_html',
        'general'
    );
}
add_action('admin_init', 'mytheme_register_logo_setting');

function mytheme_logo_field_html() {
    $logo = get_option('mytheme_logo');
    ?>
    <input type="text" id="mytheme_logo" name="mytheme_logo" value="<?php echo esc_attr($logo); ?>" />
    <button type="button" class="button" id="upload_logo_button"><?php _e('Choose an image', 'semdesign'); ?></button>
    <?php if ($logo) : ?>
        <hr />
        <p><img src="<?php echo esc_url($logo); ?>" alt="Logo" style="max-width:200px;"></p>
    <?php endif; ?>
    <?php
}

function mytheme_enqueue_media_uploader($hook) {
    if ('options-general.php' !== $hook) {
        return;
    }

    wp_enqueue_media();

    wp_register_script('mytheme-media-uploader', '');
    wp_enqueue_script('mytheme-media-uploader');

    wp_add_inline_script('mytheme-media-uploader', "
        document.addEventListener('DOMContentLoaded', function() {
            const uploadButton = document.getElementById('upload_logo_button');
            const logoInput = document.getElementById('mytheme_logo');

            if (uploadButton) {
                uploadButton.addEventListener('click', function(event) {
                    event.preventDefault();

                    const frame = wp.media({
                        title: '" . esc_js(__('Wybierz obrazek', 'mytheme')) . "',
                        button: { text: '" . esc_js(__('Użyj tego obrazka', 'mytheme')) . "' },
                        multiple: false
                    });

                    frame.on('select', function() {
                        const attachment = frame.state().get('selection').first().toJSON();
                        logoInput.value = attachment.url;
                    });

                    frame.open();
                });
            }
        });
    ");
}
add_action('admin_enqueue_scripts', 'mytheme_enqueue_media_uploader');


// Add field 'main_header_title' in Settings > General
function add_main_header_title_field_to_general_settings() {
    register_setting(
        'general',
        'my_main_title_field',
        [
            'type'              => 'string',
            'sanitize_callback' => 'sanitize_text_field',
            'default'           => '',
        ]
    );

    // 2. Dodanie pola do sekcji 'General'
    add_settings_field(
        'my_main_title_field',
        __( 'Main title:', 'semdesign' ),
        'my_main_title_field_callback',
        'general'
    );
}
add_action( 'admin_init', 'add_main_header_title_field_to_general_settings' );
function my_main_title_field_callback() {
    $value = get_option( 'my_main_title_field', '' );
    ?>
    <input type="text"
           id="my_main_title_field"
           name="my_main_title_field"
           value="<?php echo esc_attr( $value ); ?>"
           class="regular-text" />
    <?php
}

// Bar Top visible or not
function add_bar_top_field_to_general_settings() {
    register_setting(
        'general',
        'bar_top',
        [
            'type'              => 'boolean',
            'sanitize_callback' => 'rest_sanitize_boolean', // lub własna funkcja sanitizująca
            'default'           => false,
        ]
    );

    // Dodanie pola do sekcji 'General'
    add_settings_field(
        'bar_top',
        __( 'Bar top (hide):', 'semdesign' ),
        'bar_top_field_callback',
        'general'
    );
}
add_action( 'admin_init', 'add_bar_top_field_to_general_settings' );

function bar_top_field_callback() {
    $value = get_option( 'bar_top', false );
    ?>
    <input type="checkbox"
           id="bar_top"
           name="bar_top"
           value="1" <?php checked( 1, $value, true ); ?> />
    <?php
}

// Mobile Menu Slide select field in General Settings
function add_mobile_menu_slide_direction_field_to_general_settings() {
    register_setting(
        'general',
        'mobile_menu_slide_direction',
        [
            'type'              => 'string',
            'sanitize_callback' => 'sanitize_text_field',
            'default'           => 'mobile-menu-slide-right', // spójna wartość domyślna
        ]
    );

    // Dodanie pola do sekcji 'General'
    add_settings_field(
        'mobile_menu_slide_direction',
        __( 'Mobile menu slide direction:', 'semdesign' ),
        'mobile_menu_slide_direction_field_callback',
        'general'
    );
}
add_action( 'admin_init', 'add_mobile_menu_slide_direction_field_to_general_settings' );

function mobile_menu_slide_direction_field_callback() {
    $value = get_option( 'mobile_menu_slide_direction', 'mobile-menu-slide-right' );
    ?>
    <select id="mobile_menu_slide_direction" name="mobile_menu_slide_direction">
        <option value="mobile-menu-slide-right" <?php selected( $value, 'mobile-menu-slide-right' ); ?>>Right</option>
        <option value="mobile-menu-slide-left" <?php selected( $value, 'mobile-menu-slide-left' ); ?>>Left</option>
        <option value="mobile-menu-slide-top" <?php selected( $value, 'mobile-menu-slide-top' ); ?>>Top</option>
    </select>
    <?php
}
