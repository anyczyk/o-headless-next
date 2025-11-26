<?php
/*
Plugin Name: semSEO
Description: A simple plugin to manage basic Open Graph, X (Twitter) meta tags, meta keywords with global and per-post settings, and robots indexing control. Now also supports a meta description field.
Version: 1.0.08
Author: semDesign
Author URI: https://semdesign.net
License: GPL2
*/

if (!defined('ABSPATH')) {
    exit;
}

// Activation
function semseo_activate() {
    // If the option already exists, don't overwrite it completely
    $existing = get_option('semseo_settings');
    if (!is_array($existing)) {
        $existing = [];
    }
    // Merge defaults into existing array
    $defaults = [
        'og_description'   => '',
        'og_url'           => '',
        'og_image'         => '',
        'og_type'          => 'website',
        'twitter_card'     => 'summary_large_image',
        'twitter_desc'     => '',
        'cpts'             => 'post,page',
        'global_indexing'  => '1', // 1 = Enable, 0 = Disable
        'meta_keywords'    => '',
        // NOWE: Domyślny meta description
        'meta_description' => ''
    ];
    $merged = array_merge($defaults, $existing);
    update_option('semseo_settings', $merged);
}
register_activation_hook(__FILE__, 'semseo_activate');

// Deactivation
function semseo_deactivate() {
    delete_option('semseo_settings');
}
register_deactivation_hook(__FILE__, 'semseo_deactivate');

// Admin Menu
add_action('admin_menu', 'semseo_add_admin_menu');
function semseo_add_admin_menu() {
    add_menu_page(
        'semSEO Settings',
        'semSEO',
        'manage_options',
        'semseo-settings',
        'semseo_render_settings_page',
        'dashicons-admin-generic',
        80
    );
}

// Enqueue media scripts/styles on plugin settings page so the "Upload/Select Image" button works
add_action('admin_enqueue_scripts', 'semseo_admin_enqueue_scripts');
function semseo_admin_enqueue_scripts($hook) {
    if ('toplevel_page_semseo-settings' !== $hook) {
        return;
    }
    wp_enqueue_media();
}

// Register Settings
add_action('admin_init', 'semseo_register_settings');
function semseo_register_settings() {
    register_setting('semseo_settings_group', 'semseo_settings');
}

