<?php

function ew_contact_us_vc() {

  $params = [];

	vc_map(
    [
      "name" =>  "Contact us",
      "base" => "ew_contact_us",
      "category" =>  "EW",
      'params' => $params
		]
	);
}

add_action( 'vc_before_init', 'ew_contact_us_vc' );