<footer>
		<nav class="nav-footer">
			<ul>
				<?php 
					$args = array(
					'menu' => 'principal',
					'container' => false
					);
					wp_nav_menu( $args );
				?>
			</ul>
		</nav>

		<p><?php bloginfo('name'); ?> © <?php echo date("Y"); /*Mostrar o ano*/ ?>. Alguns direitos reservados.</p>
	</footer>

	<!-- Footer Wordpress -->
	<?php wp_footer(); ?>
	<!-- Footer Wordpress -->
</body>
</html>