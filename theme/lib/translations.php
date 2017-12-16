<?php

function set_translations() {
	$products = get_terms('product', [ 'hide_empty' => 0 ]);
	$brands = get_terms('brands', [ 'hide_empty' => 0 ]);
	$types = get_terms('type', [ 'hide_empty' => 0 ]);
	$features = get_terms('features', [ 'hide_empty' => 0 ]);

	foreach($data as $key => $text) {
		register_translation('ew-' . $key, $text, 'EW DATA');
	}

}