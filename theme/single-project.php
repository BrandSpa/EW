<?php get_header(); ?>


<?php
  $title = $post->post_title;
  $country = get_post_meta($post->ID, 'country_key', tue);
  $city = get_post_meta($post->ID, 'city_key', tue);
  $state = get_post_meta($post->ID, 'state_key', tue);
  $header = get_post_meta($post->ID, 'header_key', tue);
  $slider = get_post_meta($post->ID, 'slider_key', tue);
  $slider = $slider ? explode(',', $slider) : [];
  $video = get_post_meta($post->ID, 'video_key', tue);
  $architect = get_post_meta($post->ID, 'architect_key', tue);
  $constructor = get_post_meta($post->ID, 'constructor_key', tue);
  $developer = get_post_meta($post->ID, 'developer_key', tue);
  $constructor = get_post_meta($post->ID, 'constructor_key', tue);
  $systems = get_post_meta($post->ID, 'systems_key', tue);
  $aluminum = get_post_meta($post->ID, 'aluminum_key', tue);
  $glass = get_post_meta($post->ID, 'glass_key', tue);
  $brands = wp_get_post_terms( $post->ID, 'brand', ["fields" => "names"]);
  $products = wp_get_post_terms( $post->ID, 'product', ["fields" => "names"]);
  $year = get_post_meta($post->ID, 'year_key', tue);
  $month = get_post_meta($post->ID, 'month_key', tue);
?>

<div class="project">
  <div class="project__header" style="background-image: url(<?php echo wp_get_attachment_url($header) ?>)">
    <div class="project__header-overlay"></div>
    <div class="row">
      <div class="col-sm-1"></div>
      <div class="col-sm-5">
      <h5 class="project-date"><?php echo gett($month) . ' / ' . $year  ?></h5>
      <h1><?php echo $title ?></h1>
      <span class="line"></span>
      <section class="project__location">
        <span><?php echo $country ?> ·</span>
        <span><?php echo $city ?> ·</span>
        <span><?php echo $state ?></span>
      </section>
      </div>
    </div>
  </div>

  <div class="project__content">

      <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-lg-5">
        <?php if(!empty($video)): ?>
          <video class="project-video" controls>
          <source src="<?php echo $video ?>" type="video/mp4">
           Your browser does not support HTML5 video.
          </video>
          <?php endif; ?>
          <section class="project-slider">
          <?php if(!empty($slider)): ?>
							<?php foreach($slider as $imageId): ?>
									<img src="<?php echo wp_get_attachment_url($imageId) ?>" alt="">
							<?php endforeach; ?>
						<?php endif; ?>
          </section>

        </div>
        <div class="col-lg-5">
        <?php if(is_array($architect) && count($architect) > 0): ?>
          <section class="project__section">
            <h4><?php echo gett('ARCHITECT') ?></h4>
            <?php foreach($architect as $item): ?>
              <span><?php echo $item ?></span>
            <?php endforeach; ?>
          </section>
          <?php endif; ?>

          <?php if(is_array($constructor) && count($constructor) > 0): ?>
          <section class="project__section">
            <h4><?php echo gett('constructor') ?></h4>
            <?php foreach($constructor as $item): ?>
              <span><?php echo $item ?></span>
            <?php endforeach; ?>
          </section>
          <?php endif; ?>

          <?php if(is_array($developer) && count($developer) > 0): ?>
          <section class="project__section">
            <h4><?php echo gett('developer') ?></h4>
            <?php foreach($developer as $item): ?>
              <span><?php echo $item ?></span>
            <?php endforeach; ?>
          </section>
          <?php endif; ?>

          <?php if(is_array($systems) && count($systems) > 0): ?>
          <section class="project__section">
            <h4><?php echo gett('systems') ?></h4>
            <?php foreach($systems as $item): ?>
              <span><?php echo $item ?></span>
            <?php endforeach; ?>
          </section>
          <?php endif; ?>

          <?php if(is_array($aluminum) && count($aluminum) > 0): ?>
          <section class="project__section">
            <h4><?php echo gett('aluminum') ?></h4>
            <?php foreach($aluminum as $item): ?>
              <span><?php echo $item ?></span>
            <?php endforeach; ?>
          </section>
          <?php endif; ?>

          <?php if(is_array($glass) && count($glass) > 0): ?>
          <section class="project__section">
            <h4><?php echo gett('glass') ?></h4>
            <?php foreach($glass as $item): ?>
              <span><?php echo $item ?></span>
            <?php endforeach; ?>
          </section>
          <?php endif; ?>

          <section class="project__section project__product-brands">
          <?php if(is_array($brands) && count($brands) > 0): ?>
            <section class="project__brands">
                <h4><?php echo gett('BRANDS') ?></h4>
                <?php foreach($brands as $brand): ?>
                  <span><?php echo $brand ?></span>
                <?php endforeach; ?>
              </section>
              <?php endif; ?>

              <?php if(is_array($products) && count($products) > 0): ?>
                <section class="project__products">
                  <h4><?php echo gett('PRODUCTS') ?></h4>
                  <?php foreach($products as $product): ?>
                    <span><?php echo $product ?></span>
                  <?php endforeach; ?>
                </sction>
              <?php enedif; ?>
          </section>

        </div>
        <div class="col-lg-1"></div>
      </div>
    </div>
</div>
<section class="projects-section">
  <div class="col-md-1"></div>
  <div class="col-md-10">
  <?php echo do_shortcode('[ew_projects]'); ?>
  </div>
  <div class="col-md-1"></div>
</section>

<style>

  .projects-section {
    padding: 90px 0;
    display: flex;
    width: 100%;
    background: #F6FBFF;
  }

  .project-date {
    font-size: 20px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 34px;
  }

  .line {
    width: 60px;
    height: 1px;
    margin: 30px 0;
    border: solid 1px #039ed8;
  }
  .project {
    width: 100%;
  }

  .project h4 {
    font-size: 15px;
    color: #039ED8;
    text-transform: uppercase;
  }

  .project__header {
    width: 100%;
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    position: relative;
  }

  .project__header-overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, .4);
  }

  .project__header h1 {
    font-family: 'Yantramanav';
    display: block;
    font-size: 40px;
  }

  .project__header span {
    display: block;
  }

  .project__location {
    display: flex;
  }

  .project__location span {
    margin-right: 5px;
    font-size: 24px;
    color: #FFFFFF;
    line-height: 37px;
  }

  .project__content {
    margin: 160px 0;
  }

  .project__section {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #039ED8;
    /* padding-bottom: 20px; */
    margin-bottom: 20px;
  }

  .project__section span {
    display: block;
    margin-bottom: 20px;
  }

  .project__product-brands {
    display: flex;
    flex-direction: row;
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
    /* padding-bottom: 20px; */
  }

  .project__brands span {
    /* padding-bottom: 20px; */
  }

  .project-video {
    width: 100%;
    margin-bottom: 80px;
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
    content: "\f3d3"
  }

  .slick-prev::before {
    content: "\f3d2"
  }

  .slick-next::before, .slick-prev::before {
    font-family: "Ionicons";
    font-size: 40px;
    color: #fff;
  }

  @media (min-width: 1024px) {
    .project__header h1 {
      font-size: 90px
    }
  }
</style>

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
