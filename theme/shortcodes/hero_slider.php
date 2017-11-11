<?php

function hero_slider_sc( $atts ){
	$at = shortcode_atts([
		'slides' => '',
	], $atts);


	$slides = array_map(function($slide) {
		$slide['bg'] = wp_get_attachment_url($slide['bg']);
		return $slide;
	}, vc_param_group_parse_atts( $at['slides'] ));

	$props = [
		"slides" => $slides
	];
	
	ob_start();
	?> 
	 
	<div class="heroSlider-container" data-props='<?php echo wp_json_encode($props); ?>'></div>
	
	<?php

	return ob_get_clean();
};

add_shortcode( 'hero_slider', 'hero_slider_sc' );