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


function category_position_add() {
	?>
	<div class="form-field">
		<label for="position">Position</label>
		<input type="text" name="term_meta[position]" id="position">
	</div>
<?php
}

add_action( 'type_add_form_fields', 'category_position_add', 10, 2 );


function category_position_edit( $term ) {
	$termid = $term->term_id;
	$term_meta = get_option( "taxonomy_" . $termid );
	var_dump( $term_meta);
	?>
	<div class="form-field">
		<label for="position">Position</label>
		<input type="text" name="term_meta[position]"  value="<?php echo $term_meta['position'] ?>">
	</div>
<?php
}

add_action( 'type_edit_form_fields', 'category_position_edit', 10, 2 );


function save_taxonomy_custom_meta( $term_id ) {

	if ( isset( $_POST['term_meta'] ) ) {
		$t_id = $term_id;
		$term_meta = get_option( "taxonomy_$t_id" );
		$cat_keys = array_keys( $_POST['term_meta'] );
		foreach ( $cat_keys as $key ) {
			if ( isset ( $_POST['term_meta'][$key] ) ) {
				$term_meta[$key] = $_POST['term_meta'][$key];
			}
		}
		// Save the option array.
		update_option( "taxonomy_" . $t_id, $term_meta );
	}
}
add_action( 'edited_category', 'save_taxonomy_custom_meta', 10, 2 );
add_action( 'create_category', 'save_taxonomy_custom_meta', 10, 2 );


