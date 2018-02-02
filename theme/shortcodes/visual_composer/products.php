<?php

function ew_products_vc() {

  $params = [
    [
      "type" => "textfield",
      "heading" => "Brand pre-select",
      "param_name" => "brand",
      "value" => "",
      "description" => "Example: Prestige"
    ],
    [
      "type" => "textfield",
      "heading" => "Type pre-select",
      "param_name" => "type",
      "value" => isset($brands)?$brands:array(),
      "description" => "Example: WINDOWS"
    ],
    [
      "type" => "textfield",
      "heading" => "feature pre-select",
      "param_name" => "feature",
      "value" => isset($brands)?$brands:array(),
      "description" => "Example: Hurricane Resistant"
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