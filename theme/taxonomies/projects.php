<?php

function projects_taxononies() {
	$productArgs = [
		'hierarchical' => true,
		'label' => 'Products',
		'show_ui' => true,
		'show_admin_column' => true,
		'query_var' => true,
		'rewrite' => ['slug' => 'product']
	];

	$brandArgs = [
		'hierarchical' => true,
		'label' => 'Brands',
		'show_ui' => true,
		'show_admin_column' => true,
		'query_var' => true,
		'rewrite' => ['slug' => 'brand']
	];

	register_taxonomy( 'product', ['project'], $productArgs );
	register_taxonomy( 'brand', ['project'], $brandArgs );
}

add_action('init', 'projects_taxononies');