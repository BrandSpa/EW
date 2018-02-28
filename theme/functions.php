<?php
/*
 * BrandSpa (http://brandspa.com)
 * Alejandro Sanabria <alejandro@brandspa.com>
 * Copyright 2017 BrandSpa
 */

register_nav_menus(
    array(
      'header' => 'Header menu',
      'mobile' => 'Mobile menu',
      'footer_right' => 'Footer menu Right',
      'footer_left' => 'Footer Left'
    )
  );

require_once 'config/db.php';
require_once 'types/index.php';
require_once 'api/index.php';
require_once 'lib/index.php';
require_once 'taxonomies/index.php';
require_once 'metaboxes/index.php';
require_once 'shortcodes/index.php';
require_once 'models/index.php';
require_once 'lib/translations.php';

function gett($text) {
	if(function_exists('pll__') ) {
		return pll__($text);
  }

	return $text;
}

add_theme_support( 'post-thumbnails', ['post', 'project', 'product'] );


function pojo_polylang_get_multilang_logo( $value ) {
	if ( function_exists( 'pll_current_language' ) ) {
		
		$current_lang = pll_current_language();
		$value = get_stylesheet_directory_uri() . '/public/img/logo_'. $current_lang . '.svg';

	}
	return $value;
}
add_filter( 'theme_mod_image_logo', 'pojo_polylang_get_multilang_logo' );