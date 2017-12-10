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

      <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-lg-5">
          <section class="project-slider">
            <?php $slider = get_post_meta($post->ID, 'slider_key', tue)
              ? explode(',', get_post_meta($post->ID, 'slider_key', tue))
              : [];
            ?>
            <?php foreach($slider as $imageId): ?>
              <img src="<?php echo wp_get_attachment_url($imageId) ?>" alt="">
            <?php endforeach; ?>
          </section>
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

  .slick-prev {
    left: 30px;
    z-index: 1;
  }

  .slick-next {
    right: 30px;
    z-index: 1;
  }

  .slick-next::before {
    content: "\f125"
  }

  .slick-prev::before {
    content: "\f124"
  }

  .slick-next::before, .slick-prev::before {
    font-family: "Ionicons";
    font-size: 30px;
    color: #fff;

  }

</style>
<?php endwhile; else : ?>
  <p><?php _e( '401' ); ?></p>
<?php endif; ?>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
<script>
  $('.project-slider').slick({
    slidesToShow: 1,
    adaptiveHeight: true
  });
</script>
<?php get_footer(); ?>
