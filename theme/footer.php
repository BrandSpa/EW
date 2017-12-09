
<section class="footer">
<div class="container">
  <div class="row">
    <div class="col-lg-6"></div>
    <div class="col-lg-6">
    <h4>CONTACT US</h4>
    <?php echo do_shortcode('[ew_contact_us]') ?>
    </div>
  </div>
</div>

</section>

<style>
.footer {
  position: relative;
  z-index: 100;
  width: 100%;
  background: #000;
  padding-top: 150px;
  padding-bottom: 50px;
}

.footer h4 {
  color: #fff;
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
