/**
 * Created by Administrator on 2016/11/13.
 */
function slideDelete( classId )
{
	var x, y,x1,y1, dx;
	var dom = document.getElementsByClassName(classId);
	for(var i= 0,lg=dom.length;i<lg;i++){
		dom[i].addEventListener('touchstart', function(e){
			x = e.targetTouches[0].screenX;
			y = e.targetTouches[0].screenY;
			var oldLf = parseInt(this.getAttribute('data-left'));
			dx = !oldLf ? 0 : oldLf;
		});
		dom[i].addEventListener('touchmove', function(e){
			x1 = e.targetTouches[0].screenX;
			y1 = e.targetTouches[0].screenY;
			var diff = x1 - x;
			var change = diff + dx;
			if(change < -100){
				change = -100;
			}else if(change > 0){
				change = 0;
			}else{
				change = 0;
			}
			this.setAttribute('data-left', change);
			this.style.transform = 'translate('+ change +'px, 0)';
		});
		//	dom[i].addEventListener('touchend', function(e){
		//		console.log(x,y,x1,y1);
		//	});
	}
}
$(".del-btn").click(function(){
	$(this ).parent().hide();
});