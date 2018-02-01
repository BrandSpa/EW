<?php

function products_sc( $atts ){
	$at = shortcode_atts([
		'type' => '',
		'brand' => '',
		'feature' => ''
	], $atts);

	$props = array_merge(locationData(),[
		"texts" => [
			"emptyResult" => gett('No results found for this search'),
			"features" => gett('FEATURES'),
			"brands" => gett('BRANDS'),
			'seeMore' => gett('See more'),
			'filters' => gett('Filters'),
		],
		"brandsOptions" => get_terms('brand', [ 'hide_empty' => 0 ]),
		"typesOptions" => array_map(function($type) {
			$type->position = get_option( "taxonomy_" . $type->term_id )['position'];
			return $type;
		}, get_terms('type', [ 'hide_empty' => 0 ])),
		"featuresOptions" => get_terms('feature', [ 'hide_empty' => 0 ]),
		"brand" => get_term_by('name', $at['brand'], 'brand'),
		"type" => get_term_by('name', $at['type'], 'type'),
		'feature' => get_term_by('name', $at['feature'], 'feature'),

	]);

	ob_start();
	?>

  <section class="products-container" data-props='<?php echo json_encode($props) ?>'></section>

	<?php

	return ob_get_clean();
}

add_shortcode( 'ew_products', 'products_sc' );