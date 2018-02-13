<?php
$current_url = str_replace('//', 'https://', esc_url($_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']));
?>

<div id="backtotop">
    <svg width="50px" height="50px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Group" stroke="#039ED8" stroke-width="2">
                <polyline id="Path" points="10 31.1794085 24.9035512 17.1794085 40 31.1794085"></polyline>
                <rect id="Rectangle" x="1" y="1" width="48" height="48"></rect>
            </g>
        </g>
    </svg>
</div>
<section class="footer">
  <div class="container-fliud">
  <div class="col-xs-12">
    <div class="col-md-4">
      <?php wp_nav_menu(['name' => 'footer_left', 'menu_id' => 'menu-footer', "theme_location" => "footer_left"]); ?>
    </div>
    <div class="col-md-3">
      <?php wp_nav_menu(['name' => 'footer_right', 'menu_id' => 'menu-footer', "theme_location" => "footer_right"]); ?>
    </div>
    <div class="col-md-5">
      <section class="text-right es_footer_logo">
        <img src="<?php echo get_template_directory_uri() ?>/public/img/eswlogo.svg" />
        <p>The Power of Quality</p>
      </section>

      <section class="footer_social_logos">
        <a class="social-icon" href="https://www.instagram.com/eswenergiasolar/" target="_blank" rel="noopener">
		      <i class="ion-social-instagram"></i>
        </a>
        <a class="social-icon" href="https://twitter.com/ESWindows" target="_blank" rel="noopener">
		      <i class="ion-social-twitter"></i>
        </a>
      </section>

      <div class="footer-bottom__content-right">
        <a href="https://www.tecnoglass.com" target="_blank"><img src="<?php echo get_template_directory_uri() ?>/public/img/logo-tgls-color.svg" alt=""></a>
        <a href="http://alutions.co" target="_blank"><img style="height:40px" src="<?php echo get_template_directory_uri() ?>/public/img/logo-alutions.svg" alt=""></a>
      </div>
    </div>
  </div>
  
    <div class="col-xs-1 col-sm-1"></div>
  </div>
  
</section>
<div class="branding-logo">
    <a href="https://brandspa.com" target="_blank"><img src="<?php echo get_template_directory_uri() ?>/public/img/gota-bs.svg" alt="The Brandspa Agencia Digital"></a>
</div>

<style>
  #backtotop{
    position: fixed;
    bottom: 5%;
    right: 5%;
    display: none;
    cursor: pointer;
    z-index: 10;
  }
  #backtotop img{
    width:50px;
  }
  .footer {
    position: relative;
    width: 100%;
    background: #1f1f1f;
    padding-top: 50px;
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
    margin: 20px auto;
    width: 100%;
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

  .social-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		border-radius: 40px;
		background: #fff;
    margin: 0 20px 20px 0;
	}

	.social-icon i {
		font-size: 27px;
		color: #5D5D5D;
	}

  .branding-logo{
      display: flex;
      background: #1f1f1f;
      width: 100%;
      align-items: flex-start;
      /* text-align: right; */
      flex-direction: row-reverse;
      padding:15px;
    }

    .branding-logo img{
      width:20px;
    }

    .es_footer_logo img{
      width: 200px;
      margin:0;padding:0;
    }
    .es_footer_logo p{
      color: #fff;
    }

    .footer_social_logos{
      text-align: right;
      display: flex;
      align-items: flex-end;
      flex-direction: row-reverse;
    }

    .footer_social_logos a {
      
    }

  @media (min-width: 1024px) {
    .footer {
      flex-direction: row;
      padding-top: 75px;
    }

    .footer-bottom__content {
      flex-direction: row;
    }

    .footer-bottom__content-left {
      flex-direction: row;
      align-items: flex-start;
    }

    .footer-bottom__content-right {
      flex-direction: row-reverse;
      margin-top: 30px;
      border-top: 1px solid #039ED8;
    }

    .footer-bottom__content-right img  {
      margin-left: 40px;
    }

    .social-icon  {
      margin: 0;
      margin-left: 10px;
    }

    #menu-footer {
      justify-content: space-between;
    }

    #menu-footer > li {
      margin: 0;
      width: auto;
      min-width: 150px;
    }

    .menu-footer-right-container ul li{
      margin: 0 !important;
      width: 100% !important;
      display:block;
    }
    .menu-footer-right-container ul li a{
      margin-bottom: 15px !important;
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
