<?php

function ew_related_projects_vc() {
	$params = [
		[
			'type' => 'textfield',
			'name' => 'products',
			'value' => ''
		]
	];
	vc_map(
    [
      "name" =>  "Related Projects",
      "base" => "ew_related_projects",
      "category" =>  "EW",
      'params' => $params
		]
	);
}

add_action( 'vc_before_init', 'ew_related_projects_vc' );