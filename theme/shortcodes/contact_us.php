<?php

function contact_us_sc( $atts ){
	$at = shortcode_atts([
		"placeholder-name" => "Name",
		"placeholder-email" => "Email",
		"placeholder-message" => "Message",
		"placeholder-send" => "Send",
	], $atts);

	$props = [
		"placeholders" => [
			"name" => gett($at["placeholder-name"]),
			"email" =>  gett($at["placeholder-email"]),
			"message" => gett($at["placeholder-message"]),
			"send" => gett($at["placeholder-send"])
		]
	];

	ob_start();
	?>

  <section class="contact-us-container" data-props='<?php echo json_encode($props) ?>'></section>

	<?php

	return ob_get_clean();
}

add_shortcode( 'ew_contact_us', 'contact_us_sc' );