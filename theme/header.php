<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><?php echo get_bloginfo('name'); ?></title>

  <link href="https://fonts.googleapis.com/css?family=Yantramanav:400,700" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Arimo:400,700" rel="stylesheet">
  <link href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" />
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
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

    li {
      list-style: none;
    }

    a:hover {
      text-decoration: none;
    }

    p {
      font-family: 'Arimo', sans-serif;
    }

    .verticalLine {
      left: 15px;
			position: fixed;
			height: 100vh;
			width: 1px;
			border: solid 1px #039ed8;
      z-index: 99;
		}

    .line-responsive {
      margin-left: 40px;
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

<div class="verticalLine"></div>