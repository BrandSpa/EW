<?php

function ew_products_vc() {
	vc_map(
    [
      "name" =>  "Products",
      "base" => "ew_products",
      "category" =>  "EW",
      'params' => []
		]
	);
}

add_action( 'vc_before_init', 'ew_products_vc' );