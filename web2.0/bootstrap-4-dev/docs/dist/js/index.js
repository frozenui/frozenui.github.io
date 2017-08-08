(function(window,undefined){
	$(window).on('scroll',function(){
		var wst = $(window).scrollTop();
		var length = $('main h2').length;

		for(var i = 0;i<length;i++){
			if($('main h2').eq(i).offset().top>wst){
					$('#markdown-toc li').removeClass('active');
					$('#markdown-toc li').eq(i-1).addClass('active');
					console.log(1);
					break;
			}
		}

	})

})(window,undefined)