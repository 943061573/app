/**
 * Created by Administrator on 2016/11/8.
 */
$(function(){
	$('.fb-price li,.fb-square li' ).click(function(){
		$(this ).css('background',"#fff");
		$(this ).siblings().css('background',"#f1f1f1")
	});
	$('.fb-more>li:eq(0)' ).click(function(){
		$(this ).css("background","#fff");
		$(this ).siblings().css("background","#f1f1f1");
		$(".fm-metro" ).css("display","block");
		$(".fm-home" ).css("display","none");
		$(".fm-fitting " ).css("display","none");
	});
	$('.fb-more>li:eq(1)' ).click(function(){
		$(this ).css("background","#fff");
		$(this ).siblings().css("background","#f1f1f1");
		$(".fm-metro" ).css("display","none");
		$(".fm-home" ).css("display","block");
		$(".fm-fitting " ).css("display","none");
	});
	$('.fb-more>li:eq(2)' ).click(function(){
		$(this ).css("background","#fff");
		$(this ).siblings().css("background","#f1f1f1");
		$(".fm-metro" ).css("display","none");
		$(".fm-home" ).css("display","none");
		$(".fm-fitting " ).css("display","block");
	});

	$('.am-more>li:eq(0)' ).click(function(){
		$(this ).css("background","#fff");
		$(this ).siblings().css("background","#f1f1f1");
		$(".am-metro" ).css("display","block");
		$(".am-home" ).css("display","none");
		$(".am-fitting " ).css("display","none");
	});
	$('.am-more>li:eq(1)' ).click(function(){
		$(this ).css("background","#fff");
		$(this ).siblings().css("background","#f1f1f1");
		$(".am-metro" ).css("display","none");
		$(".am-home" ).css("display","block");
		$(".am-fitting " ).css("display","none");
	});
	$('.am-more>li:eq(2)' ).click(function(){
		$(this ).css("background","#fff");
		$(this ).siblings().css("background","#f1f1f1");
		$(".am-metro" ).css("display","none");
		$(".am-home" ).css("display","none");
		$(".am-fitting " ).css("display","block");
	});

	$(".fm-metro li,.fm-home li ,.fm-fitting li,.am-metro li,.am-home li ,.am-fitting li" ).click(function(){
		$(this ).css("color","red");
		$(this ).siblings().css("color","#323232");
	});

	//$('.flex-box1>li:eq(1)').click(function(){
	//	var dis = $('.fb-square' ).css('display');
	//	//console.log( dis );
	//	if(dis == 'none'){
	//		$(this ).addClass('flex-active' ).removeClass('box');
	//		$(this ).siblings().removeClass('flex-active' ).addClass('box' );
	//		$(this ).addClass("box-color");
	//		$(this ).siblings().removeClass("box-color");
	//	}else{
	//		$(this ).addClass('box' );
	//		$(this ).removeClass("box-color");
	//	}
	//});
	$('.flex-box1>li:eq(0)' ).click(function(){
		$(".fb-price" ).css("display","none" );
		$(".fb-square" ).css("display","none");
		$(".area-more " ).toggleClass('show');
		var dis = $('.area-more ' ).css('display');
		//console.log( dis );
		if(dis == 'none'){
			$(this ).addClass('box' );
			$(this ).removeClass("box-color");
		}else if(dis == 'flex'){
			//console.log( dis );
			$(this ).addClass('flex-active' ).removeClass('box');
			$(this ).siblings().removeClass('flex-active' ).addClass('box' );
			$(this ).addClass("box-color");
			$(this ).siblings().removeClass("box-color");
		}
	});
	$('.flex-box1>li:eq(1)' ).click(function(){
		$(".fb-price" ).css("display","none");
		$(".fb-square" ).toggle();
		$(".area-more " ).removeClass('show');
		$(".nav-more " ).removeClass('show');

		var dis = $('.fb-square' ).css('display');
		//console.log( dis );
		if(dis == 'none'){
			$(this ).addClass('box' );
			$(this ).removeClass("box-color");
		}else if(dis == 'block'){
			$(this ).addClass('flex-active' ).removeClass('box');
			$(this ).siblings().removeClass('flex-active' ).addClass('box' );
			$(this ).addClass("box-color");
			$(this ).siblings().removeClass("box-color");
		}
	});
	$('.flex-box1>li:eq(2)' ).click(function(){
		$(".fb-price" ).toggle();
		$(".fb-square" ).css("display","none");
		$(".area-more " ).removeClass('show');
		$(".nav-more " ).removeClass('show');

		var dis = $('.fb-price' ).css('display');
		//console.log( dis );
		if(dis == 'none'){
			$(this ).addClass('box' );
			$(this ).removeClass("box-color");
		}else if(dis == 'block'){
			$(this ).addClass('flex-active' ).removeClass('box');
			$(this ).siblings().removeClass('flex-active' ).addClass('box' );
			$(this ).addClass("box-color");
			$(this ).siblings().removeClass("box-color");
		}
	});
	$('.flex-box1>li:eq(3)' ).click(function(){
		$(".fb-price" ).css("display","none");
		$(".fb-square" ).css("display","none");
		$(".nav-more " ).toggleClass('show' );

		var dis = $('.nav-more ' ).css('display');
		//console.log( dis );
		if(dis == 'none'){
			$(this ).addClass('box' );
			$(this ).removeClass("box-color");
		}else if(dis == 'flex'){
			//console.log( dis );
			$(this ).addClass('flex-active' ).removeClass('box');
			$(this ).siblings().removeClass('flex-active' ).addClass('box' );
			$(this ).addClass("box-color");
			$(this ).siblings().removeClass("box-color");
		}
	});

});