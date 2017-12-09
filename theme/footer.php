
<?php 
  $props = ["menu" => menu_to_array('footer')];
?>

<div class="footer-container" data-props='<?php echo wp_json_encode($props) ?>'></div>

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

<script>
    document.write('<script src="http://' + (location.host || '${1:localhost}').split(':')[0] + ':8080/livereload.js?snipver=1"></' + 'script>')
</script>
</body>
</html>
