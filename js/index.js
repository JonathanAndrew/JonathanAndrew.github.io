$(document).ready(function(){
	$('.brand-logo').click(function(){
		window.location.replace("")
	});
	// $('.slider').slider({full_width: true});
	// $('.slider').slider('pause');
	// // Start slider
	// $('.slider').slider('start');
	// // Next slide
	// $('.slider').slider('next');
	// // Previous slide
	// $('.slider').slider('prev');
 	$('#about-link').click(function(event){
	 	event.preventDefault();
	 	window.scrollTo(0,0);
	 	$("#home").addClass('hide');
	 	$("#about-link").addClass('hide');
	 	$("#photography").addClass('hide');
	 	$("#about").removeClass('hide');
	 	$("#portfolio-link").removeClass('hide');
 	});
 	 
 	$('.about-link').click(function(event){
	 	event.preventDefault();
	 	window.scrollTo(0,0);
	 	$("#home").addClass('hide');
	 	$("#about-link").addClass('hide');
	 	$("#photography").addClass('hide');
	 	$("#about").removeClass('hide');
	 	$("#photography-link").removeClass('hide');
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
	 	$("#photography").addClass('hide');
	 	$("#photography-link").removeClass('hide');
	 	$('#portfolio-link').addClass('hide');
	 	$('#about-link').removeClass('hide');
 	});
 	$('.portfolio-link').click(function(event){
	 	event.preventDefault(event);
	 	window.scrollTo(0,0);
	 	$('#about').addClass('hide');
	 	$('#home').removeClass('hide');
	 	$("#photography").addClass('hide');
	 	$('#portfolio-link').addClass('hide');
	 	$('#about-link').removeClass('hide');
	 	$(function() {
	        setTimeout(function() {
	          $("#sidenav-overlay").trigger("click");
	        }, 100);
      	});
 	});
 	// $('#photography-link').click(function(event){
	 // 	event.preventDefault(event);
	 // 	window.scrollTo(0,0);
	 // 	$('#about').addClass('hide');
	 // 	$('#home').addClass('hide');
	 // 	$("#photography").removeClass('hide');
	 // 	$("#photography-link").addClass('hide');
	 // 	$('#portfolio-link').removeClass('hide');
	 // 	$('#about-link').removeClass('hide');
 	// });
 	// $('.photography-link').click(function(event){
	 // 	event.preventDefault(event);
	 // 	window.scrollTo(0,0);
	 // 	$('#about').addClass('hide');
	 // 	$('#home').addClass('hide');
	 // 	$("#photography").removeClass('hide');
	 // 	$('#portfolio-link').addClass('hide');
	 // 	$('#about-link').removeClass('hide');
	 // 	$(function() {
	 //        setTimeout(function() {
	 //          $("#sidenav-overlay").trigger("click");
	 //        }, 100);
  //     	});
 	// });

});