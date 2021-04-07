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
function showDropdownOnHover(){
	// Show when hovering over the general area
	$('.dropdown-menu').hover(
	  	function() {
		    $(this).addClass('show');
		    $('.dropdown-toggle').attr('aria-expanded', 'true');
	  	}, function() {
		    $(this).removeClass('show');
		    $('.dropdown-toggle').attr('aria-expanded', 'false');
	  	}
	);
	// Show when hovering over the toggle switch
	$('.dropdown-toggle').hover(
	  	function() {
		    $('.dropdown-menu').addClass('show');
		    $(this).attr('aria-expanded', 'true');
	  	}, function() {
		    $('.dropdown-menu').removeClass('show');
		    $(this).attr('aria-expanded', 'false');
	  	}
	);
	// Show when hovering over the logo
	$('.navbar-brand').hover(
	  	function() {
		    $('.dropdown-menu').addClass('show');
		    $('.dropdown-toggle').attr('aria-expanded', 'true');
	  	}, function() {
		    $('.dropdown-menu').removeClass('show');
		    $('.dropdown-toggle').attr('aria-expanded', 'false');
	  	}
	);
}
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
// Get markdown content  
function getText(myUrl){
    var result = null;
    $.ajax( { url: myUrl, 
              type: 'get', 
              dataType: 'html',
              async: false,
              success: function(data) { 
              	result = data;
              	result = result.replace('title:', '#')
              	.replace('subtitle:', '##')
				.replace('date:', '###### Date:')
				.replace('readTime:', '#### Read time:');
              } 
            }
    );
    return result;
}
function formatText(post){
	// h6 is always date element
	// This formats the date into a nice readable format
	var date = post.find('h6'),
		formatted_date = moment(date.text(), "DD-MM-YYYY"),
		readable_date  = moment(formatted_date).format('d MMMM YYYY');
	date.text(readable_date);

	// Remove the quotation marks from the h1 and h2 elements
	var title = post.find('h1').first(),
		stripped_title = title.text().replace(/"/g, ""),
		subtitle = post.find('h2').first(),
		stripped_subtitle = subtitle.text().replace(/"/g, ""),
		new_title = stripped_title + " | Tracer Blog";

	// Set page title to blog post title
	var title_element = document.getElementsByTagName("title")[0];
	title_element.innerText = new_title;

	title.text(stripped_title);
	subtitle.text(stripped_subtitle);

	// Remove the slug, published, and blogImg lines from the blog post text
	post.find("p:contains('slug:')").remove();
	post.find("p:contains('blogImg:')").remove();
	post.find("h2:contains('published:')").remove();

	// Remove the horizontal rule line
	post.find("hr").remove();
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

	showDropdownOnHover();

	// Set nav menu height on load if on mobile
	setNavHeight();
	
	// Set navbar colour on load if page has been scrolled
	navBGScroll();
});