// Render Settings Page
function semseo_render_settings_page() {
    if (!current_user_can('manage_options')) {
        return;
    }
    $options = get_option('semseo_settings');
    ?>
    <div class="wrap">
        <h1>semSEO Settings</h1>
        <form method="post" action="options.php">
            <?php settings_fields('semseo_settings_group'); ?>
            <?php do_settings_sections('semseo_settings_group'); ?>
            <table class="form-table">
                <tr>
                    <th scope="row">Default OG Description</th>
                    <td>
                        <input type="text" name="semseo_settings[og_description]" value="<?php echo isset($options['og_description']) ? esc_attr($options['og_description']) : ''; ?>" class="regular-text" />
                    </td>
                </tr>
                <tr>
                    <th scope="row">Default OG URL</th>
                    <td>
                        <input type="text" name="semseo_settings[og_url]" value="<?php echo isset($options['og_url']) ? esc_attr($options['og_url']) : ''; ?>" class="regular-text" />
                    </td>
                </tr>
                <tr>
                    <th scope="row">Default OG Image</th>
                    <td>
                        <input type="text" name="semseo_settings[og_image]" value="<?php echo isset($options['og_image']) ? esc_attr($options['og_image']) : ''; ?>" class="regular-text" />
                        <p class="description">Insert an image URL or use the Media Library button.</p>
                        <input type="button" class="button semseo-upload-image" value="Upload/Select Image" />
                    </td>
                </tr>
                <tr>
                    <th scope="row">Default OG Type</th>
                    <td>
                        <input type="text" name="semseo_settings[og_type]" value="<?php echo isset($options['og_type']) ? esc_attr($options['og_type']) : ''; ?>" class="regular-text" />
                    </td>
                </tr>
                <tr>
                    <th scope="row">Default X (Twitter) Card</th>
                    <td>
                        <input type="text" name="semseo_settings[twitter_card]" value="<?php echo isset($options['twitter_card']) ? esc_attr($options['twitter_card']) : ''; ?>" class="regular-text" />
                    </td>
                </tr>
                <tr>
                    <th scope="row">Default X (Twitter) Description</th>
                    <td>
                        <input type="text" name="semseo_settings[twitter_desc]" value="<?php echo isset($options['twitter_desc']) ? esc_attr($options['twitter_desc']) : ''; ?>" class="regular-text" />
                    </td>
                </tr>
                <tr>
                    <th scope="row">Post Types</th>
                    <td>
                        <input type="text" name="semseo_settings[cpts]" value="<?php echo isset($options['cpts']) ? esc_attr($options['cpts']) : ''; ?>" class="regular-text" />
                        <p class="description">Comma-separated post types (e.g. post,page,my_cpt).</p>
                    </td>
                </tr>
                <tr>
                    <th scope="row">Global Indexing</th>
                    <td>
                        <?php
                        $global_indexing_val = isset($options['global_indexing']) ? $options['global_indexing'] : '1';
                        ?>
                        <select name="semseo_settings[global_indexing]">
                            <option value="1" <?php selected($global_indexing_val, '1'); ?>>Enable Indexing</option>
                            <option value="0" <?php selected($global_indexing_val, '0'); ?>>Disable Indexing</option>
                        </select>
                        <p class="description">Default indexing setting for the entire site.</p>
                    </td>
                </tr>
                <tr>
                    <th scope="row">Default Keywords</th>
                    <td>
                        <input type="text" name="semseo_settings[meta_keywords]" value="<?php echo isset($options['meta_keywords']) ? esc_attr($options['meta_keywords']) : ''; ?>" class="regular-text" />
                        <p class="description">Default meta keywords (comma-separated) for the whole site.</p>
                    </td>
                </tr>
                <!-- NOWE: Domyślny Meta Description -->
                <tr>
                    <th scope="row">Default Meta Description</th>
                    <td>
                        <textarea name="semseo_settings[meta_description]" class="large-text" rows="3"><?php echo isset($options['meta_description']) ? esc_textarea($options['meta_description']) : ''; ?></textarea>
                        <p class="description">Default meta description displayed throughout the page (with the option to override it in a post).</p>
                    </td>
                </tr>
            </table>
            <?php submit_button(); ?>
        </form>
    </div>

    <script>
        jQuery(document).ready(function($){
            $('.semseo-upload-image').on('click', function(e){
                e.preventDefault();
                var imageFrame;
                if (imageFrame) {
                    imageFrame.open();
                    return;
                }
                imageFrame = wp.media({
                    title: 'Select or Upload an Image',
                    button: {
                        text: 'Use this image'
                    },
                    multiple: false
                });
                imageFrame.on('select', function(){
                    var attachment = imageFrame.state().get('selection').first().toJSON();
                    $('input[name="semseo_settings[og_image]"]').val(attachment.url);
                });
                imageFrame.open();
            });
        });
    </script>
    <?php
}

// Add Meta Box to CPTs
add_action('add_meta_boxes', 'semseo_add_meta_boxes');
function semseo_add_meta_boxes() {
    $options = get_option('semseo_settings');
    $cpts = isset($options['cpts']) ? explode(',', $options['cpts']) : ['post','page'];
    $cpts = array_map('trim', $cpts);

    foreach ($cpts as $cpt) {
        if (post_type_exists($cpt)) {
            add_meta_box(
                'semseo_meta_box',
                'semSEO',
                'semseo_meta_box_callback',
                $cpt,
                'side',
                'high'
            );
        }
    }
}

