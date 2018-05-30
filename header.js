$(function(){

	init()
	getSectionsName()

	function init(){

		//分享移入
		var $navShare = $('.nav_share');
		var $Vbvx = $('.nav_share .share_allitems');
		var shareTimer = null;
		$navShare.mouseover(function(){
			$(this).find('.share_allitems').fadeIn();
			clearTimeout(shareTimer);
		});
		$navShare.mouseout(function(){
			shareTimer = setTimeout(function(){
				$navShare.find('.share_allitems').fadeOut();
			},1000);
		});
		$Vbvx.mouseover(function(){
			clearTimeout(shareTimer);
			$(this).show();
		});

		//微信分享弹窗
	    if($(window).width()>768){
	      $('.wxShare').on('click',function(){
	        $(this).addClass('pop_wechat');
	        $('.pop_code').fadeIn();
	      });
	      $('.pop_code .close_code').on('click',function(){
	        $('.pop_code').fadeOut();
	        $('.wxShare' ).removeClass('pop_wechat');
	      })
	    }

		//H5导航
		$('.navH5_btn').on('click',function(){
			event.stopPropagation();
			event.preventDefault();
			$('.nav_allitems').toggle(0,function(){
				if ($(this).css('display') == 'block') {
					$(this).css('display','flex')
				}
			});

			$(document).on("click", function(){
				$('.nav_allitems').hide()
			});
		})
		$(window).resize(function() {
			if ($(window).width() > 1100) {
				$('.nav_allitems').show()
			}
		});

	}

	function getSectionsName(){
		//动态生成导航
		var navLi = "";
		$("section[type='section']").each(function(){
			navLi = '<li><a href="#'+$(this).attr('id')+'">'+$(this).attr('data-name')+'</a></li>'
			$('.nav_allitems').append(navLi)
		});

		//导航瞄点跳转效果
	    $(".nav_allitems").find('li a').on('click', function(e){
			var $this = $(this);
			e.preventDefault();
			$this.removeClass('on');
			$this.addClass('on');
			//有可能会出现不对的效果
			var st = $($this.attr('href')).offset().top;
			$("html,body").animate({scrollTop: st-50}, 500);
	    });

	    //滚动切换导航
	    $(document).on('scroll', function(){
	        changeNavActive();
	    });
	}

	function changeNavActive(){
	    var arr = [];
	    $(".allSections section[type='section']").each(function(index, item){
	        arr[index] = $(item).offset().top;
	    }); 
	    var topSection = arr;
	    var wHeight = $(window).scrollTop(),
	        contentHeight = $('.allSections').get(0).offsetHeight,
	        viewH =$(window).height();

	    lastHeight = contentHeight - viewH - wHeight;

	    if($(window).width() > 768) {
	     $.each(topSection, function(index, item){
	      if(wHeight > item - 55){
	          $(".nav_allitems").find('li a').removeClass('on');
	          $(".nav_allitems").find('li a').eq(index).addClass('on');
	        }
	        });
	    }
	}
		
})