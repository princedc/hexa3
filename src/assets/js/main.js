// JavaScript Document

//Menu
$(document).ready(function () {
	$(".menu_res").click(function () {
		$(".menuul").slideToggle(400);
	});
});

$(document).ready(function(){
    $( "a.scrollingto" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top-100}, 500);
    });
});

//Email ID Validation
function contact_form() { 
	var email_hm = $("#email_hm").val();
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 
	//var address = document.getElementById[email].value; 
	if (reg.test(email_hm) == false) { 
		alert('Invalid Email Address'); 
		$("#email_hm").focus();
		return false; 
	} 
}

//Email ID Validation
function signup_form() { 
	var email_hm = $("#email_signup_form").val();
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 
	//var address = document.getElementById[email].value; 
	if (reg.test(email_hm) == false) { 
		alert('Invalid Email Address'); 
		$("#email_signup_form").focus();
		return false; 
	} 
}