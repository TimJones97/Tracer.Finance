function setCopyrightYear(){
	var theDate = new Date(); 
	$(".year").text(theDate.getFullYear());
}
function navBGScroll(){
	var scrollTop = $(document).scrollTop(),
		navElement = $('.nav-container');
	if(scrollTop > 5){
		navElement.addClass('solid');
	}
	else {
		navElement.removeClass('solid');
	}
}
function createScrollReveal(){
	// Reveals the scroll-prompt when the users 
	// scrolls it into view on the Learn page
	ScrollReveal({ duration: 1000 });
	ScrollReveal().reveal('.scroll-prompt', { delay: 1000 });
}
// For use later for the blog posts for cutting 
// down the text displayed on the preview
function truncate(input) {
   if (input.length > 110) {
      return input.substring(0, 110) + '...';
   }
   return input;
};
$(window).scroll(function(){
	//Check on the navbar on start
	navBGScroll();
});
$(window).resize(function(){

});
$(document).ready(function(){
	setCopyrightYear();

	// Set navbar colour on load if page has been scrolled
	navBGScroll();

	// Only run parallax on certain pages
	new universalParallax().init({
	  speed: 3.0
	});
});
