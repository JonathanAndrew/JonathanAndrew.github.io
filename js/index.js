$(document).ready(function(){
	$('.brand-logo').click(function(){
		window.location.replace("")
	});
 	$('#about-link').click(function(event){
	 	event.preventDefault();
	 	window.scrollTo(0,0);
	 	$("#home").addClass('hide');
	 	$("#about-link").addClass('hide');
	 	$("#about").removeClass('hide');
	 	$("#portfolio-link").removeClass('hide');
 	});
 	 
 	$('.about-link').click(function(event){
	 	event.preventDefault();
	 	window.scrollTo(0,0);
	 	$("#home").addClass('hide');
	 	$("#about-link").addClass('hide');
	 	$("#about").removeClass('hide');
	 	$("#portfolio-link").removeClass('hide');
	 	$(function() {
	        setTimeout(function() {
	          $("#sidenav-overlay").trigger("click");
	        }, 100);
      	});
 	});
 	$('#portfolio-link').click(function(event){
	 	event.preventDefault(event);
	 	window.scrollTo(0,0);
	 	$('#about').addClass('hide');
	 	$('#home').removeClass('hide');
	 	$('#portfolio-link').addClass('hide');
	 	$('#about-link').removeClass('hide');
 	});
 	$('.portfolio-link').click(function(event){
	 	event.preventDefault(event);
	 	window.scrollTo(0,0);
	 	$('#about').addClass('hide');
	 	$('#home').removeClass('hide');
	 	$('#portfolio-link').addClass('hide');
	 	$('#about-link').removeClass('hide');
	 	$(function() {
	        setTimeout(function() {
	          $("#sidenav-overlay").trigger("click");
	        }, 100);
      	});
 	});

});