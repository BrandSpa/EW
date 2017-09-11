<?php
function esw_get_projects() {
  $filters = $_POST['filters'];
  $search = $_POST['search'];

  $args = [
  	'post_type'  => 'project',
  	'meta_query' => is_array($filters) ? $filters : []
  ];


  $query = new WP_Query( $args );

  $projects = array_map(function($project) {
    $project->thumb = get_the_post_thumbnail_url($project->ID);
    $project->country = get_post_meta($project->ID, 'country_key', true);
    $project->city = get_post_meta($project->ID, 'city_key', true);
    $project->brands = get_post_meta($project->ID, 'brands_key', true) ? get_post_meta($project->ID, 'brands_key', true) : [];
    $project->products = get_post_meta($project->ID, 'products_key', true) ? get_post_meta($project->ID, 'products_key', true) : [];
    return $project;
  }, $query->get_posts());

  header('Content-type: application/json');
  echo json_encode(["projects" => $projects, "args" => $args,]);

  wp_die();
}

 add_action( 'wp_ajax_get_projects', 'esw_get_projects' );
 add_action( 'wp_ajax_nopriv_get_projects', 'esw_get_projects' );
