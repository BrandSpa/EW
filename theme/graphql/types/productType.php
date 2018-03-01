<?php
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

$productType = new ObjectType([
	'name' => 'product',
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
		'type' => [
			'type' => Type::string(),
			'resolve' => function($root) {
				$types = wp_get_post_terms( $root->ID, 'type');

				$typeParent = array_filter($types, function($type) {
					return $type->parent == 0;
				});

				$typeParent = array_values($typeParent);
				return print_r($typeParent); 
				return $typeParent[0]->name;
			}
		],
		'subtype' => [
			'type' => Type::string(),
			'resolve' => function($root) {
				$types = wp_get_post_terms( $root->ID, 'type');
				$typeChild = array_filter($types, function($type) {
					return $type->parent > 0;
				});

				$typeChild = array_values($typeChild);

				return $typeChild[0]->name;
			}
		],
		'features' => [
			'type' => Type::listOf(Type::string()),
			'resolve' => function($project) {
				return wp_get_post_terms( $project->ID, 'feature', array("fields" => "names"));
			}
		],
		'brands' => [
			'type' => Type::listOf(Type::string()),
			'resolve' => function($root) {
				return wp_get_post_terms( $project->ID, 'brand', array("fields" => "names"));
			}
		]
	]
]);

