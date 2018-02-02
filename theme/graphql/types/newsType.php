<?php
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

$newsType = new ObjectType([
	'name' => 'news',
	'fields' => [
		'id' => [
			'type' => Type::int(),
			'resolve' => function($root) {
				return $root->ID;
			}
		],
		'name' => [
			'type' => Type::string(),
			'resolve' => function($root) {
				return $root->post_title;
			}
		],
		'url' => [
			'type' => Type::string(),
			'resolve' => function($root) {
				return $root->guid;
			}
		],
		'thumb' => [
			'type' => Type::string(),
			'resolve' => function($root) {
				return get_the_post_thumbnail_url($root->ID);
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
		'year' => [
			'type' => Type::string(),
			'resolve' => function($root) {
				return get_post_meta($root->ID, 'year_key', true);
			}
		],
		'month' => [
			'type' => Type::string(),
			'resolve' => function($root) {
				return gett(get_post_meta($root->ID, 'month_key', true));
			}
		],
		'news' => [
			'type' => Type::listOf(Type::string()),
			'resolve' => function($project) {
				return wp_get_post_terms( $project->ID, 'new', array("fields" => "names"));
			}
		]
	]
]);

