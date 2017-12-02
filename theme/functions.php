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
      'footer' => 'Footer menu'
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
