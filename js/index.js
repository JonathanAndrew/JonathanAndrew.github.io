$(document).ready(function(){
	window.onbeforeunload = function(){ window.scrollTo(0,0); }
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

	//Aoo content hvoer
	$('.beervana,.contigo,.java-expresso').hover(function(){
		var content = $(this).children().find('.app-content');
		TweenMax.to(content,1,{top:0,paddingTop:50,paddingLeft:5,paddingRight:5,backgroundColor:'rgba(0,0,0,.7)', ease: Power2.easeOut });
	},function(){
		var content = $(this).children().find('.app-content');
		TweenMax.to(content,1,{top:500,paddingTop:0,paddingLeft:5,paddingRight:5, ease: Power2.easeOut });
	});

	//link hover
	$('.link a').hover(function(){
		var tab = $(this).parent().find('.tab');
		var link = $(this);
		TweenMax.to(tab,.5,{top:-45,zIndex:-999, ease: Power2.easeOut})
		TweenMax.to(link,.5,{zIndex:999,css:{color:"#002244"}, ease: Power2.easeOut})
	},function(){
		var tab = $(this).parent().find('.tab');
		var link = $(this);
		TweenMax.to(link,1,{zIndex:999,css:{color:"#fff"}, ease: Power2.easeOut})
		TweenMax.to(tab,.1,{top:0, ease: Power2.easeOut})
	});
	var apps = $('#app-field');
	var projects = $('.projects');
	var testimonal = $('.testimonal');
	var arrow = $('#arrow');
	var dan = $('.dan');
	var controller = new ScrollMagic.Controller({addIndicators: true});
	var app = TweenMax.to(apps,1,{opacity:1,top:0, ease: Power0.easeNone,delay: 1 })
	var project = TweenMax.to(projects,2,{opacity:1,ease: Expo.easeOut,delay:1})
	var elemit = TweenMax.to(testimonal,2,{opacity:1,ease: Expo.easeOut, delay:2.5})
	var animateDan = TweenMax.to(dan,10,{marginRight:200,ease: Expo.easeOut,delay:7})
	var arrow = TweenMax.to(arrow,2,{opacity:1, ease: Expo.easeOut,delay:1})
	var scene = new ScrollMagic.Scene({
				triggerElement: ".section",
				triggerHook: 'onEnter',
				triggerHook:(.85),
				duration:400
			})
			.setTween(app)
		  .addIndicators()

			var scene2 = new ScrollMagic.Scene({
			triggerElement: ".section",
			duration: 200,
			triggerHook: 'onEnter',
			triggerHook:(.9),
			})
			.setTween(project)
			.addIndicators()

			var scene3 = new ScrollMagic.Scene({
			triggerElement: "#elemit-container",
			duration: 400,
			triggerHook: 'onEnter',
			triggerHook:(.9),
			})
			.setTween(elemit)
			.addIndicators()
			var scene4 = new ScrollMagic.Scene({
			triggerElement: "#elemit-container",
			duration: 400,
			triggerHook: 'onEnter',
			triggerHook:(.9),
			})
			.setTween(arrow)
			.addIndicators()
			var scene5 = new ScrollMagic.Scene({
			triggerElement: "#elemit-container",
			duration: 650,
			triggerHook: 'onEnter',
			triggerHook:(.9),
			})
			.setTween(animateDan)
			.addIndicators()
			controller.addScene([
				scene,
				scene2,
				scene3,
				scene4,
				scene5
				// scene,
				// scene2
			]);

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

	$('.modal-trigger	').on('click',function(){

		 $('#modal1').modal('open');

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
$('.modal').modal();
});
