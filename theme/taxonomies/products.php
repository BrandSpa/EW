<?php

function products_taxononies() {
	$typeArgs = [
		'hierarchical' => true,
		'label' => 'Types',
		'show_ui' => true,
		'show_admin_column' => true,
		'query_var' => true,
		'rewrite' => ['slug' => 'types']
	];

	$featureArgs = [
		'hierarchical' => true,
		'label' => 'Features',
		'show_ui' => true,
		'show_admin_column' => true,
		'query_var' => true,
		'rewrite' => ['slug' => 'features']
	];

	$brandArgs = [
		'hierarchical' => true,
		'label' => 'Brands',
		'show_ui' => true,
		'show_admin_column' => true,
		'query_var' => true,
		'rewrite' => ['slug' => 'brand']
	];

	register_taxonomy( 'type', ['product'], $typeArgs );
	register_taxonomy( 'feature', ['product'], $featureArgs );
	register_taxonomy( 'brand', ['product'], $brandArgs );
}

add_action('init', 'products_taxononies');


function category_position_add( $term ) {
	?>
	<div class="form-field">
		<label for="taxImage">Position</label>
		<input type="text" name="taxImage" id="taxImage" value="">
	</div>
<?php
}

add_action( 'types_add_form_fields', 'category_position_add', 10, 2 );