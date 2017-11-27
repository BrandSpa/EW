<?php
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\InputObjectType;
use GraphQL\Type\Definition\Type;
require str_replace('queries' , '', __DIR__) . '/types/projectType.php';

$metaFilter = new InputObjectType([
	'name' => 'metaQuery',
	'fields' => [
		'key' => [
			'type' => Type::string()
		],
		'value' => [
			'type' => Type::listOf(Type::string())
		],
		'compare' => [
			'type' => Type::string()
		]
	]
]);

$projectsQuery = [
	'type' => Type::listOf($projectType),
	'args' => [
		'posts_per_page' => [
			'type' => Type::int()
		],
		'meta_query' => [
			'type' => Type::listOf($metaFilter),
			'resolve' => function($root) {
				var_dump($root);
			}
		]
	],
	'resolve' => function($root, $args) {
		$options = array_merge([ 'post_type'  => 'project' ], $args);
		$query = new WP_Query($options);
		return $query->get_posts();
	}
];
