<?php
function esw_get_projects() {
  $filters = $_POST['filters'];

  /*
  [
    {'key': 'country', 'value': 'Colombia', compare: 'IN'},
    {'key': 'city', 'value': 'Bogota', compare: 'IN'}
  ]
  */

  $args = [
  	'post_type'  => 'project',
  	'meta_query' => is_array($filters) ? $filters : []
  ];

  $query = new WP_Query( $args );

  $projects = array_map(function($project) {
    //get all metadata
    return $project;
  }, $query->get_posts());

  return  $projects;
   wp_die();
}

 add_action( 'wp_ajax_get_projects', 'esw_get_projects' );
 add_action( 'wp_ajax_nopriv_get_projects', 'esw_get_projects' );
