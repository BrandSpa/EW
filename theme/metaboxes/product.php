<?php
function esw_type_product_metabox() {
	add_meta_box('esw_project', 'ESW Product', 'esw_type_product_cb', 'product', 'normal', 'high', null);
}

add_action('add_meta_boxes', 'esw_type_product_metabox');

function esw_type_product_cb($post) {
	wp_nonce_field('aws_type_product_meta', 'esw_type_product_nonce');

  $fields = [
    "header",
    "slider",
    "systemDescription",
    "features"
  ];

	$props = [];

  foreach($fields as $field) {
    ${$field} = get_post_meta($post->ID, $field . '_key', true);
    $props[$field] = ${$field};
  }

?>

<div class="product-metabox-container" data-props='<?php echo json_encode($props) ?>'></div>

<script src="<?php echo get_template_directory_uri() ?>/public/js/admin.js"></script>
<?php
}


function ews_product_save($post_id) {
  $fields = [
    "header",
    "slider",
    "systemDescription",
    "features"
  ];

  foreach($fields as $field) {
    update_field(array(
      'field_key' => $field . '_key',
      'field_name' => $field,
      'post_id' => $post_id
    ));
  }

}

add_action( 'save_post', 'ews_product_save');
