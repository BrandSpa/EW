<?php
use KHerGe\JSON\JSON;
use GraphQL\GraphQL;
use GraphQL\Type\Schema;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\InputObjectType;
use GraphQL\Type\Definition\Type;

//get wp enviroment
if ( ! defined('ABSPATH') ) {
	$parse_uri = explode( 'wp-content', $_SERVER['SCRIPT_FILENAME'] );
	require_once( $parse_uri[0] . 'wp-load.php' );
}

$postcontent = file_get_contents('php://input');
$postcontent = str_replace('\n', '', $postcontent);
$postcontent = json_decode($postcontent, true);
$lang = isset($postcontent['lang'])? $postcontent['lang']:'en';


require str_replace('graphql' , '', __DIR__) . '/vendor/autoload.php';

require 'types/projectType.php';
require 'types/productType.php';
require 'types/newsType.php';
require 'types/metaFilterType.php';
require 'types/taxonomyFilterType.php';
require 'queries/projectsQuery.php';
require 'queries/productsQuery.php';
require 'queries/newsQuery.php';

$rootQuery = new ObjectType([
	'name' => 'rootQuery',
	'fields' => [
		'projects' => $projectsQuery,
		'products' => $productsQuery,
		'news' => $newsQuery
	]
]);
$schema = new Schema([
	'query' => $rootQuery
]);

try {
	$rawInput = file_get_contents('php://input');
	$json = new JSON();
	$j = str_replace('\n', '', $rawInput) ;
	// var_dump($j);
	$input = json_decode($rawInput, true);
	// var_dump($input);
	$query = isset($input['query']) ? $input['query'] : '';
	$variableValues = isset($input['variables']) ? $input['variables'] : null;

	$rootValue = [];
	print_r($schema); exit;
	$result = GraphQL::executeQuery($schema, $query, $rootValue, null, $variableValues);
	$output = $result->toArray();

} catch (\Exception $e) {
	$output = [
			'errors' => [
					[
						'message' => $e->getMessage()
					]
			]
	];
}

header('Content-Type: application/json');
echo json_encode($output);

