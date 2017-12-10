<?php
function esw_type_project_metabox() {
	add_meta_box('esw_project', 'ESW Project', 'esw_type_project_cb', 'project', 'normal', 'high', null);
}

add_action('add_meta_boxes', 'esw_type_project_metabox');

function esw_type_project_cb($post) {
  wp_nonce_field('aws_type_project_meta', 'esw_type_project_nonce');
  $fields = [
    "country",
    "state",
    "city",
    "header",
    "slider",
    "architect",
    "constructor",
    "developer",
    "systems",
    "aluminum",
    "glass"
  ];
  $props = [];

  foreach($fields as $field) {
    ${$field} = get_post_meta($post->ID, $field . '_key', true);
    $props[$field] = ${$field};
  }

	$props = array_merge(locationData(), $props);
?>
<div class="project-metabox-container" data-props='<?php echo json_encode($props) ?>'></div>

<script src="<?php echo get_template_directory_uri() ?>/public/js/admin.js"></script>
<?php
} //end esw_type_project_cb


function ews_project_save($post_id) {
  $fields = [
    "country",
    "state",
    "city",
    "header",
    "slider",
    "architect",
    "constructor",
    "developer",
    "systems",
    "aluminum",
    "glass"
  ];

  foreach($fields as $field) {
    update_field(array(
      'field_key' => $field . '_key',
      'field_name' => $field,
      'post_id' => $post_id
    ));
  }

}

add_action( 'save_post', 'ews_project_save');
