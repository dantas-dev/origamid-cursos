<?php

$template_diretorio = get_template_directory();

require_once($template_diretorio . "/custom-post-type/produto.php");
require_once($template_diretorio . "/custom-post-type/transacao.php");

require_once($template_diretorio . "/endpoints/usuario_post.php");
require_once($template_diretorio . "/endpoints/usuario_get.php");
require_once($template_diretorio . "/endpoints/usuario_put.php");

require_once($template_diretorio . "/endpoints/produto_post.php");
require_once($template_diretorio . "/endpoints/produto_get.php");
require_once($template_diretorio . "/endpoints/produto_delete.php");

require_once($template_diretorio . "/endpoints/transacao_post.php");
require_once($template_diretorio . "/endpoints/transacao_get.php");


function get_produto_id_by_slug($slug) {
  $query = new WP_Query(array(
    'name' => $slug,
    'post_type' => 'produto',
    'numberposts' => 1,
    'fields' => 'ids'
  ));

  $posts = $query->get_posts();

  return $posts[0];
} 

// permitir que o total de produtos apareça no front
add_action('rest_pre_serve_request', function() {
  header('Access-Control-Expose-Headers: X-Total-Count');
});

function expire_token() {
  return time() + (60 * 60 * 24);
}
add_action('jwt_auth_expire', 'expire_token');

// esconder logo wp
function my_login_screen() {
  ?> 
  <style type="text/css">
    #login h1 a {
      background-image: none;
    }
    #backtoblog, #nav {
      display: none;
    }
  </style>
  <?php }

add_action('login_enqueue_scripts', 'my_login_screen');

?>