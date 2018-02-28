<?php

function menu_to_array($locationName) {

  if(isset(get_nav_menu_locations()[$locationName])) {
    $menuId = get_nav_menu_locations()[$locationName];
    return wp_get_nav_menu_items($menuId) ? wp_get_nav_menu_items($menuId) : [];
  } else {
    return array();
  }
}


function multilanguaje_logo(  ) {
  $value = ""
	if ( function_exists( 'pll_current_language' ) ) {
		
		$current_lang = pll_current_language();
		$value = get_stylesheet_directory_uri() . '/public/img/logo_'. $current_lang . '.svg';

	}
	return $value;
}
