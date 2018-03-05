<?php
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\InputObjectType;
use GraphQL\Type\Definition\Type;
$root = str_replace('queries' , '', __DIR__);

//print_r($lang); exit();

$productsQuery = [
	'type' => Type::listOf($productType),
	'args' => array(
		'post_type'  => array(
			'defaultValue' => 'product'
		),
		'posts_per_page' => array(
			'type' => Type::int()
		),
		'paged' => array(
			'type' => Type::int(),
			'defaultValue' => 1
		),
		'meta_query' => array(
			'type' => Type::listOf($metaFilter),
		),
		'tax_query' => array(
			'type' => Type::listOf($taxonomyFilter),
		),
		'tax_relation' => array(
			'defaultValue' => 'AND'
		),
		'lang' => array(
			'defaultValue' => $lang
		),
	),
	'resolve' => function($root, $args) {
		if(count($args['tax_query']) > 1) {
			$tax_relation = ['relation' => $args['tax_relation']];
			$tax_query = array_merge($args['tax_query'], $tax_relation);
			
			$args['tax_query'] = $tax_query;
		}
		
		error_log(print_r($args));

		$query = new WP_Query($args);
		error_log(print_r($query->request));
		$posts = $query->get_posts();
		error_log(print_r($posts));
		return $posts ;
	}
];
