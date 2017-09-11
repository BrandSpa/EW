<?php get_header(); ?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

<?php endwhile; else : ?>
  <p><?php _e( '401' ); ?></p>
<?php endif; ?>

<?php get_footer(); ?>
