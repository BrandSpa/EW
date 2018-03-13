<?php

function set_key($str) {
	return str_replace(' ', '_', strtolower($str));
}

function register_translation($name ='', $text, $group = 'EW', $multiline = true) {
	if(function_exists('pll_register_string')) {
		$name = str_replace(' ', '_', strtolower(substr($text, 0, 25)));
		pll_register_string( $name, $text, $group, $multiline );
	}
}

function set_translations() {
	$products = get_terms('product', [ 'hide_empty' => 0 ]);
	$brands = get_terms('brand', ['hide_empty' => 0 ]);
	$types = get_terms('type', [ 'hide_empty' => 0 ]);
	$features = get_terms('feature', [ 'hide_empty' => 0 ]);
	$months = function_exists('months') ? months() : [];

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
		'Related projects',
		'No results found for this search',
		'Aceptar y Descargar',
		'Aceptar',
		'Terms and Conditions'
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

add_action('init', 'set_translations');