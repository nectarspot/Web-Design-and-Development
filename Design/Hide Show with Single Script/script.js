$(document).ready(function(){
$('.show-hide').on('click', function() {
	$parent_box = $(this).closest('.services-block');
	$parent_box.siblings().find('.show-more').hide();
	$parent_box.find('.show-more').toggle();
});
});