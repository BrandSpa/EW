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
		'year' => [
			'type' => Type::string(),
			'resolve' => function($root) {
				return get_the_date( 'Y', $root->ID );
			}
		],
		'month' => [
			'type' => Type::string(),
			'resolve' => function($root) {
				return get_the_date( 'm', $root->ID );
			}
        ],
        'readMore' => [
			'type' => Type::string(),
			'resolve' => function($root) {
				return __("Read More");
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

