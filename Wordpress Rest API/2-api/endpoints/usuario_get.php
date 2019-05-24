<?php

function api_usuario_get($request) {
  $user = wp_get_current_user();
  $user_id = $user->ID;

  // verificar se usuario esta logado
  if($user_id > 0) {
    $user_meta = get_user_meta($user_id);

    $response = array(
      'id' => $user->user_login,
      'nome' => $user->display_name,
      'email' => $user->user_email,
      'cep' => $use_meta['cep'][0],
      'numero' => $use_meta['numero'][0],
      'rua' => $use_meta['rua'][0],
      'bairro' => $use_meta['bairro'][0],
      'estado' => $use_meta['estado'][0],
    );
  } else {
    $response = new WP_Error('permissao', 'Usuário não possui permissão', array('status' => 401));
  }

  return rest_ensure_response($response);
}

function registrar_api_usuario_get() {
  register_rest_route('api', '/usuario', array(
    array(
      'methods' => WP_REST_Server::READABLE,
      'callback' => 'api_usuario_get',
    ),
  ));
}

add_action('rest_api_init', 'registrar_api_usuario_get');


?>