<?php

function ew_products_vc() {

  $params = [
    [
      "type" => "textfield",
      "heading" => "Brand pre-select",
      "param_name" => "brand",
      "value" => $brands,
      "description" => "It must have the same name"
    ],
  ];

	vc_map(
    [
      "name" =>  "Products",
      "base" => "ew_products",
      "category" =>  "EW",
      'params' => $params
		]
	);
}

add_action( 'vc_before_init', 'ew_products_vc' );