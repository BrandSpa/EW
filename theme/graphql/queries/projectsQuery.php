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
			'type' => Type::string(),
			'defaultValue' => 'IN'
		]
	]
]);

$taxonomyFilter = new InputObjectType([
	'name' => 'taxonomyQuery',
	'fields' => [
		'taxonomy' => [
			'type' => Type::string()
		],
		'field' => [
			'type' => Type::string(),
			'defaultValue' => 'term_id'
		],
		'terms'    => Type::listOf(Type::string()),
		'operator' => [
			'type' => Type::string(),
			'defaultValue' => 'IN'
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
		],
		'tax_query' => [
			'type' => Type::listOf($taxonomyFilter),
		],
		'tax_relation' => Type::string()
	],
	'resolve' => function($root, $args) {
		if(count($args['tax_query']) > 1) {
			$tax_relation = ['relation' => $args['tax_relation']];
			$tax_query = array_merge($args['tax_query'], $tax_relation);
			$args['tax_query'] = $tax_query;
		}

		$options = array_merge([ 'post_type'  => 'project' ], $args);
		$query = new WP_Query($options);
		return $query->get_posts();
	}
];
