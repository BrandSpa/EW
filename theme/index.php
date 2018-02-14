<?php get_header(); ?>

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

<?php get_footer(); ?>
