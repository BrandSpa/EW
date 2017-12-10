<?php get_header(); ?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<div class="project">
  <div class="project__header" style="background-image: url(<?php echo wp_get_attachment_url(get_post_meta($post->ID, 'header_key', tue)) ?>)">
    <div class="row">
      <div class="col-sm-1"></div>
      <div class="col-sm-5">
      <h1><?php echo $post->post_title ?></h1>
        <span><?php echo get_post_meta($post->ID, 'country_key', tue); ?></span>
        <span><?php echo get_post_meta($post->ID, 'city_key', tue); ?></span>
        <span><?php echo get_post_meta($post->ID, 'state_key', tue); ?></span>
      </div>
    </div>
  </div>

  <div class="project__content">
    <div class="container">
      <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-lg-5">

        </div>
        <div class="col-lg-5">
          <?php $products = wp_get_post_terms( $post->ID, 'product', array("fields" => "names")) ?>
          <h4>Products</h4>
          <?php foreach($products as $product): ?>
            <span><?php echo $product ?></span>
          <?php endforeach; ?>

          <?php $brands = wp_get_post_terms( $post->ID, 'brand', array("fields" => "names")) ?>
          <h4>Brands</h4>
          <?php foreach($brands as $brand): ?>
            <span><?php echo $brand ?></span>
          <?php endforeach; ?>
        </div>
        <div class="col-lg-1"></div>
      </div>
    </div>

  </div>

</div>

<style>
  .project {
    width: 100%;
  }

  .project__header {
    width: 100%;
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #fff;
  }

  .project__header h1 {
    display: block;
  }

  .project__header span {
    display: block;
  }
</style>
<?php endwhile; else : ?>
  <p><?php _e( '401' ); ?></p>
<?php endif; ?>

<?php get_footer(); ?>
