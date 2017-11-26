<?php
//get wp enviroment
if ( ! defined('ABSPATH') ) {
	$parse_uri = explode( 'wp-content', $_SERVER['SCRIPT_FILENAME'] );
	require_once( $parse_uri[0] . 'wp-load.php' );
}

require str_replace('graphql' , '', __DIR__) . '/vendor/autoload.php';

use GraphQL\GraphQL;
use GraphQL\Type\Schema;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\InputObjectType;
use GraphQL\Type\Definition\Type;

// require 'queries/projectsQuery.php';
// require 'types/test.php';

$projectType = new ObjectType([
	'name' => 'nea',
	'fields' => [
		'name' => [
			'type' => Type::string(),
			'resolve' => function($root) {
				return $root->post_title;
			}
		],
		'country' => [
			'type' => Type::string(),
			'resolve' => function($root) {
				return get_post_meta($root->ID, 'country_key', true) . ' nea';
			} 
		],
		'city' => [
			'type' => Type::string(),
			'resolve' => function($root) {
				return get_post_meta($root->ID, 'city_key', true);
			}
		],
		'brands' => [
			'type' => Type::listOf(Type::string()),
			'resolve' => function($root) {
				return get_post_meta($root->ID, 'brands_key', true);
			}
		]
	]
]);


$metaFilter = new InputObjectType([
	'name' => 'metaQueryCountry',
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

$filters = new InputObjectType([
	'name' => 'projectFilters',
	'fields' => [
		'country' => [
			'type' => $metaFilter
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
			'type' => $filters
		]
	],
	'resolve' => function($root, $args) {
		$options = array_merge([ 'post_type'  => 'project' ], $args);
		$query = new WP_Query($options);
		return $query->get_posts();
	}
];

$rootQuery = new ObjectType([
	'name' => 'rootQuery',
	'fields' => [
		'projects' => $projectsQuery
	]
]);

$schema = new Schema([
	'query' => $rootQuery
]);

try {
	$rawInput = file_get_contents('php://input');
	$input = json_decode($rawInput, true);
	$query = isset($input['query']) ? $input['query'] : '';
	$variableValues = isset($input['variables']) ? $input['variables'] : null;
	
	$rootValue = [];
	$result = GraphQL::executeQuery($schema, $query, $rootValue, null, $variableValues);
	$output = $result->toArray();
} catch (\Exception $e) {
	$output = [
			'errors' => [
					[
						'nea message' => $e->getMessage()
					]
			]
	];
}

header('Content-Type: application/json');
echo json_encode($output);

