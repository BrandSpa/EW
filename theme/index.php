<?php get_header(); 

  $posts = get_posts([
    'post_type' => 'product',
    'post_status' => 'publish',
    'numberposts' => -1
    // 'order'    => 'ASC'
  ]);


  echo "<pre>";
  print_r($posts);
  echo "</pre>";

?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<div class="row">
  <div class="col-lg-1 col-md-1 col-sm-1"></div>
  <div class="col-lg-10 col-md-10 col-sm-10 content">
    <?php the_content() ?>
  </div>
  <div class="col-lg-1 col-md-1 col-sm-1"></div>
</div>
<?php endwhile; else : ?>
  <p><?php _e( '401' ); ?></p>
<?php endif; ?>
<style>
.separate_content, #colorsFinishes .colors{
	padding-left: 15px !important;
  padding-right: 15px !important;
}
.row{
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin-right: 0 !important;
}
@media and (max-width: 550px){
  #accesories{
    left: 0 !important;
  }
}

</style>

<?php get_footer(); ?>

