<?php

function projects_sc( $atts ){
	$at = shortcode_atts([
	 
	], $atts);

	$props = array_merge(locationData(),[
		"brandsOptions" => [
			"prestige",
			"elite",
			"alessia",
			"eli"
		],
		"productsOptions" => projectData()['products']
	]);

	ob_start();
	?> 
	
  <section class="projects-container" data-props='<?php echo json_encode($props) ?>'></section>
	
	<?php

	return ob_get_clean();
}

add_shortcode( 'projects', 'projects_sc' );