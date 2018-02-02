<?php

function news_taxononies() {
	$productArgs = [
		'hierarchical' => true,
		'label' => 'News',
		'show_ui' => true,
		'show_admin_column' => true,
		'query_var' => true,
		'rewrite' => ['slug' => 'new']
	];

	register_taxonomy( 'news', ['new'], $productArgs );
}

add_action('init', 'news_taxononies');