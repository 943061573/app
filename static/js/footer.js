/**
 * Created by Administrator on 2016/11/11.
 */
$('.foot li:eq(0)' ).click(function(){
	window.location.href = '../index.html';
	$(this ).removeClass('li-1' ).addClass('active1').css('color','red');
	$('.foot li:eq(1)').removeClass('active2').addClass('li-2').css('color','#000');
	$('.foot li:eq(3)').removeClass('active4').addClass('li-4').css('color','#000');
	$('.foot li:eq(4)').removeClass('active5').addClass('li-5').css('color','#000');
});
$('.foot li:eq(1)' ).click(function(){
	window.location.href = '../booking/booking.html';
	$(this ).removeClass('li-2').addClass('active2').css('color','red');
	$('.foot li:eq(0)').removeClass('active1' ).addClass('li-1').css('color','#000');
	$('.foot li:eq(3)').removeClass('active4').addClass('li-4').css('color','#000');
	$('.foot li:eq(4)').removeClass('active5').addClass('li-5').css('color','#000');
});
$('.foot li:eq(2)' ).click(function(){
	window.location.href = '../release/release.html';
});
$('.foot li:eq(3)' ).click(function(){
	window.location.href = '../news/news.html';
	$(this ).removeClass('li-4').addClass('active4' ).css('color','red');
	$(this ).find('div').addClass('num');
	$('.foot li:eq(0)').removeClass('active1').addClass('li-1').css('color','#000');
	$('.foot li:eq(1)').removeClass('active2').addClass('li-2').css('color','#000');
	$('.foot li:eq(4)').removeClass('active5').addClass('li-5').css('color','#000');
});
$('.foot li:eq(4)' ).click(function(){
	if(sessionStorage.name === 'success'){
		window.location.href = '../me/loginsuccess.html';
	}else{
		window.location.href = '../me/me.html';
	}
	
	$(this ).removeClass('li-5').addClass('active5').css('color','red');
	$('.foot li:eq(0)').removeClass('active1').addClass('li-1').css('color','#000');
	$('.foot li:eq(1)').removeClass('active2').addClass('li-2').css('color','#000');
	$('.foot li:eq(3)').removeClass('active4').addClass('li-4').css('color','#000');
});