<?php

function projects_carousel_sc( $atts ){
	$at = shortcode_atts([
		"post_per_page" => 6
	], $atts);

	$props = [

	];

	ob_start();
	?>

  <section
		class="projects-carousel-container"
		data-props='<?php echo json_encode($props) ?>'
	></section>

	<?php
	return ob_get_clean();
}

add_shortcode( 'ew_projects_carousel', 'projects_carousel_sc' );