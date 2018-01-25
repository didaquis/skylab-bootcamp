
// Usamos jQuery

$('.box').addClass('caja');


var $box1 = $('#box-1');

$box1.click(function(e) {
	$box1.toggleClass("highlight");
});