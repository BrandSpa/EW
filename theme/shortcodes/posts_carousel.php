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
		$date = date_create($post->post_date);
		$dateDay = date_format($date ,"m");
		$dateMonth = date_format($date ,"F");
		$dateYear = date_format($date ,"Y");
		$post->date =  $dateDay .' '. gett($dateMonth) . ', '. $dateYear;
		$post->image = get_the_post_thumbnail_url($post->ID);
		$post->intro = esc_attr(get_post_meta($post->ID, 'intro_key', true));
		$post->post_content = "";
		$post->post_title = esc_textarea($post->post_title);
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