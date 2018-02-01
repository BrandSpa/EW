<?php

function ew_posts_carousel_vc() {

  $params = [

  ];

	vc_map(
    [
      "name" =>  "Products",
      "base" => "ew_posts_carousel",
      "category" =>  "EW",
      'params' => $params
		]
	);
}

add_action( 'vc_before_init', 'ew_posts_carousel_vc' );