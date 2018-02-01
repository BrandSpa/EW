<?php

function posts_carousel_sc( $atts ){
	$at = shortcode_atts([
		"post_per_page" => 6
	], $atts);


  $query = new Wp_Query(array(
    'post_type' => 'post',
		'posts_per_page' => $at['post_per_page'],
		'post_status' => 'publish'
	));

	$posts = array_map(function($post) {
		$post->date = get_post_meta($post->ID, 'day_key', true) . ' ' . gett(get_post_meta($post->ID, 'month_key', true)) . ', ' . get_post_meta($post->ID, 'year_key', true);
		$post->image = get_the_post_thumbnail_url($post->ID);
		$post->intro = get_post_meta($post->ID, 'intro_key', true);
		return $post;
	}, $query->get_posts());

	$props = [
		"posts" => $posts
	];

	ob_start();
	?>

  <section
		class="posts-container"
		data-props='<?php echo json_encode($props) ?>'
	></section>

	<?php
	return ob_get_clean();
}

add_shortcode( 'ew_posts_carousel', 'posts_carousel_sc' );