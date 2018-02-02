<?php

function ew_projects_vc() {
	vc_map(
    [
      "name" =>  "news",
      "base" => "ew_news",
      "category" =>  "EW",
      'params' => []
		]
	);
}

add_action( 'vc_before_init', 'ew_news_vc' );