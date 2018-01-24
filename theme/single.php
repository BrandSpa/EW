<?php get_header(); ?>
<?php
	$title = $post->post_title;
	$date = new DateTime($post->post_date);
	$featured = get_the_post_thumbnail_url($post->ID);
	$content = $post->post_content;
?>
<article class="post">
	<header style="background: url(<?php echo $featured; ?>)">

		<div class="post__header-container">
			<span class="post__date"><?php echo $date->format('d M, Y') ?></span>
			<div class="line"></div>
			<div class="post__title">
				<h2><?php echo $title ?></h2>
			</div>
		</div>
		<div class="post__header-overlay"></div>
	</header>
	<section>
		<div class="col-lg-1"></div>
		<div class="col-lg-10">
			<div class="post__content">
			<?php echo $content ?>
			</div>

		</div>
		<div class="col-lg-1"></div>

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


	.post__content {
		font-family: Helvetica;
		font-size: 15px;
		color: #5D5D5D;
		letter-spacing: 0;
		line-height: 30px;
		padding: 40px 20px;
	}


	@media (min-width: 1024px) {
		.post header {
			height: 600px;
		}

		.post__header-container {
			width: 40%;
			padding: 90px
		}

		.post__content {
			padding: 90px;
			font-size: 19px;
			line-height: 34px;
		}
  }
</style>
<?php get_footer(); ?>