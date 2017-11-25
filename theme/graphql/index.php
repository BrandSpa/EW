<?php
require str_replace('graphql' , '', __DIR__) . '/vendor/autoload.php';

use GraphQL\GraphQL;
use GraphQL\Type\Schema;
require 'types/test.php';

$rawInput = file_get_contents('php://input');
$input = json_decode($rawInput, true);
$query = $input['query'];
$variableValues = isset($input['variables']) ? $input['variables'] : null;

$schema = new Schema([
	'query' => $testType
]);

try {
	$rootValue = ['prefix' => 'You said: '];
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

