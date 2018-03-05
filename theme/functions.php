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


add_filter('pre_get_posts', function (\WP_Query $query) {
  if ($query->is_tax('products') || $query->is_tax('projects')) {
      $query->set('post_status', 'any');
  }
  return $query;
}, 10, 1);


function gett($text) {
	if(function_exists('pll__') ) {
		return pll__($text);
  }

	return $text;
}

add_theme_support( 'post-thumbnails', ['post', 'project', 'product'] );
