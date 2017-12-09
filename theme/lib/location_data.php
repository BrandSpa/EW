<?php
function locationData() {
	$countries = [
		'Aruba',
		'Colombia',
		'Panamá',
		'USA'
	];
	
	$states = [
		'Florida',
		'Maryland',
		'New Jersey',
		'New York',
		'Ohio',
		'Pennsylvania',
		'Tennessee',
		'Texas',
		'Virginia',
		'Washington',
		'Antioquia',
		'Atlántico',
		'Bolívar',
		'Cundinamarca',
		'Magdalena',
		'Cordoba',
		'Valle del Cauca'
	];
	
	$cities = [
		'Washington',
		'Akron',
		'Arraijan',
		'Aruba',
		'Baltimore',
		'Bay harbor Islands',
		'Boyton Beach',
		'Ciudad de panamá',
		'Cleveland',
		'Columbus',
		'Dallas',
		'Fort lauderdale',
		'Fort Lee',
		'Galveston',
		'Hallandale Beach',
		'Hollywood',
		'Houston',
		'Key Biscane',
		'McLean',
		'Miami',
		'Nashville',
		'New york',
		'Orlando',
		'Panamá',
		'Philadelphia',
		'Phoenix',
		'Sunny Isles Beach',
		'West Palm Beach',
		'Medellín',
		'Barranquilla',
		'Cartagena',
		'Bogotá',
		'Santa Marta',
		'Montería',
		'Cali',
		'Ciudad de Panamá',
		'Buenaventura',
		'Panamá Pacífico'
	];
	sort($countries);
	sort($states);
	sort($cities);
	return [
		'countries' => $countries,
		'states' => $states,
		'cities' => $cities
	];
}
