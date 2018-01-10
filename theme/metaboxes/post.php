<?php
function esw_type_post_metabox() {
	add_meta_box('esw_project', 'ESW Product', 'esw_type_post_cb', 'post', 'normal', 'high', null);
}

add_action('add_meta_boxes', 'esw_type_post_metabox');

function esw_type_post_cb($post) {
	wp_nonce_field('aws_type_product_meta', 'esw_type_post_nonce');

  $fields = [
    "header",
		 "day",
		 "month",
		 "year",
		 "intro"
  ];

	$props = [];

  foreach($fields as $field) {
    ${$field} = get_post_meta($post->ID, $field . '_key', true);
    $props[$field] = ${$field};
  }

?>

<div class="post-metabox-container" data-props='<?php echo json_encode($props) ?>'></div>

<script src="<?php echo get_template_directory_uri() ?>/public/js/admin.js"></script>
<?php
}

function ews_product_save($post_id) {
  $fields = [
    "header",
		 "day",
		 "month",
		 "year",
		 "intro"
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
