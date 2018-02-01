<?php

function ew_projects_carousel_vc() {

  $params = [];

	vc_map(
    [
      "name" =>  "Projects Carousel",
      "base" => "ew_projects_carousel",
      "category" =>  "EW",
      'params' => $params
		]
	);
}

add_action( 'vc_before_init', 'ew_projects_carousel_vc' );