<?php

function esw_get_image_url() {
	$data = $_POST['data'];
	$id = $data['id'];
	header('Content-type: application/json');
	echo json_encode([ "url" => wp_get_attachment_url($id)]);
	wp_die();
}

add_action( 'wp_ajax_get_image_url', 'esw_get_image_url' );
add_action( 'wp_ajax_nopriv_get_image_url', 'esw_get_image_url' );


function esw_get_images_url() {
	$data = $_POST['data'];
	$ids = $data['ids'];
	$arr = explode(',', $ids);
	$thumbs = array_map(function($id) {
		return [ "url" => wp_get_attachment_url($id)];
	}, $arr);

	header('Content-type: application/json');
	echo json_encode($thumbs);
	wp_die();
}

add_action( 'wp_ajax_get_images_url', 'esw_get_images_url' );
add_action( 'wp_ajax_nopriv_get_images_url', 'esw_get_images_url' );


