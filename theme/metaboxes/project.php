<?php

function esw_type_project_metabox() {
	add_meta_box('esw_project', 'ESW Project', 'esw_type_project_cb', 'project', 'normal', 'high', null);
}

add_action('add_meta_boxes', 'esw_type_project_metabox');

function esw_type_project_cb($post) {
  wp_nonce_field('aws_type_project_meta', 'esw_type_project_nonce');
	$country = get_post_meta($post->ID, 'country_key', true);
	$state = get_post_meta($post->ID, 'state_key', true);
	$city = get_post_meta($post->ID, 'city_key', true);
	$products = get_post_meta($post->ID, 'products_key');
	$brands = get_post_meta($post->ID, 'brands_key', true);

	$props = array_merge(locationData(), [
		"country" => $country,
		"state" => $state,
		"city" => $city,
		"products" => $products,
		"brands" => $brands,
		"brandsOptions" => [
			"prestige",
			"elite",
			"alessia",
			"eli"
		],
		"productsOptions" => projectData()['products']
	]);
?>

<div class="project-metabox-container" data-props='<?php echo json_encode($props) ?>'></div>

<script src="<?php echo get_template_directory_uri() ?>/public/js/admin.js"></script>
<?php
} //end esw_type_project_cb


function ews_project_save($post_id) {
  update_field(array(
    'field_key' => 'country_key',
    'field_name' => 'country',
    'post_id' => $post_id
	));
	
	update_field(array(
    'field_key' => 'state_key',
    'field_name' => 'state',
    'post_id' => $post_id
  ));

	update_field(array(
    'field_key' => 'city_key',
    'field_name' => 'city',
    'post_id' => $post_id
  ));

	update_field(array(
    'field_key' => 'products_key',
    'field_name' => 'products',
    'post_id' => $post_id
  ));

	update_field(array(
    'field_key' => 'brands_key',
    'field_name' => 'brands',
    'post_id' => $post_id
  ));
}

add_action( 'save_post', 'ews_project_save');
