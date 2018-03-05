<?php
use GraphQL\Type\Definition\InputObjectType;
use GraphQL\Type\Definition\Type;

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
		'lang'     => $lang,
		'operator' => [
			'type' => Type::string(),
			'defaultValue' => 'IN'
		]
	]
]);