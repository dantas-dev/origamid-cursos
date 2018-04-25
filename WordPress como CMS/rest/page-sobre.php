 <?php 
//Template Name: Sobre
 ?>

<?php get_header(); ?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
	<section class="container sobre"> 
		<h2 class="subtitulo"><?php the_title(); ?></h2>

		<div class="grid-8">
			<img src="<?php the_field('foto_rest'); ?>" alt="<?php the_field('foto_rest_descricao'); ?>">
		</div>

		<div class="grid-8">

		<?php if(have_rows('conteudo_sobre')): while(have_rows('conteudo_sobre')) : the_row(); ?>

			<h2><?php the_sub_field('titulo_sobre') ?></h2>
			<?php the_sub_field('texto_sobre') ?>

		<?php endwhile; else : endif; ?>
		
	</section>
	<?php endwhile; else: endif; ?>

<?php get_footer(); ?>