// Meta Box Callback
function semseo_meta_box_callback($post) {
    wp_nonce_field('semseo_save_meta_box', 'semseo_meta_box_nonce');

    $og_title       = get_post_meta($post->ID, '_semseo_og_title', true);
    $og_desc        = get_post_meta($post->ID, '_semseo_og_description', true);
    $og_url         = get_post_meta($post->ID, '_semseo_og_url', true);
    $og_type        = get_post_meta($post->ID, '_semseo_og_type', true);
    $og_image       = get_post_meta($post->ID, '_semseo_og_image', true);
    $twitter_card   = get_post_meta($post->ID, '_semseo_twitter_card', true);
    $twitter_desc   = get_post_meta($post->ID, '_semseo_twitter_desc', true);
    $meta_keywords  = get_post_meta($post->ID, '_semseo_meta_keywords', true);
    // NOWE: Pobieranie meta description
    $meta_description = get_post_meta($post->ID, '_semseo_meta_description', true);

    // Indexing override: "global" (default), "1" = enable, "0" = disable
    $index_override = get_post_meta($post->ID, '_semseo_indexing_override', true);
    if (!$index_override) {
        $index_override = 'global';
    }

    echo '<p><label for="semseo_og_title">OG Title</label><br />';
    echo '<input type="text" id="semseo_og_title" name="semseo_og_title" value="' . esc_attr($og_title) . '" class="widefat" /></p>';

    echo '<p><label for="semseo_og_description">OG Description</label><br />';
    echo '<textarea id="semseo_og_description" name="semseo_og_description" class="widefat">' . esc_textarea($og_desc) . '</textarea></p>';

    echo '<p><label for="semseo_og_url">OG URL</label><br />';
    echo '<input type="text" id="semseo_og_url" name="semseo_og_url" value="' . esc_attr($og_url) . '" class="widefat" /></p>';

    echo '<p><label for="semseo_og_type">OG Type</label><br />';
    echo '<input type="text" id="semseo_og_type" name="semseo_og_type" value="' . esc_attr($og_type) . '" class="widefat" /></p>';

    echo '<p><label for="semseo_og_image">OG Image</label><br />';
    echo '<input type="text" id="semseo_og_image" name="semseo_og_image" value="' . esc_attr($og_image) . '" class="widefat" />';
    echo '<input type="button" class="button semseo-og-image-upload" style="margin-top:5px;" value="Upload/Select Image" /></p>';

    echo '<p><label for="semseo_twitter_card">X (Twitter) Card</label><br />';
    echo '<input type="text" id="semseo_twitter_card" name="semseo_twitter_card" value="' . esc_attr($twitter_card) . '" class="widefat" /></p>';

    echo '<p><label for="semseo_twitter_desc">X (Twitter) Description</label><br />';
    echo '<textarea id="semseo_twitter_desc" name="semseo_twitter_desc" class="widefat">' . esc_textarea($twitter_desc) . '</textarea></p>';

    echo '<p><label for="semseo_meta_keywords">Keywords</label><br />';
    echo '<input type="text" id="semseo_meta_keywords" name="semseo_meta_keywords" value="' . esc_attr($meta_keywords) . '" class="widefat" />';
    echo '<small style="display: block; margin-top: 3px;">Comma-separated list of keywords</small></p>';

    echo '<p><label for="semseo_indexing_override">Indexing Override</label><br />';
    echo '<select id="semseo_indexing_override" name="semseo_indexing_override">';
    echo '<option value="global" '.selected($index_override, 'global', false).'>Use Global</option>';
    echo '<option value="1" '.selected($index_override, '1', false).'>Enable</option>';
    echo '<option value="0" '.selected($index_override, '0', false).'>Disable</option>';
    echo '</select></p>';

    // NOWE: Pole Meta Description
    echo '<p><label for="semseo_meta_description">Meta Description</label><br />';
    echo '<textarea id="semseo_meta_description" name="semseo_meta_description" class="widefat" rows="3">' . esc_textarea($meta_description) . '</textarea>';
    echo '<small style="display: block; margin-top: 3px;">Opis do &lt;meta name="description"&gt;, max ~160 znaków.</small></p>';
    ?>
    <script>
        jQuery(document).ready(function($){
            $('.semseo-og-image-upload').on('click', function(e){
                e.preventDefault();
                var imageFrame;
                if (imageFrame) {
                    imageFrame.open();
                    return;
                }
                imageFrame = wp.media({
                    title: 'Select or Upload an Image',
                    button: {
                        text: 'Use this image'
                    },
                    multiple: false
                });
                imageFrame.on('select', function(){
                    var attachment = imageFrame.state().get('selection').first().toJSON();
                    $('#semseo_og_image').val(attachment.url);
                });
                imageFrame.open();
            });
        });
    </script>
    <?php
}

