<?php

function ew_projects_vc() {
	$params = [
		[
			'type' => 'param_group',
			'value' => '',
			'param_name' => 'slides',
			'heading' => 'slides',
			'params' => [
				[
					'type' => 'attach_image',
					'heading' => 'Enter image',
					'param_name' => 'bg',
				],
				[
					'type' => 'textfield',
					'value' => '',
					'heading' => 'Enter title',
					'param_name' => 'title',
				],
				[
					'type' => 'textarea',
					'value' => '',
					'heading' => 'Enter content',
					'param_name' => 'content',
				]
			]
		],
		[
			'type' => 'param_group',
			'value' => '',
			'param_name' => 'links',
			'heading' => 'menu',
			'params' => [
				[
					'type' => 'textfield',
					'value' => '',
					'heading' => 'Enter title',
					'param_name' => 'title',
				],
				[
					'type' => 'textfield',
					'value' => '',
					'heading' => 'Enter url',
					'param_name' => 'url',
				]
			]
		]
	];

	vc_map(
    [
      "name" =>  "PROJECTS",
      "base" => "ew_projects",
      "category" =>  "EW",
      'params' => []
		]
	);
}

add_action( 'vc_before_init', 'ew_projects_vc' );