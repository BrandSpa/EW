
<section class="footer">
  <div class="col-lg-1"></div>
  <div class="col-lg-5 col-xs-10">
    <?php wp_nav_menu(['name' => 'header']); ?>
  </div>
  <div class="col-lg-5 col-xs-10">
        <h4>CONTACT US</h4>
        <?php echo do_shortcode('[ew_contact_us]') ?>
  </div>
  <div class="col-xs-1 col-sm-1"></div>
</section>

<section class="footer-bottom">

<div class="col-lg-10 border-top"></div>
<div class="col-lg-1"></div>
</section>

<style>
  .footer {
    position: relative;
    width: 100%;
    background: #000;
    padding-top: 150px;
    padding-bottom: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  #menu-main {
    display: flex;
    flex-wrap: wrap;
  }

  #menu-main > li {
    margin: 0 40px 40px 0;
  }

  #menu-main > li > a {
    display: block;
    font-size: 15px;
    color: #fff;
    margin-bottom: 40px;
  }

  #menu-main > li ul {
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  #menu-main > li ul li a {
    display: block;
    font-size: 15px;
    color:  #039ED8;
    padding-bottom: 7px;
    margin-bottom: 5px;
    border-bottom: 1px solid  #039ED8;
  }

  .footer h4 {
    color: #fff;
  }

  .border-top {
    border-top: 1px solid blue;
  }

  @media (min-width: 1024px) {
    .footer {
      flex-direction: row;
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
