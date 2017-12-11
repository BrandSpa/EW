<?php get_header(); ?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

<?php
  $country = get_post_meta($post->ID, 'country_key', tue);
  $city = get_post_meta($post->ID, 'city_key', tue);
  $state = get_post_meta($post->ID, 'state_key', tue);
  $slider = get_post_meta($post->ID, 'slider_key', tue);
  $architect = get_post_meta($post->ID, 'architect_key', tue);
  $constructor = get_post_meta($post->ID, 'constructor_key', tue);
  $brands = wp_get_post_terms( $post->ID, 'brand', array("fields" => "names"));
  $products = wp_get_post_terms( $post->ID, 'product', array("fields" => "names"));
?>

<div class="project">
  <div class="project__header" style="background-image: url(<?php echo wp_get_attachment_url(get_post_meta($post->ID, 'header_key', tue)) ?>)">
    <div class="row">
      <div class="col-sm-1"></div>
      <div class="col-sm-5">
      <h1><?php echo $post->post_title ?></h1>
        <span><?php echo $country ?></span>
        <span><?php echo $city ?></span>
        <span><?php echo $state ?></span>
      </div>
    </div>
  </div>

  <div class="project__content">

      <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-lg-5">
          <section class="project-slider">
            <?php
              $slider = $slider ? explode(',', $slider) : [];
            ?>
            <?php foreach($slider as $imageId): ?>
              <img src="<?php echo wp_get_attachment_url($imageId) ?>" alt="">
            <?php endforeach; ?>
          </section>
        </div>
        <div class="col-lg-5">
        <?php if(is_array($architect) && count($architect) > 0): ?>
          <section class="project__section">
            <h4>ARCHITECT</h4>
            <?php foreach($architect as $arch): ?>
              <span><?php echo $arch ?></span>
            <?php endforeach; ?>
          </section>
          <?php endif; ?>

          <section class="project__section project__product-brands">
          <?php if(is_array($brands) && count($brands) > 0): ?>
            <section class="project__brands">
                <h4>BRANDS</h4>
                <?php foreach($brands as $brand): ?>
                  <span><?php echo $brand ?></span>
                <?php endforeach; ?>
              </section>
              <?php endif; ?>

              <?php if(is_array($products) && count($products) > 0): ?>
                <section class="project__products">
                  <h4>PRODUCTS</h4>
                  <?php foreach($products as $product): ?>
                    <span><?php echo $product ?></span>
                  <?php endforeach; ?>
                </section>
              <?php endif; ?>
          </section>

        </div>
        <div class="col-lg-1"></div>
      </div>
    </div>
</div>

<style>
  .project {
    width: 100%;
  }

  .project h4 {
    font-size: 15px;
    color: #039ED8;
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

  .project__content {
    margin: 160px 0;
  }

  .project__section {
    border-bottom: 1px solid #039ED8;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }

  .project__product-brands {
    display: flex;
    align-items: space-between;
  }

  .project__products {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .project__brands {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .project__products span {
    padding-bottom: 20px;
  }

  .project__brands span {
    padding-bottom: 20px;
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
