<?php get_header(); ?>
<?php
	$title = $post->post_title;
	$date = new DateTime($post->post_date);
	$featured = get_the_post_thumbnail_url($post->ID);
	$content = $post->post_content;
	$header = get_post_meta($post->ID, 'header_key', tue);
	$intro = get_post_meta($post->ID, 'intro_key', tue);
?>

<article class="post">
	<header style="background-image: url(<?php echo $featured; ?>)">
		<div class="row">
			<div class="col-md-1"></div>
			<div class="col-md-10">
			<div class="post__header-container">
				<span class="post__date"><?php echo $date->format('d M, Y') ?></span>
				<div class="line"></div>
				<div class="post__title">
					<h2><?php echo $title ?></h2>
				</div>
			</div>

			</div>
			<div class="col-md-1"></div>
		</div>

		<div class="post__header-overlay"></div>
	</header>
	<section>
	<?php if( $intro && $header): ?>
	<div class="post__header-intro row">
		<div class="col-md-1"></div>

		<div class="col-md-5 post__header-intro-text">
			<?php echo $intro; ?>
		</div>
		<div class="col-md-5 image_div" >
			<div class="image-container">
				<img src="<?php echo wp_get_attachment_url($header) ?>" />
			</div>
		</div>
		<div class="col-md-1"></div>

		</div>
<?php endif; ?>
	</section>
	<section>
		<div class="col-md-1"></div>
		<div class="col-md-10">
			<div class="post__content">
			<?php echo $content ?>
			</div>

		</div>
		<div class="col-md-1"></div>

	</section>
</article>

<style>
	.post header {
		display: flex;
		background: #333;
		flex-direction: column;
		justify-content: center;
		position: relative;
		padding: 90px 0;
		background-position: center;
		background-size: cover;
	}

	.post__header-overlay {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		left: 0;
		background: rgba(0,0,0,.8);
		z-index: 1;
	}

	.post__header-container {
		position: relative;
		z-index: 2;
		padding: 40px
	}
	.image_div{
		top:-50%;
	}
	.post header h2 {
		color: #fff;
	}

	.post__title {
		display: block;
	}

	.post__date {
		font-size: 18px;
		color: #039ED8;
		letter-spacing: 0;
		line-height: 30px;
	}
	.image-container{
		transform: translateY(-25%);
		background-color: #fff;
		box-shadow: 0px 0px 10px 0px rgba(0,0,0,.7);
		z-index: 2;
	}
	.post__content {
		font-family: 'Arimo', sans-serif;
		font-size: 15px;
		color: #5D5D5D;
		letter-spacing: 0;
		padding: 40px 20px;
	}

	.post__header-intro img {
		margin-top: 0;
		width: 100%;
		max-height: 350px;
	}

	.post__header-intro-text {
		background: #F7FBFF;
		padding: 40px;
		color: #039ED8
	}


	@media (min-width: 1024px) {
		.post header {
			height: 600px;
		}

		.post__header-container {
			width: 40%;
			padding: 0
		}

		.post__header-intro {
			display: block;
			flex: 1;
			font-size: 20px;
		}

		.post__header-intro img {
			width: 100%;
			position: relative;
			z-index: 2;
		}

		.post__header-intro-text {

		padding: 40px 90px 40px 40px;
		color: #039ED8
	}

		.post__content {
			padding: 90px 130px;
			font-size: 1em;
			line-height: 1.42857143;
		}
  }
</style>
<?php get_footer(); ?>