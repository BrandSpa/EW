<?php get_header(); ?>

<?php
	$title = $post->post_title;
	$content = $post->post_content;
	$slider = get_post_meta($post->ID, 'slider_key', tue);
  $slider = $slider ? explode(',', $slider) : [];
	$header = get_post_meta($post->ID, 'header_key', tue);
	$types = wp_get_post_terms( $post->ID, 'type');
	$brands = wp_get_post_terms( $post->ID, 'brand', ["fields" => "names"]);
	$typeParent = array_filter($types, function($type) {
		return $type->parent == 0;
	});

	$typeParent = array_values($typeParent);

	$typeChild = array_filter($types, function($type) {
		return $type->parent > 0;
	});
	$typeChild = array_values($typeChild);

	$systemDescription = get_post_meta($post->ID, 'systemDescription_key', true);
	$features = get_post_meta($post->ID, 'features_key', true);

?>

<section class="product">
	<header class="product__header" style="background-image: url(<?php echo wp_get_attachment_url($header) ?>)">
		<div class="row">
			<div class="col-sm-1"></div>
				<div class="col-sm-5">
					<span class="type"><?php echo $typeParent[0]->name ?></span>
					<h1><?php echo $title; ?></h1>
					<div class="line"></div>
					<span><h5>TYPE</h5> <?php echo $typeChild[0]->name ?></span>
					<div class="line"></div>
					<span><h5>BRAND</h5> <?php echo $brands[0] ?></span>
					</div>
				</div>
				<div class="col-sm-1"></div>
			</div>
	</header>

	<section class="product__content">
		<div class="row">
			<div class="col-sm-1"></div>
			<div class="col-sm-5">
				<div class="product__content-text">
					<p><?php echo $content; ?></p>
					<h5>FEATURES</h5>
				</div>
			</div>
			<div class="col-sm-5">
				<div class="product__content-slider-wrap">
					<div class="product__content-slider">
						<?php foreach($slider as $imageId): ?>
								<img src="<?php echo wp_get_attachment_url($imageId) ?>" alt="">
						<?php endforeach; ?>
					</div>
				</div>
			</div>
			<div class="col-sm-1"></div>
		</div>
	</section>

	<section class="product__perks">
	<div class="row">
		<div class="col-sm-1"></div>
		<div class="col-sm-10">
			<section>
				<h2>System Description</h2>
				<div class="list">
					<?php foreach($systemDescription as $sd): ?>
						<span><?php echo $sd ?></span>
					<?php endforeach; ?>
				</div>
			</section>
			<section>
				<h2>Features</h2>
				<div class="list">
					<?php foreach($features as $feature): ?>
						<span><?php echo $feature ?></span>
					<?php endforeach; ?>
				</div>
			</section>
		</div>
		<div class="col-sm-1"></div>
		</div>
	</section>
</section>
<style>
	.product__header {
		background-size: cover;
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: #fff;
		padding: 90px 0 40px 40px;
	}

	.product__header h1 {
		font-size: 40px;
		margin: 0;
	}

	.product__header .type {
		color: #039ed8;
		font-size: 19px;
	}

	.product__header span {
		display: flex;
		align-items: center;
	}

	.product__header span > h5 {
		font-size: 15px;
		color: #039ed8;
		margin-right: 20px;
	}

	.product__content-text {
		background: #F7FBFF;
		padding: 90px 40px;
	}

	.product__content-slider {
		box-shadow: 6px 15px 20px 0px rgba(0,0,0, .2);
		background: #FFFFFF;
		margin: 0;
	}

	.product__perks {
		margin-top: 90px
	}

	.product__perks section {
		border-bottom: 1px solid #039ED8;
		margin-bottom: 90px;
		padding-bottom: 40px;
		display: flex;
		flex-direction: column;
		padding-left: 40px
	}

	.product__perks section h2 {
		margin: 0
	}

	.product__perks section > .list {
		display: flex;
		flex-direction: column;
		margin: 40px 0 0 0;

	}

	.product__perks section > .list span {
		margin-bottom: 20px;
	}

	.slick-prev {
    left: 30px;
    z-index: 1;
		border: 1px solid #039ED8;
		width: 50px;
		height: 50px;
  }

  .slick-next {
    right: 30px;
    z-index: 1;
		border: 1px solid #039ED8;
		width: 50px;
		height: 50px;
  }

  .slick-next::before {
    content: "\f3d3";
  }

  .slick-prev::before {
    content: "\f3d2";
  }

  .slick-next::before, .slick-prev::before {
    font-family: "Ionicons";
    font-size: 30px;
    color: #039ED8;
  }

	@media (min-width: 1024px) {
		.product__header {
			height: 600px;
			align-items: initial;
		}

		.product__header h1 {
			font-size: 90px;
		}

		.product__content-slider-wrap {
			margin: -50% 0 0 -10%;
		}

		.product__perks section {
			flex-direction: row;
		}

		.product__perks section .list {
			margin: 0 0 0 40px;
		}


	}
</style>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
<script>
  $('.product__content-slider').slick({
    slidesToShow: 1,
    adaptiveHeight: true
  });
</script>
<?php get_footer(); ?>
