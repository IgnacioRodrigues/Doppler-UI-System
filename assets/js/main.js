$("body").on({
  mouseenter: function() {
    var submenu = $(this).find(".sub-menu");

    if (submenu && submenu[0].children.length) {
      $('.header-main').addClass('header-open');
    }
  },
  mouseleave: function() {
    $('.header-main').removeClass('header-open');
  }
}, ".menu-main .submenu-item");

$("body").on('click', '#user-menu--open', function() {
  $('.user-menu').toggleClass('open');
});

$("body").on('click', '#open-menu', function() {
  $('.header-main').addClass('open');
});

$("body").on('click', '#close-menu', function() {
  $('.header-main').removeClass('open');
});

$("body").on('click', '.close-user--menu', function() {
  $('.user-menu').removeClass('open');
});

$(document).on('mouseup', function(e){
	var menu = $(".user-menu");

	if (!menu.is(e.target) && menu.has(e.target).length === 0){
		menu.removeClass('open');
	}
}); 

// modals
var $delayFade = 500;
//Initialize all modals hidden
$("#modal-large, #modal-medium, #modal-small").hide();

$("#btn-modal-large").click(function() {
  $("#modal-large").fadeIn($delayFade);
});
$("#btn-modal-medium").click(function() {
  $("#modal-medium").fadeIn($delayFade);
});
$("#btn-modal-small").click(function() {
  $("#modal-small").fadeIn($delayFade);
});
$(".modal .close").click(function() {
  $(".modal").fadeOut();
});
