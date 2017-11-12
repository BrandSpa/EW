<?php

function menu_to_array($locationName) {

  if(isset(get_nav_menu_locations()[$locationName])) {
    $menuId = get_nav_menu_locations()[$locationName];
    return wp_get_nav_menu_items($menuId) ? wp_get_nav_menu_items($menuId) : [];
  } else {
    return array();
  }
}

