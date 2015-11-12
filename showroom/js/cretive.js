$(document).ready(function(){
	var clientHeight = $(window).height();
	$('.full_screen').height(clientHeight+'px');
	$('.center_box').each(function(){
		if($(this).index()==0){
			$(this).css('top','50px')
		}
		if($(this).index()==1){
			$(this).css('top',(clientHeight/2)+'px')
		}
		if($(this).index()==2){
			$(this).css('top',(clientHeight-120)+'px')
		}		
	});
//topbar效果开始
	var showoffon=true;
	$("nav").addClass('topshow');
	$('nav,#item_box,#logo_box').bind('mouseover',function(){
		$("#item_box,#logo_box").addClass('open');
		$("nav").addClass('topshow');
		showoffon=false;
	});
	$('nav,#item_box,#logo_box').bind('mouseout',function(){
		$("#item_box,#logo_box").removeClass('open');
		showoffon=true;
		if ($(document).scrollTop()>=200) {
			$("nav").removeClass('topshow');
		};
	});
	$(window).scroll(function(){
		if ($(document).scrollTop()>=200&&showoffon) {
			$("nav").removeClass('topshow');
		}else if(($(document).scrollTop()<200)){
			$("nav").addClass('topshow');
		};
	});
//topbar效果结束	
//顶部锚点平滑滚动开始
	var arrLi=['.HOME','.SERVICES','.COLLECTIONS','.EVENTS','.CONTACT']
	for(var i=0;i<arrLi.length;i++){
		navA(arrLi[i]);
	}
	function navA(cls){
	$(cls).click(function(){
        var href = $(this).attr("href");
        var pos = $(href).offset().top;
        $("html,body").animate({scrollTop: pos}, 1000);
        return false;
    });
	}
//顶部锚点平滑滚动结束
//第三屏效果开始
	// $('#COLLECTIONS .a,i').each(function(){
	// 	$(this).bind('mouseover',function(){
	// 			$(this).addClass('three_hover_div');
	// 			$('#COLLECTIONS').addClass('three_hover');			
	// 	})
	// 	$(this).bind('mouseout',function(){
	// 		$(this).removeClass('three_hover_div');
	// 		$('#COLLECTIONS').removeClass('three_hover');
	// 	})
	// })
		$('.a1,.hr1').bind('mouseover',function(){
				$('.a1').addClass('three_hover_div1');
				$('#COLLECTIONS').addClass('three_hover');			
		})
		$('.a1,.hr1').bind('mouseout',function(){
			$('.a1').removeClass('three_hover_div1');
			$('#COLLECTIONS').removeClass('three_hover');
		})
		$('.a2,.hr2').bind('mouseover',function(){
				$('.a2').addClass('three_hover_div2');
				$('#COLLECTIONS').addClass('three_hover');			
		})
		$('.a2,.hr2').bind('mouseout',function(){
			$('.a2').removeClass('three_hover_div2');
			$('#COLLECTIONS').removeClass('three_hover');
		})
		$('.a3,.hr3').bind('mouseover',function(){
				$('.a3').addClass('three_hover_div3');
				$('#COLLECTIONS').addClass('three_hover');			
		})
		$('.a3,.hr3').bind('mouseout',function(){
			$('.a3').removeClass('three_hover_div3');
			$('#COLLECTIONS').removeClass('three_hover');
		})
		$('.a4').bind('mouseover',function(){
				$(this).addClass('three_hover_div4');
				$('#COLLECTIONS').addClass('three_hover');			
		})
		$('.a4').bind('mouseout',function(){
			$(this).removeClass('three_hover_div4');
			$('#COLLECTIONS').removeClass('three_hover');
		})

//第三屏效果结束	
//第四屏date效果开始
	$('.four_date_box2').bind('click',function(){
		$(this).addClass('four_active');
		$('.four_date_box1').removeClass('four_active');
	})
	$('.four_date_box1').bind('click',function(){
		$(this).addClass('four_active');
		$('.four_date_box2').removeClass('four_active');
	})
//第四屏date效果结束	
});