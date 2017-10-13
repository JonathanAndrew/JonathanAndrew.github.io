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
		TweenMax.to(content,1,{top:-30,paddingTop:25,paddingLeft:5,paddingRight:5,backgroundColor:'rgba(0,0,0,.7)', ease: Power2.easeOut });
	},function(){
		var content = $(this).children().find('.app-content');
		TweenMax.to(content,1,{top:500,paddingTop:0,paddingLeft:5,paddingRight:5, ease: Power2.easeOut });
	});

	var apps = $('#app-field');
	var projects = $('.projects');
	var testimonal = $('.testimonal');
	var arrow = $('#arrow');
	var dan = $('.dan');
	var links1 = $('.link1');
	var links2 = $('.link2');
	var links3 = $('.link3');
	var controller = new ScrollMagic.Controller({addIndicators: true});
	var app = TweenMax.to(apps,1,{opacity:1,top:0, ease: Power0.easeNone,delay: 1 })
	var project = TweenMax.to(projects,2,{opacity:1,ease: Expo.easeOut,delay:1})
	var elemit = TweenMax.to(testimonal,2,{opacity:1,ease: Expo.easeOut, delay:2.5})
	var animateDan = TweenMax.to(dan,10,{marginRight:100,ease: Expo.easeOut,delay:7})
	var arrow = TweenMax.to(arrow,2,{opacity:1, ease: Expo.easeOut,delay:1})
	var link1 = TweenMax.to(links1,2,{marginRight:15,ease: Expo.easeOut})
	var link2 = TweenMax.to(links2,2,{marginRight:15,ease: Expo.easeOut,delay:1})
	var link3 = TweenMax.to(links3,2,{marginRight:15,ease: Expo.easeOut,delay:2})

	var scene = new ScrollMagic.Scene({
				triggerElement: ".section",
				triggerHook: 'onEnter',
				triggerHook:(.85),
				duration:400
			})
			.setTween(app)

			var scene2 = new ScrollMagic.Scene({
			triggerElement: ".section",
			duration: 200,
			triggerHook: 'onEnter',
			triggerHook:(.9),
			})
			.setTween(project)

			var scene3 = new ScrollMagic.Scene({
			triggerElement: "#elemit-container",
			duration: 400,
			triggerHook: 'onEnter',
			triggerHook:(.9),
			})
			.setTween(elemit)

			var scene4 = new ScrollMagic.Scene({
			triggerElement: "#elemit-container",
			duration: 400,
			triggerHook: 'onEnter',
			triggerHook:(.9),
			})
			.setTween(arrow)

			var scene5 = new ScrollMagic.Scene({
			triggerElement: "#elemit-container",
			duration: 650,
			triggerHook: 'onEnter',
			triggerHook:(.9),
			})
			.setTween(animateDan)

			var scene6 = new ScrollMagic.Scene({
			triggerElement: ".section",
			duration: 300,
			triggerHook: 'onEnter',
			triggerHook:(.9),
			})
			.setTween(link1)

			var scene7 = new ScrollMagic.Scene({
			triggerElement: ".section",
			duration:300,
			triggerHook: 'onEnter',
			triggerHook:(.9),
			})
			.setTween(link2)

			var scene8 = new ScrollMagic.Scene({
			triggerElement: ".section",
			duration: 300,
			triggerHook: 'onEnter',
			triggerHook:(.9),
			})
			.setTween(link3)

			controller.addScene([
				scene,
				scene2,
				scene3,
				scene4,
				scene5,
				scene6,
				scene7,
				scene8
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
