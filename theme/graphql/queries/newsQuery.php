<?php
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\InputObjectType;
use GraphQL\Type\Definition\Type;
$root = str_replace('queries' , '', __DIR__);

$newsQuery = [
	'type' => Type::listOf($newsType),
	'args' => [
		'post_type'  => [
			'type'  => Type::string(),
			'defaultValue' => 'post'
		],
		'posts_per_page' => [
			'type' => Type::int()
		],
		'paged' => [
			'type' => Type::int(),
			'defaultValue' => 1
		],
		'meta_query' => [
			'type' => Type::listOf($metaFilter),
		],
		'tax_query' => [
			'type' => Type::listOf($taxonomyFilter),
		],
		'tax_relation' => [
			'type' => Type::string(),
			'defaultValue' => 'AND'
		]
	],
	'resolve' => function($root, $args) {

		if(count($args['tax_query']) > 1) {
			$tax_relation = ['relation' => $args['tax_relation']];
			$tax_query = array_merge($args['tax_query'], $tax_relation);
			$args['tax_query'] = $tax_query;
		}

		$query = new WP_Query($args);
		$posts = $query->get_posts();
		return $posts;
	}
];
