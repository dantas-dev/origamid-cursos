$('[data-group]').each(function () {
  const $allTarget = $(this).find('[data-target]');
  const $allClick = $(this).find('[data-click]');
  const activeClass = 'active';

  $allTarget.first().addClass(activeClass);
  $allClick.first().addClass(activeClass);

  $allClick.click(function(e){
    e.preventDefault();
    
    const id = $(this).data('click');
    const $target = $('[data-target="' + id + '"]');

    $allClick.removeClass(activeClass);
    $allTarget.removeClass(activeClass);

    $(this).addClass(activeClass);
    $target.addClass(activeClass);
  });

});