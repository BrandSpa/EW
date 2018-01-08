<?php

function set_translations() {
	$products = get_terms('product', [ 'hide_empty' => 0 ]);
	$brands = get_terms('brands', [ 'hide_empty' => 0 ]);
	$types = get_terms('type', [ 'hide_empty' => 0 ]);
	$features = get_terms('features', [ 'hide_empty' => 0 ]);
	$months = months();
	$texts = [
		'CONTACT US',
		'Name',
		'Email',
		'Message',
		'Send',
		'Country',
		'City',
		'State',
		'Products',
		'see more',
		'TYPE',
		'BRAND',
		'BRANDS',
		'FEATURES',
		'System Description',
		'Features',
		'Related Downloads',
		'Blueprints',
		'installation guide',
		'Elite Brand Brochure',
		'Related projects'
	];

	foreach($texts as $text) {
		register_translation('ew-' . $text, $text, 'texts');
	}

	foreach($products as $term) {
		register_translation('ew-' . $term->name, $term->name, 'products');
	}

	foreach($brands as $term) {
		register_translation('ew-' . $term->name, $term->name, 'brands');
	}

	foreach($types as $term) {
		register_translation('ew-' . $term->name, $term->name, 'types');
	}

	foreach($features as $term) {
		register_translation('ew-' . $term->name, $term->name, 'features');
	}

	foreach($months as $m) {
		register_translation('ew-' . $m, $m, 'months');
	}


}