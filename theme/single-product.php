<?php get_header(); ?>

<?php
	$uri = get_template_directory_uri();
	$title = $post->post_title;
	$content = $post->post_content;
	$slider = get_post_meta($post->ID, 'slider_key', true);
  	$slider = $slider ? explode(',', $slider) : [];
	$header = get_post_meta($post->ID, 'header_key', true);
	$types = wp_get_post_terms( $post->ID, 'type');
	$featuresTerm = wp_get_post_terms( $post->ID, 'feature');
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
	$titleBlueprints = get_post_meta($post->ID, 'titleBlueprints_key', true);
	$pdfBlueprints = get_post_meta($post->ID, 'pdfBlueprints_key', true);
	$titleInstallationGuide = get_post_meta($post->ID, 'titleInstallationGuide_key', true);
	$pdfInstallationGuide = get_post_meta($post->ID, 'pdfInstallationGuide_key', true);
	$titleEliteBrandBrochure1 = get_post_meta($post->ID, 'titleEliteBrandBrochure1_key', true);
	$pdfEliteBrandBrochure1 = get_post_meta($post->ID, 'pdfEliteBrandBrochure1_key', true);
	$titleEliteBrandBrochure2 = get_post_meta($post->ID, 'titleEliteBrandBrochure2_key', true);
	$pdfEliteBrandBrochure2 = get_post_meta($post->ID, 'pdfEliteBrandBrochure2_key', true);
	$productTerm = get_term_by('name', strtolower($typeParent[0]->name), 'product');
?>

<section class="product">
	<header class="product__header" style="background-image: url(<?php echo wp_get_attachment_url($header) ?>)">
		<div class="row">
			<div class="col-sm-1"></div>
				<div class="col-sm-5">
					<span class="type"><?php echo $typeParent[0]->name ?></span>
					<h1><?php echo $title; ?></h1>
					<div class="line"></div>
					<span><h5><?php echo gett('TYPE') ?></h5> <?php echo $typeChild[0]->name ?></span>
					<div class="line"></div>
					<span><h5><?php echo gett('BRAND') ?></h5> <?php echo $brands[0] ?></span>
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
					<div class="product__content-features">
						<h5><?php echo gett('FEATURES') ?></h5>
						<?php if(!empty($featuresTerm)): ?>
							<?php foreach($featuresTerm as $feature): ?>
							<span>
								<img src="<?php echo $uri ?>/public/img/<?php echo str_replace(' ', '_', strtolower($feature->name)) ?>.svg" alt="<?php echo $feature->name ?>"> <?php echo $feature->name ?></span>
							<?php endforeach; ?>
						<?php endif; ?>
					</div>
				</div>
			</div>
			<div class="col-sm-5">
				<div class="product__content-slider-wrap">
					<div class="product__content-slider">
						<?php if(!empty($slider)): ?>
							<?php foreach($slider as $imageId): ?>
								<div>
									<img src="<?php echo wp_get_attachment_url($imageId) ?>" style="width: 100%">
								</div>
							<?php endforeach; ?>
						<?php endif; ?>
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
			<?php if(!empty($systemDescription)): ?>
			<section>
				<div class="row">
					<div class="col-md-3">
						<h4><?php echo gett('System Description') ?></h4>
					</div>
					<div class="col-md-9">
						<div class="list">
							<?php foreach($systemDescription as $sd): ?>
								<span><?php echo $sd ?></span>
							<?php endforeach; ?>
						</div>
					</div>
				</div>
			</section>
			<?php endif; ?>

			<?php if(!empty($features)): ?>
			<section>
				<div class="row">
					<div class="col-md-3">
						<h4><?php echo gett('Features') ?></h4>
					</div>
					<div class="col-md-9">
						<div class="list">
							<?php foreach($features as $feature): ?>
								<span><?php echo $feature ?></span>
							<?php endforeach; ?>
						</div>
					</div>
				</div>
			</section>
			<?php endif; ?>

			<?php if(!empty($pdfBlueprints) || !empty($pdfInstallationGuide) || !empty($pdfEliteBrandBrochure1) || !empty($pdfEliteBrandBrochure2)): ?>
			<section class="downloads">
				<div class="row">
				<div class="col-md-3">
					<h4><?php echo gett('Related Downloads') ?></h4>
				</div>
				<div class="col-md-9">
					<div class="downloads__links">
						<?php if(!empty($pdfBlueprints)): ?>
						<a target="_blank" href="<?php echo $pdfBlueprints ?>" class="show_terms">
							<img src="<?php echo $uri ?>/public/img/blueprints.svg" alt="">
							<span><?php echo gett($titleBlueprints); ?></span>
						</a>
						<?php endif; ?>
						<?php if(!empty($pdfInstallationGuide)): ?>
						<a target="_blank" href="<?php echo $pdfInstallationGuide ?>">
							<img src="<?php echo $uri ?>/public/img/installation_guide.svg" alt="">
							<span><?php echo gett($titleInstallationGuide); ?></span>
						</a>
						<?php endif; ?>

						<?php if(!empty($pdfEliteBrandBrochure1)): ?>
						<a target="_blank" href="<?php echo $pdfEliteBrandBrochure1 ?>">
							<img src="<?php echo $uri ?>/public/img/brand_brochure.svg" alt="">
							<span><?php echo gett($titleEliteBrandBrochure1) ?></span>
						</a>
						<?php endif; ?>
						<?php if(!empty($pdfEliteBrandBrochure2)): ?>
						<a target="_blank" href="<?php echo $pdfEliteBrandBrochure2 ?>">
							<img src="<?php echo $uri ?>/public/img/brand_brochure.svg" alt="">
							<span><?php echo gett($titleEliteBrandBrochure2) ?></span>
						</a>
						<?php endif; ?>
					</div>
				</div>
				</div>
			</section>
			<?php endif; ?>
		</div>
		<div class="col-sm-1"></div>
		</div>
	</section>
