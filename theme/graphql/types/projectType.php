<?php
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

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
				return get_post_meta($root->ID, 'country_key', true);
			} 
		],
		'state' => [
			'type' => Type::string(),
			'resolve' => function($root) {
				return get_post_meta($root->ID, 'state_key', true);
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