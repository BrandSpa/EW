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

require 'types/index.php';
require 'api/index.php';
require 'lib/index.php';
require 'metaboxes/index.php';

