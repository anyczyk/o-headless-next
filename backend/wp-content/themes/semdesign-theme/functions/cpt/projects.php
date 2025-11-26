<?php
function custom_post_type_projects() {
    $labels = array(
        'name'                  => _x('Projects', 'Post Type General Name', 'semdesign'),
        'singular_name'         => _x('Project', 'Post Type Singular Name', 'semdesign'),
        'menu_name'             => __('Projects', 'semdesign'),
        'name_admin_bar'        => __('Project', 'semdesign'),
        'archives'              => __('Project Archives', 'semdesign'),
        'attributes'            => __('Project Attributes', 'semdesign'),
        'parent_item_colon'     => __('Parent Project:', 'semdesign'),
        'all_items'             => __('All Projects', 'semdesign'),
        'add_new_item'          => __('Add New Project', 'semdesign'),
        'add_new'               => __('Add New', 'semdesign'),
        'new_item'              => __('New Project', 'semdesign'),
        'edit_item'             => __('Edit Project', 'semdesign'),
        'update_item'           => __('Update Project', 'semdesign'),
        'view_item'             => __('View Project', 'semdesign'),
        'view_items'            => __('View Projects', 'semdesign'),
        'search_items'          => __('Search Project', 'semdesign'),
        'not_found'             => __('Not found', 'semdesign'),
        'not_found_in_trash'    => __('Not found in Trash', 'semdesign'),
        'featured_image'        => __('Featured Image', 'semdesign'),
        'set_featured_image'    => __('Set featured image', 'semdesign'),
        'remove_featured_image' => __('Remove featured image', 'semdesign'),
        'use_featured_image'    => __('Use as featured image', 'semdesign'),
        'insert_into_item'      => __('Insert into project', 'semdesign'),
        'uploaded_to_this_item' => __('Uploaded to this project', 'semdesign'),
        'items_list'            => __('Projects list', 'semdesign'),
        'items_list_navigation' => __('Projects list navigation', 'semdesign'),
        'filter_items_list'     => __('Filter projects list', 'semdesign'),
    );

    $args = array(
        'label'                 => __('Project', 'semdesign'),
        'description'           => __('Custom post type for projects', 'semdesign'),
        'labels'                => $labels,
        'supports'              => array('title', 'editor', 'excerpt', 'thumbnail', 'revisions'),
        'taxonomies'            => array('category', 'post_tag'), // Kategorie i tagi
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 5,
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'post',
        'rewrite'               => array(
            'slug'       => 'project',
            'with_front' => false,
        ),
        'show_in_rest'          => true,
    );

    register_post_type('project', $args);
}
add_action('init', 'custom_post_type_projects', 0);
