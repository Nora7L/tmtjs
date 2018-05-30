// jquery
$(function(){
   $(window).scroll(function(){
		var scrollTop=$(document).scrollTop();
		var headerH=$('header').height();
		// console.log(scrollTop)
		if (scrollTop>headerH) {
			$('header').css({
				'position':'fixed',
				'top':"0",
				'zIndex':'9999'
		    });
		    $('.section').css('marginTop',headerH+'px')
		}else{
            $('header').css('position','static');
		    $('.section').css('marginTop',0)
		}
   })
});


// js
// window.onload = function(){
// 	var oHeader = document.getElementsByTagName('header')[0];

// 	window.onscroll = function(){
//       var scrollH = document.documentElement.scrollTop||document.body.scrollTop;


//       // console.log(scrollH+"px")
//       if (scrollH>400) {
//       	oHeader.style.position = 'fixed';
//       	oHeader.style.zIndex = '9999';
//       }else{
//       	oHeader.style.position = 'relative';
//       }
// 	}
// }