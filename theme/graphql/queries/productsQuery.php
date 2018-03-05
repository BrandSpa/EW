<?php
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\InputObjectType;
use GraphQL\Type\Definition\Type;
$root = str_replace('queries' , '', __DIR__);

//print_r($lang); exit();

$productsQuery = [
	'type' => Type::listOf($productType),
	'args' => [
		'post_type'  => [
			'type'  => Type::string(),
			'defaultValue' => 'product'
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
		],
		'lang' => [
			'type' => Type::string(),
			'defaultValue' => $lang
		],
	],
	'resolve' => function($root, $args) {

		$query = new WP_Query($args);
		$posts = $query->get_posts();
		return $posts ;
		
	}
];
