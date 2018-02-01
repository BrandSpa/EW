<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="description" content="">
  <!-- facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://example.com/page.html">
  <meta property="og:title" content="">
  <meta property="og:image" content="">
  <meta property="og:description" content="">
  <meta property="og:site_name" content="<?php echo get_bloginfo('name'); ?>">

  <!-- twitter -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@site_account">
  <meta name="twitter:creator" content="@individual_account">
  <meta name="twitter:url" content="https://example.com/page.html">
  <meta name="twitter:title" content="<?php echo get_bloginfo('name'); ?>">
  <meta name="twitter:description" content="Content description less than 200 characters">

  <title><?php echo get_bloginfo('name'); ?></title>

  <link href="https://fonts.googleapis.com/css?family=Yantramanav:400,700" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Arimo:400,700" rel="stylesheet">
  <link href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" />
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css"/>
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"/>
  <!--wordpress files-->
    <?php wp_head() ?>
  <!-- /wordpress files-->
  <style>
    * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    body {
      font-family: 'Arimo', sans-serif;
      font-size: 14px;
      color: #5D5D5D;
      overflow-x: hidden;
    }

    .menu-open {
      overflow: hidden;
    }

    li {
      list-style: none;
    }

    button {
      outline: none;
    }

    a:hover {
      outline: none;
      text-decoration: none;
    }

    p {
      font-family: 'Arimo', sans-serif;
    }

    .verticalLine {
      /* left: 15px;
			position: fixed;
			height: 100vh;
			width: 1px;
			border: solid 1px #039ed8;
      z-index: 99; */
		}

    .line-responsive {
      margin-left: 40px;
    }

    .line {
      width: 60px;
      height: 1px;
      margin: 30px 0;
      border: solid 1px #039ed8;
    }

    @media (min-width: 1024px) {
      .verticalLine {
        left: 70px;
      }

      .line-responsive {
      margin-left: 120px;
      }

    }

  </style>
</head>
<body>
<?php
  $props = ["menu" => menu_to_array('header')];
?>

<section class="header-container" data-props='<?php echo wp_json_encode($props) ?>'></section>
