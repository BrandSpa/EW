<?php
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
require str_replace('queries' , '', __DIR__) . '/types/projectType.php';

$projectsQuery = new ObjectType([
	'name' => 'projects',
	'fields' => [
		'entities' => [
			'type' => $projectType,
			'args' => [
				'limit' => [
					'type' => Type::int(),
					'defaultValue' => 1
				]
			],
			'resolve' => function($root, $args) {
				$query = new WP_Query( $args );
				return $query->get_posts();
			}
		]
	]
]);

