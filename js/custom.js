$(document).ready(function(){
	$(window).on("scroll",function(){
       let scrollDistance = $(window).scrollTop();
       let $header = $(".js-header");
       if(scrollDistance > 80){
       	  $header.addClass('header--color');
       }else{
       	  $header.removeClass('header--color');
       }
	})
	// WOW plugin
	new WOW().init();
    
    //fancybox plugin
    $('[data-fancybox]').fancybox({
	    toolbar  : false,
	    smallBtn : true,
	    loop: true,
    });
})