// Save Meta Box Data
add_action('save_post', 'semseo_save_meta_box_data');
function semseo_save_meta_box_data($post_id) {
    if (!isset($_POST['semseo_meta_box_nonce'])) {
        return;
    }
    if (!wp_verify_nonce($_POST['semseo_meta_box_nonce'], 'semseo_save_meta_box')) {
        return;
    }
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    $fields = [
        '_semseo_og_title'          => 'semseo_og_title',
        '_semseo_og_description'    => 'semseo_og_description',
        '_semseo_og_url'            => 'semseo_og_url',
        '_semseo_og_type'           => 'semseo_og_type',
        '_semseo_og_image'          => 'semseo_og_image',
        '_semseo_twitter_card'      => 'semseo_twitter_card',
        '_semseo_twitter_desc'      => 'semseo_twitter_desc',
        '_semseo_indexing_override' => 'semseo_indexing_override',
        '_semseo_meta_keywords'     => 'semseo_meta_keywords',
        // NOWE: meta description
        '_semseo_meta_description'  => 'semseo_meta_description',
    ];

    foreach ($fields as $meta_key => $field_name) {
        if (isset($_POST[$field_name])) {
            update_post_meta($post_id, $meta_key, sanitize_textarea_field($_POST[$field_name]));
        } else {
            delete_post_meta($post_id, $meta_key);
        }
    }
}

