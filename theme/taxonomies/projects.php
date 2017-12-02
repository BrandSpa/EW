<?php

function projects_taxononies() {
	$labels = ['products'];
	$args = [
		'hierarchical' => true,
		'label' => 'Products',
		'show_ui' => true,
		'show_admin_column' => true,
		'query_var' => true,
		'rewrite' => ['slug' => 'product']
	];

	register_taxonomy( 'product', ['project'], $args );
}

add_action('init', 'projects_taxononies');