<?php

function esw_type_project_metabox() {
	add_meta_box('esw_project', 'BS project', 'esw_type_project_cb', 'project', 'normal', 'high', null);
}

add_action('add_meta_boxes', 'esw_type_project_metabox');

function esw_type_project_cb($post) {
  wp_nonce_field('aws_type_project_meta', 'esw_type_project_nonce');
	$images = get_post_meta($post->ID, 'type_gallery_images_key', true);
	$excerpts = get_post_meta($post->ID, 'type_gallery_excerpts_key', true);
	$props = ["images" => $images, "excerpts" => $excerpts];
?>

<form action="#">
  <div class="form-group">
    <select name="country" class="form-control">
      <option value="">Country</option>
    </select>
  </div>

  <div class="form-group">
    <select name="city" class="form-control">
      <option value="">City</option>
    </select>
  </div>

  <div class="form-group">
    <select name="product" class="form-control">
      <option value="">Product</option>
    </select>
  </div>

  <div class="form-group">
    <select name="brand" class="form-control">
      <option value="">Brand</option>
    </select>
  </div>

</form>

<?php
} //end esw_type_project_cb
