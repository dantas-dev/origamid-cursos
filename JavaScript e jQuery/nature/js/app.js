(function(){

	/* funcao debounce(lodash) - define um tempo minimo para executar uma funcao */
	debounce = function(func, wait, immediate) {
		let timeout;
		return function() {
			let context = this, args = arguments;
			let later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			let callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

/* Mudar tab ao clique */
$('[data-group]').each(function(){
	var $allTarget = $(this).find('[data-target]'),
			$allClick = $(this).find('[data-click]'),
			activeClass = 'active';
	
	$allTarget.first().addClass(activeClass);
	$allClick.first().addClass(activeClass);
	
	$allClick.click(function(e){
		e.preventDefault();
		
		var id = $(this).data('click'),
				$target = $('[data-target="' + id + '"]');
		
		$allClick.removeClass(activeClass);
		$allTarget.removeClass(activeClass);
		
		$target.addClass(activeClass);
		$(this).addClass(activeClass);
	});
});

/* Scroll Suave */
$('.menu-nav a[href^="#"]').click(function(e){
	e.preventDefault();
	const id = $(this).attr('href');
	const menuHeight = $('.menu').innerHeight();
	/* Distância entre o target e o topo do site */
	let targetOffset = $(id).offset().top;
	
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});

/* exemplo de botão voltar ao topo */
$('.logo').click(function (e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: 0
	}, 500);
})

/* Mudar para active de acordo com a secao */
$('section').each(function () {
	const height = $(this).height();
	const offsetTop = $(this).offset().top;
	const menuHeight = $('.menu').innerHeight();
	const id = $(this).attr('id');
	const $itemMenu = $('a[href="#' + id + '"]');
	
	$(window).scroll(debounce(function () {
		let scrollTop = $(window).scrollTop() + 1;

		if((offsetTop - menuHeight) < scrollTop && (offsetTop + height - menuHeight) > scrollTop) {
			$itemMenu.addClass('active');
		} else {
			$itemMenu.removeClass('active');
		}
	}, 200));
});


/* Menu mobile */
$('.mobile-btn').click(function () {
	$(this).toggleClass('active');
	$('.mobile-menu').toggleClass('active');
});

/* Slide */
function slider(sliderName, velocity) {
	const sliderClass = '.' + sliderName,
				activeClass = 'active';
	let rotate = setInterval(rotateSlide, velocity);

	/* add class active para o primeiro filho do slider */
	$(sliderClass + ' > :first').addClass(activeClass);

	/* Parar com :hover */
	$(sliderClass).hover(function () {
		/* remove o intervalo */
		clearInterval(rotate);
	}, function () {
		rotate = setInterval(rotateSlide, velocity);
	});

	function rotateSlide() {
		let activeSlide = $(sliderClass + ' > .' + activeClass),
				nextSlide = activeSlide.next();

		/* verificar se o proximo elemento existe */
		if(nextSlide.length === 0) {
			nextSlide = $(sliderClass + ' > :first');
		}

		activeSlide.removeClass(activeClass);
		nextSlide.addClass(activeClass);
	};
}

slider('introducao', 500);


/* Animação ao scroll */
const $target = $('[data-anime="scroll"]'),
		animationClass = 'animate';
let offset = $(window).height() * 3/4;

function animeScroll() {
	let documentTop = $(window).scrollTop();
	
	$target.each(function () {
		let itemTop = $(this).offset().top;

		if(documentTop > (itemTop - offset)){
			$(this).addClass(animationClass);
		} else {
			$(this).removeClass(animationClass);
		}
	});
}

/* ativar a função assim que iniciar o site */
animeScroll();

/* e tb ativar ao scroll */
$(document).scroll(debounce(function(){
	animeScroll();
}, 200));
}());

