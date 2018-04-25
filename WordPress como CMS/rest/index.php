<?php get_header(); ?>

	<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

		<section class="container sobre"> 
		<h2 class="subtitulo"><?php the_title(); ?></h2>

		<div class="grid-16">			
			<?php the_content(); ?>
		</div>
	</section>
			
	<?php endwhile; else: ?>
		<section class="container sobre">
			<h2 class="subtitulo">Essa página não existe.</h2>
		</section>
	<?php endif; ?>

<?php get_footer(); ?>