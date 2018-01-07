<?php

function related_projects_sc( $atts ){
	$at = shortcode_atts([
		'products' => 'windows'
	], $atts);

	$props = [
		'products' => explode(',', $at['products'])
	];

	ob_start();
	?>

  <section class="related-projects-container" data-props='<?php echo json_encode($props) ?>'></section>

	<?php

	return ob_get_clean();
}

add_shortcode( 'ew_related_projects', 'related_projects_sc' );