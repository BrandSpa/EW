<?php

function projects_sc( $atts ){
	$at = shortcode_atts([
	 
	], $atts);

	$props = [
		"brandsOptions" => [
			"prestige",
			"elite",
			"alessia",
			"eli"
		],
		"productsOptions" => [
			"windows",
			"window walls",
			"doors",
			"curtain wall",
			"store front",
			"railings",
			"interiors"
		]
	];

	ob_start();
	?> 
	
  <div class="projects-container" data-props='<?php echo json_encode($props) ?>'></div>
	
	<?php

	return ob_get_clean();
}

add_shortcode( 'projects', 'projects_sc' );