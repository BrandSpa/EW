<?php

function hero_slider_sc( $atts ){
	$at = shortcode_atts([
	 
	], $atts);

	ob_start();
	?> 
	 
	<div class="heroSlider-container"></div>
	
	<?php

	return ob_get_clean();
};

add_shortcode( 'hero_slider', 'hero_slider_sc' );