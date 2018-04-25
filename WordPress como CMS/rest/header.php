<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="utf-8">
	<title><?php bloginfo('name'); ?> | <?php wp_title(''); ?> <?php the_field('title_seo'); ?></title>
	<meta name="description" content="<?php bloginfo('name'); ?> | <?php wp_title(''); ?> <?php the_field('description_seo'); ?>">

	<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Alegreya+SC" rel="stylesheet" type="text/css">
	<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?>/style.css">
	<!-- Header Wordpress -->
	<?php wp_head(); ?>
	<!-- Header Wordpress -->
</head>
<body>

	<header>
		<nav>
			<?php 
				$args = array(
				'menu' => 'principal',
				'container' => false
				);
				wp_nav_menu( $args );
			?>
		</nav>

		<h1><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/rest.png" alt="Rest"></h1>

		<?php $contato = get_page_by_title('contato'); ?>
		<p><?php the_field('endereco_header', $contato); ?></p>
		<p class="telefone"><?php the_field('telefone_header', $contato); ?></p>
	</header>