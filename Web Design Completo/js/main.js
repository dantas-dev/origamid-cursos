$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
});

$(".rslides_portfolio").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: true,           // Boolean: Show pager, true or false
});

// visibility
Visibility.onVisible(function(){
 setTimeout(function (){
	$(".introducao h1").addClass("animated fadeInDown");}, 400);
 setTimeout(function (){
	$(".introducao blockquote").addClass("animated fadeInDown");}, 800);
 setTimeout(function (){
	$(".introducao .btn").addClass("animated fadeInDown");}, 1200);
  setTimeout(function (){
	$(".animar").addClass("animated fadeInDown");}, 1600);


 	setTimeout(function (){
	$(".introducao-interna h1").addClass("animated fadeInDown");}, 400);
	 setTimeout(function (){
	$(".introducao-interna p").addClass("animated fadeInDown");}, 800);
	 setTimeout(function (){
	$(".animar-interno").addClass("animated fadeInDown");}, 1200);

});















