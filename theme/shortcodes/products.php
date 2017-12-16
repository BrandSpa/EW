<?php

function products_sc( $atts ){
	$at = shortcode_atts([
		'type' => ''
	], $atts);

	$props = array_merge(locationData(),[
		"brandsOptions" => get_terms('brand', [ 'hide_empty' => 0 ]),
		"typesOptions" => get_terms('type', [ 'hide_empty' => 0 ]),
		"featuresOptions" => get_terms('feature', [ 'hide_empty' => 0 ]),
	]);

	ob_start();
	?>

  <section class="products-container" data-props='<?php echo json_encode($props) ?>'></section>

	<?php

	return ob_get_clean();
}

add_shortcode( 'ew_products', 'products_sc' );