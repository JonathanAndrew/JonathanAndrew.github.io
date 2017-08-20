$(document).ready(function(){
	var body = $('body');
	TweenMax.to(body,3,{opacity:1, ease: Power2.easeIn });
	var windowHeight = $(window).height();
function name(){
	var name = $('#name');
	TweenMax.to(name,3,{opacity:1, ease: Power2.easeIn });
};
name();
	$('.brand-logo').click(function(){
		window.location.replace("")
	});
	$(window).on('resize', function(){
		var windowHeight = $(window).height();
    $('.seattle').css('height',windowHeight);
	});

	$('.seattle').css('height',windowHeight);
	console.log($(window).height());
	$('.beervana,.contigo,.java-expresso').hover(function(){
		var content = $(this).children().find('.app-content');
		TweenMax.to(content,.8,{top:0,paddingTop:50,paddingLeft:5,paddingRight:5,opacity:1,backgroundColor:'rgba(0,0,0,.7)', ease: Power2.easeOut });
	},function(){
		var content = $(this).children().find('.app-content');
		TweenMax.to(content,1,{top:200,paddingTop:0,paddingLeft:5,paddingRight:5,opacity:0, ease: Power2.easeOut });
	});
	var apps = $('#app-field');
	var swipe = TweenMax.to(apps,4,{left:0,ease: Expo.easeOut});
	var controller = new ScrollMagic.Controller();
		var scene = new ScrollMagic.Scene({
				triggerElement: ".section",
				triggerHook: 'onEnter',
				triggerHook:(1),
				duration:800
			})
			.setTween(swipe)
		  .addTo(controller);
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
