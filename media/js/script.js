function setCopyrightYear(){
	var theDate = new Date(); 
	$(".year").text(theDate.getFullYear());
}
function navBGScroll(){
	//Check on the navbar on start
	var scrollTop = $(document).scrollTop(),
		navElement = $('.nav-container');
	if(scrollTop > 5){
		navElement.addClass('solid');
	}
	else {
		navElement.removeClass('solid');
	}
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		if(scrollTop > 5){
			navElement.addClass('solid');
		}
		else {
			navElement.removeClass('solid');
		}
	});
}
// function fadeNavBrandOnMenuOpen(){
// 	$('.navbar-toggler').click(function(){
// 		var isOpen = $(this).attr('aria-expanded');
// 		if(isOpen){
// 			$('.navbar-brand').addClass('fade-out');
// 		}
// 		else {
// 			$('.navbar-brand').removeClass('fade-out');
// 		}
// 	});
// }
$(document).ready(function(){
	setCopyrightYear();
	navBGScroll();
	new universalParallax().init({
	  speed: 3.0
	});
	// fadeNavBrandOnMenuOpen();
});