</section>
<section class="product__related-projects">
	<div class="row">
			<div class="col-sm-1"></div>
			<div class="col-sm-10">
			<?php echo do_shortcode('[ew_related_projects products="'. $productTerm->term_id  .'"]') ?>
			</div>
			<div class="col-sm-1"></div>
	</div>
</section>
<?php include_once('templates/terms_and_conditios.php') ?>
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
		padding: 10% 10%;
	}

	.product__content-features {
		display: flex;
		flex-direction: column;
	}

	.product__content-features h5 {
		font-size: 15px;
		color: #039ED8;
		letter-spacing: 0;
		line-height: 30px;
	}

	.product__content-features span {
		margin-bottom: 15px;
	}

	.product__content-features span img {
		margin-right: 10px;
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

	.product__perks section:last-child {
		margin-bottom: 0;
	}

	.product__perks section > .row {
		width: 100%;
	}

	.product__perks section h4 {
		margin: 0;
		font-size: 24px;
		color: #039ED8;
		line-height: 37px;
		margin-bottom: 40px;
	}

	.product__perks section > .list {
		display: flex;
		flex-direction: column;
		margin: 40px 0 0 0;

	}

	.product__perks section .list span {
		display: block;
		margin-bottom: 4px;
	}

	.downloads {

	}

	.downloads a {
		display: flex;
		flex-direction: column;
		text-align: center;
	}

	.downloads__links {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.downloads span {
		font-size: 20px;
		color: #039ED8;
		letter-spacing: 0;
		margin: 40px 0 20px 0;
	}

	.product__related-projects {
		background: #F7FBFF;
		padding: 90px 0;
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
    content: "\f3d3"
  }

  .slick-prev::before {
    content: "\f3d2"
  }

  .slick-next::before, .slick-prev::before {
    font-family: "Ionicons";
    font-size: 40px;
    color: #039ED8;
  }
  	.row {
		margin-right: 0 !important;
		 margin-left: 0 !important;
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

		.downloads__links {
			flex-direction: row;
		}

	}
</style>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
<script>
	$(document).ready(function() {
			$('.product__content-slider').slick({
				slidesToShow: 1,
				adaptiveHeight: true,
				autoplay: true
			});
	});
</script>

<?php get_footer(); ?>
