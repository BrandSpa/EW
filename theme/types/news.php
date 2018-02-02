<?php

function create_news_type() {

  register_post_type( 'New',
    [
      'labels' => [
        'name' => 'News',
        'singular_name' => 'New'
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

add_action( 'init', 'create_news_type' );
