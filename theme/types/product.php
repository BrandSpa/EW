<?php

function create_product_type() {

  register_post_type( 'product',
    [
      'labels' => [
        'name' => 'Products',
        'singular_name' => 'product'
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

add_action( 'init', 'create_product_type' );
