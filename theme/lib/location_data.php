<?php
function locationData() {
	$countries = [
    'Aruba' => [

    ],
    'Colombia' => [
      'Antioquia',
      'Atlántico',
      'Bolívar',
      'Cundinamarca',
      'Magdalena',
      'Cordoba',
      'Valle del Cauca'
    ],
    'Panamá' => [

    ],
    'USA' => [
      'Florida',
      'Maryland',
      'New Jersey',
      'New York',
      'Ohio',
      'Pennsylvania',
      'Tennessee',
      'Texas',
      'Virginia',
      'Washington'

    ]
  ];

  $states = [
    'Arizona' => [
      'Phoenix'

    ],
    'California' => [
      'Hollywood'
    ],
    'Florida' => [
      'Bay harbor Islands',
      'Boyton Beach',
      'Fort lauderdale',
      'Hallandale Beach',
      'Key Biscayne',
      'Miami',
      'Orlando',
      'Sunny Isles Beach',
      'West Palm Beach'
    ],
    'Maryland' => [
      'Baltimore'
    ],
    'New Jersey' => [
      'Fort Lee'
    ],
    'New York' => [
      'New york'
    ],
    'Ohio' => [
      'Akron',
      'Cleveland',
      'Columbus'
    ],
    'Pennsylvania' => [
      'Philadelphia'
    ],
    'Tennessee' => [
      'Nashville'
    ],
    'Texas' => [
      'Dallas',
      'Galveston',
      'Houston'
    ],
    'Virginia' => [
      'McLean'
    ],
    'Washington' => [
      'Washington'
    ],
    'Antioquia' => [
      'Medellín'
    ],
    'Atlántico' => [
      'Barranquilla',
    ],
    'Bolívar' => [
      'Cartagena'

    ],
    'Cundinamarca' => [
      'Bogotá'

    ],
    'Magdalena' => [
      'Santa Marta'

    ],
    'Cordoba' => [
      'Montería'

    ],
    'Valle del Cauca' => [
      'Cali',
      'Buenaventura'

    ]
  ];

  $cities = [
    'Washington',
    'Akron',
    'Arraijan',
    'Baltimore',
    'Bay harbor Islands',
    'Boyton Beach',
    'Cleveland',
    'Columbus',
    'Dallas',
    'Fort lauderdale',
    'Fort Lee',
    'Galveston',
    'Hallandale Beach',
    'Hollywood',
    'Houston',
    'Key Biscayne',
    'McLean',
    'Miami',
    'Nashville',
    'New york',
    'Orlando',
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
	// sort($countries);
	// sort($states);
	// sort($cities);

	return [
		'countries' => $countries,
		'states' => $states,
		'cities' => $cities
	];
}
