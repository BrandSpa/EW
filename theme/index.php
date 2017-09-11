<?php get_header(); ?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<div class="container-fluid">
  <?php
    $props = [
      "brandsOptions" => [
  			"prestige",
  			"elite",
  			"alessia",
  			"eli"
  		],
  		"productsOptions" => [
  			"windows",
  			"window walls",
  			"doors",
  			"curtain wall",
  			"store front",
  			"railings",
  			"interiors"
  		]
    ];
  ?>
  <div class="projects-container" data-props='<?php echo json_encode($props) ?>'></div>
</div>

<?php endwhile; else : ?>
  <p><?php _e( '401' ); ?></p>
<?php endif; ?>

<?php get_footer(); ?>