// Output Meta Tags
add_action('wp_head', 'semseo_output_meta_tags');
function semseo_output_meta_tags() {
    global $post;

    // If not a singular post/page, do nothing
    if (!is_singular()) {
        return;
    }

    $options = get_option('semseo_settings');

    // Check if this post type is in the semSEO cpts
    $cpts = isset($options['cpts']) ? explode(',', $options['cpts']) : ['post','page'];
    $cpts = array_map('trim', $cpts);
    $post_type = get_post_type($post);
    if (!in_array($post_type, $cpts, true)) {
        return;
    }

    // Indexing logic
    $global_indexing = isset($options['global_indexing']) ? $options['global_indexing'] : '1';
    $index_override  = get_post_meta($post->ID, '_semseo_indexing_override', true);
    if (!$index_override) {
        $index_override = 'global';
    }

    // Determine final robots rule
    $robots_content = '';
    if ($index_override === '1') {
        $robots_content = 'index,follow';
    } elseif ($index_override === '0') {
        $robots_content = 'noindex,nofollow';
    } else {
        // 'global'
        $robots_content = ($global_indexing === '1') ? 'index,follow' : 'noindex,nofollow';
    }

    // Fetch OG/X meta
    $og_title     = get_post_meta($post->ID, '_semseo_og_title', true);
    $og_desc      = get_post_meta($post->ID, '_semseo_og_description', true);
    $og_url       = get_post_meta($post->ID, '_semseo_og_url', true);
    $og_type      = get_post_meta($post->ID, '_semseo_og_type', true);
    $og_image     = get_post_meta($post->ID, '_semseo_og_image', true);
    $twitter_card = get_post_meta($post->ID, '_semseo_twitter_card', true);
    $twitter_desc = get_post_meta($post->ID, '_semseo_twitter_desc', true);

    // Fetch meta keywords
    $post_keywords    = get_post_meta($post->ID, '_semseo_meta_keywords', true);
    $global_keywords  = isset($options['meta_keywords']) ? $options['meta_keywords'] : '';
    $final_keywords   = !empty($post_keywords) ? $post_keywords : $global_keywords;

    // NOWE: meta description
    $post_meta_desc       = get_post_meta($post->ID, '_semseo_meta_description', true);
    $global_meta_desc     = isset($options['meta_description']) ? $options['meta_description'] : '';
    $final_meta_desc_raw  = !empty($post_meta_desc) ? $post_meta_desc : $global_meta_desc;

    // Ograniczenie do 160 znaków, jeśli potrzebujesz
    $final_meta_desc = mb_substr(trim($final_meta_desc_raw), 0, 160);

    // Fallbacks for OG fields
    if (empty($og_title)) {
        $og_title = get_the_title($post);
    }
    if (empty($og_desc)) {
        $og_desc = !empty($options['og_description']) ? $options['og_description'] : get_the_excerpt($post);
    }
    if (empty($og_url)) {
        $og_url = !empty($options['og_url']) ? $options['og_url'] : get_permalink($post);
    }
    if (empty($og_type)) {
        $og_type = !empty($options['og_type']) ? $options['og_type'] : 'website';
    }
    if (empty($og_image)) {
        if (has_post_thumbnail($post)) {
            $og_image = get_the_post_thumbnail_url($post, 'full');
        } elseif (!empty($options['og_image'])) {
            $og_image = $options['og_image'];
        }
    }
    if (empty($twitter_card)) {
        $twitter_card = !empty($options['twitter_card']) ? $options['twitter_card'] : 'summary_large_image';
    }
    if (empty($twitter_desc)) {
        $twitter_desc = !empty($options['twitter_desc']) ? $options['twitter_desc'] : $og_desc;
    }

    // Output robots
    echo "\n<!-- semSEO Robots -->\n";
    echo '<meta name="robots" content="' . esc_attr($robots_content) . '">' . "\n";

    // Nowy meta tag: Keywords (jeśli cokolwiek jest ustawione)
    if (!empty($final_keywords)) {
        echo "\n<!-- semSEO Keywords -->\n";
        echo '<meta name="keywords" content="' . esc_attr($final_keywords) . '">' . "\n";
    }

    // NOWE: Meta description
    if (!empty($final_meta_desc)) {
        echo "\n<!-- semSEO Meta Description -->\n";
        echo '<meta name="description" content="' . esc_attr($final_meta_desc) . '">' . "\n";
    }

    // Output Open Graph
    echo "\n<!-- semSEO Open Graph -->\n";
    echo '<meta property="og:title" content="' . esc_attr($og_title) . '">' . "\n";
    echo '<meta property="og:description" content="' . esc_attr($og_desc) . '">' . "\n";
    echo '<meta property="og:url" content="' . esc_url($og_url) . '">' . "\n";
    echo '<meta property="og:type" content="' . esc_attr($og_type) . '">' . "\n";
    if (!empty($og_image)) {
        echo '<meta property="og:image" content="' . esc_url($og_image) . '">' . "\n";
    }

    // Output X (Twitter)
    echo "\n<!-- semSEO X (Twitter) -->\n";
    echo '<meta name="twitter:card" content="' . esc_attr($twitter_card) . '">' . "\n";
    echo '<meta name="twitter:title" content="' . esc_attr($og_title) . '">' . "\n";
    echo '<meta name="twitter:description" content="' . esc_attr($twitter_desc) . '">' . "\n";
    if (!empty($og_image)) {
        echo '<meta name="twitter:image" content="' . esc_url($og_image) . '">' . "\n";
    }
    echo "\n";
}
