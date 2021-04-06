function isCollapsed(){
	if($(window).width() < 1200){
		return true;
	}
	else {
		return false;
	}
}
function setCopyrightYear(){
	var theDate = new Date(); 
	$(".year").text(theDate.getFullYear());
}
function navBGScroll(){
	var scrollTop = $(document).scrollTop(),
		navElement = $('.nav-container')
		currentWidth = $(window).width();
	if(scrollTop > 5 || currentWidth < 1200){
		if(navElement.hasClass('darkblue')){
			navElement.addClass('solid-darkblue');
		}
		else {
			navElement.addClass('solid');
		}
	}
	else {
		navElement.removeClass('solid');
		navElement.removeClass('solid-darkblue');
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
// Get the current URL page
// function getPathname(){
// 	var pathname_arr = window.location.pathname.split('/');
// 	var pathname = pathname_arr[pathname_arr.length - 2];
// 	return pathname;
// }
function setNavHeight(){
	if(isCollapsed()){
		$('.navbar-nav').css('height', $(window).innerHeight() + 'px');
	}
	else {
		$('.navbar-nav').css('height', 'auto');
	}
}
function toggleSubscriptionBox(){
	$('footer .tracer-btn.blue').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.subscribe-box_hidden').toggleClass('show');
	});
}
$(window).scroll(function(){
	//Check on the navbar on start
	navBGScroll();
});
$(window).resize(function(){
	setNavHeight();
});
$(document).ready(function(){
	setCopyrightYear();

	toggleSubscriptionBox();

	// Set nav menu height on load if on mobile
	setNavHeight();
	
	// Set navbar colour on load if page has been scrolled
	navBGScroll();
});
