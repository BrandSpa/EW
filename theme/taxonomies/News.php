<?php

function news_taxononies() {
	$newsArgs = [
		'hierarchical' => true,
		'label' => 'News',
		'show_ui' => true,
		'show_admin_column' => true,
		'query_var' => true,
		'rewrite' => ['slug' => 'new']
	];

	register_taxonomy( 'news', ['new'], $newsArgs );
}

add_action('init', 'news_taxononies');