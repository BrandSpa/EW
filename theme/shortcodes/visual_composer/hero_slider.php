<?php

function hero_slider_vc() {
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
      "name" =>  "HERO SLIDER",
      "base" => "hero_slider",
      "category" =>  "EW",
      'params' => $params
		]
	);
}

add_action( 'vc_before_init', 'hero_slider_vc' );