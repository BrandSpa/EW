<?php

function create_project_type() {

  register_post_type( 'project',
    [
      'labels' => [
        'name' => 'Projects',
        'singular_name' => 'Project'
			],
			'supports' => [
          'title',
          'editor',
          // 'excerpt',
          'thumbnail',
          'revisions',
          'page_image_square'
        ],
			// 'taxonomies' => [ 'category'],
      'public' => true,
      // 'has_archive' => true
		]
  );

}

add_action( 'init', 'create_project_type' );
