<?php
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

$testType = new ObjectType([
	'name' => 'test',
	'fields' => [
		'echo' => [
			'type' => Type::string(),
			'args' => [
					'message' => Type::nonNull(Type::string()),
			],
			'resolve' => function ($root, $args) {
					return $root['prefix'] . $args['message'];
			}
		]
	]
]);