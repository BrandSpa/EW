<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><?php echo get_bloginfo('name'); ?></title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
  <!--wordpress files-->
    <?php wp_head() ?>
  <!-- /wordpress files-->

</head>
<body>
<?php 
  $props = ["menu" => menu_to_array('header')];
?>

<section class="header-container" data-props='<?php echo wp_json_encode($props) ?>'></section>