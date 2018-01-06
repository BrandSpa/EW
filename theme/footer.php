
<section class="footer">
  <div class="col-lg-1"></div>
  <div class="col-lg-5 col-xs-10">
    <?php wp_nav_menu(['name' => 'header', 'menu_id' => 'menu-footer']); ?>
  </div>
  <div class="col-lg-5 col-xs-10 footer-contact">
        <h4>CONTACT US</h4>
        <?php echo do_shortcode('[ew_contact_us]') ?>
  </div>
  <div class="col-xs-1 col-sm-1"></div>
</section>

<section class="footer-bottom">
  <div class="col-lg-1"></div>
  <div class="col-lg-10">
    <div class="footer-bottom__content">
      <div class="footer-bottom__content-left">

        <section>
          <img src="<?php echo get_template_directory_uri() ?>/public/img/eswlogo.svg" />
          <span>The Power of Quality</span>
        </section>
      </div>
      <div class="footer-bottom__content-right">
        <img src="<?php echo get_template_directory_uri() ?>/public/img/alutions.png" alt="">
        <img src="<?php echo get_template_directory_uri() ?>/public/img/technoglass.png" alt="">

      </div>
    </div>
  </div>
  <div class="col-lg-1"></div>
</section>

<style>
  .footer {
    position: relative;
    width: 100%;
    background: #1f1f1f;
    padding-top: 150px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
  }

  .footer-contact {
    margin: 0 auto;
  }

  #menu-footer {
    display: flex;
    flex-wrap: wrap;
  }

  #menu-footer > li {
    margin: 0 80px 40px 0;
  }

  #menu-footer > li > a {
    display: block;
    font-size: 15px;
    color: #fff;
    margin-bottom: 40px;
  }

  #menu-footer > li ul {
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  #menu-footer > li ul li a {
    display: block;
    font-size: 15px;
    color:  #039ED8;
    padding-bottom: 7px;
    margin-bottom: 5px;
    border-bottom: 1px solid  #039ED8;
  }

  .footer h4 {
    color: #fff;
    margin: 2px 0 40px 0;
    font-size: 15px;
  }

  .footer-bottom__content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    border-top: 1px solid #039ED8;
    padding: 60px 0;
    background: #1f1f1f;
  }

  .footer-bottom__content-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  }

  .footer-bottom__content-left section {
    display: flex;
    align-items: center;
  }

  .footer-bottom__content-left img {
    width: 200px;
  }

  .footer-bottom__content-left span {
    font-size: 15px;
    color: #039ED8;
  }

  .footer-bottom__content-left img {
    margin: 0 10px;
  }

  .footer-bottom__content-right {
    display: flex;
    flex-direction: column;
  }

  .footer-bottom__content-right img {
    display: block;
    margin: 20px auto;
    max-width: 145px;
  }

  .footer-bottom {
    float: left;
    width: 100%;
    background: #1f1f1f;
  }

  @media (min-width: 1024px) {
    .footer {
      flex-direction: row;
    }

    .footer-bottom__content {
      flex-direction: row;
    }

    .footer-bottom__content-left {
      flex-direction: row;
      align-items: flex-start;
    }

    .footer-bottom__content-right {
      flex-direction: row;
    }

    .footer-bottom__content-right img  {
      margin-right: 40px;
    }

  }
</style>
<script>
  window.templateUri = '<?php echo get_template_directory_uri() ?>';
</script>

<script
  src="<?php echo get_template_directory_uri() ?>/public/js/vendor.js?v=<?php echo filemtime(get_template_directory() . '/public/js/vendor.js') ?>"></script>
<script
  src="<?php echo get_template_directory_uri() ?>/public/js/app.js?v=<?php echo filemtime(get_template_directory() . '/public/js/app.js') ?>"></script>

<!--wordpress files-->
  <?php wp_footer() ?>
<!-- /wordpress files-->

</body>
</html>
