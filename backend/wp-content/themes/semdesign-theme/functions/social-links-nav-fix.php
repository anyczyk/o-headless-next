<?php

// Move <li> classes to the <a> tag for "Social links" menu
function social_links_nav_fix_class( $atts, $item, $args, $depth ) {
    // Check if the current menu is "Social links"
    if ( isset( $args->menu ) && 'Social links' === $args->menu ) {
        if ( ! empty( $item->classes ) && is_array( $item->classes ) ) {
            // Optionally filter out any classes you don't want
            $classes = array_filter( $item->classes, function( $class ) {
                return ! in_array( $class, array( 'current-menu-item', 'current_page_item' ) );
            } );

            if ( ! empty( $classes ) ) {
                // Append or set the classes in the <a> tag
                if ( isset( $atts['class'] ) ) {
                    $atts['class'] .= ' ' . implode( ' ', $classes );
                } else {
                    $atts['class'] = implode( ' ', $classes );
                }

                $atts['aria-label'] = $item->title;
            }
        }
    }
    return $atts;
}
add_filter( 'nav_menu_link_attributes', 'social_links_nav_fix_class', 10, 4 );

// Remove classes from the <li> element for "Social links" menu
function remove_social_links_li_classes( $classes, $item, $args, $depth ) {
    if ( isset( $args->menu ) && 'Social links' === $args->menu ) {
        // Remove all classes from the <li> element
        return array();
    }
    return $classes;
}
add_filter( 'nav_menu_css_class', 'remove_social_links_li_classes', 10, 4 );

// Wrap the link text in <span> for "Social links" menu
function wrap_menu_item_title_in_span( $title, $item, $args, $depth ) {
    if ( isset( $args->menu ) && 'Social links' === $args->menu ) {
        return '<span class="d-none">' . $title . '</span>';
    }
    return $title;
}
add_filter( 'nav_menu_item_title', 'wrap_menu_item_title_in_span', 10, 4 );
