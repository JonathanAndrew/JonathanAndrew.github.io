$(document).ready(function(){

 $('#about-link').click(function(event){
 	event.preventDefault();
 	$("#home").addClass('hide');
 	$("#about-link").addClass('hide');
 	$("#about").removeClass('hide');
 	$("#portfolio-link").removeClass('hide');

 });

 // $('#portfolio-link').click(function(event){
 // 	event.preventDefault(event);
 // 	$('#about').addClass('hide');
 // 	$('#home')show();
 // 	$('#portfolio-link').hide();
 // 	$('#about-link').show();
 // });

});