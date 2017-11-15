// jquery



// js
window.onload = function(){
	var oBack = document.getElementsByClassName("back")[0];
	var timer = null;
    var isTop = true;
    var windowW = window.innerWidth;

	window.onscroll = function(){
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (osTop >= 400 && windowW >768) {
            oBack.style.display = 'block';
        } 
        else {
            oBack.style.display = 'none';
        }
        if (!isTop) {
            clearInterval(timer);
        }
        isTop = false;

	}

	oBack.onclick = function(){

		timer = setInterval(function () {

            var osTop = document.documentElement.scrollTop || document.body.scrollTop;

            var ispeed = Math.ceil(osTop / 6);
            document.documentElement.scrollTop = document.body.scrollTop = osTop - ispeed;
            isTop = true;
            if (osTop == 0) {
                clearInterval(timer);
            }
        }, 30);

	}

}

