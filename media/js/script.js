function setCopyrightYear(){
	var theDate = new Date(); 
	$(".year").text(theDate.getFullYear());
}
$(document).ready(function(){
	setCopyrightYear();
});
