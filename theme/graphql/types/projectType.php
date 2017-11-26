<?php
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

$projectType = new ObjectType([
	'name' => 'project',
	'fields' => [
		'country' => [
			'type' => Type::string(),
			'resolve' => function($project) {
				// return get_post_meta($project->ID, 'country_key', true);
				return 'problems';
			}
		],
		'city' => [
			'type' => Type::string(),
			'resolve' => function($project) {
				return get_post_meta($project->ID, 'city_key', true);
			}
		],
		'state' => [
			'type' => Type::string(),
			'resolve' => function($project) {
				return get_post_meta($project->ID, 'state_key', true);
			}
		],
		'brands' => [
			'type' => Type::listOf(Type::string()),
			'resolve' => function($project) {
				return get_post_meta($project->ID, 'brands_key', true);
			}
		]
	]
]);
