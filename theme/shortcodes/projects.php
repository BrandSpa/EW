<?php

function projects_sc( $atts ){
	$at = shortcode_atts([

	], $atts);

	$props = array_merge(locationData(),[
		"brandsOptions" => get_terms('brand', [ 'hide_empty' => 0 ]),
		"productsOptions" => get_terms('product', [ 'hide_empty' => 0 ]),
		"texts" => [
			'country' => gett('Country'),
			'state' => gett('State'),
			'city' => gett('City'),
			'relatedProjects' => gett('Related projects'),
			'seeMore' => gett('See more'),
			'products' => gett('Products'),
			'filters' => gett('Filters')
		]
	]);

	ob_start();
	?>

  <section class="projects-container" data-props='<?php echo json_encode($props) ?>'></section>

	<?php

	return ob_get_clean();
}

add_shortcode( 'ew_projects', 'projects_sc' );