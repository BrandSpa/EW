<?php
use GraphQL\Type\Definition\InputObjectType;
use GraphQL\Type\Definition\Type;

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
