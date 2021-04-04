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


function createScrollReveal(){
	// Reveals the scroll-prompt when the users 
	// scrolls it into view on the Learn page
	ScrollReveal({ duration: 1000 });
	ScrollReveal().reveal('.scroll-prompt', { delay: 1000 });
}
// Change button text on Trade page 
// from "Read the Whitepaper" to
// "Whitepaper" on mobile and vice
// versa
function changeButtonText(){
	if($(window).width() < 991){
		$('.tracer-btn.read-whitepaper').text('Whitepaper')
	}
}
// For use for the blog posts for cutting 
// down the text displayed on the preview
function truncate(input) {
   if (input.length > 110) {
      return input.substring(0, 110) + '...';
   }
   return input;
};
$(window).resize(function(){

});
$(document).ready(function(){
	setCopyrightYear();
	navBGScroll();
	new universalParallax().init({
	  speed: 3.0
	});
});
