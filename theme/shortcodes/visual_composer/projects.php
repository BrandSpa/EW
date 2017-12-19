<?php

function ew_projects_vc() {
	vc_map(
    [
      "name" =>  "Projects",
      "base" => "ew_projects",
      "category" =>  "EW",
      'params' => []
		]
	);
}

add_action( 'vc_before_init', 'ew_projects_vc' );