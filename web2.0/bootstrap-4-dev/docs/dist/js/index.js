(function(window, undefined) {

  function scroll() {
    $(window).on('scroll', function() {
      var wst = $(window).scrollTop();
      var length = $('main h2').length;

      console.log(wst);
      
      for (var i = 0; i < length; i++) {
        if ($('main h2').eq(i).offset().top > wst-20) {
          $('#markdown-toc li').removeClass('active');
          $('#markdown-toc li').eq(i - 1).addClass('active');
          break;
        }
      }
    });
  }
  scroll()
    var markdownli = $('#markdown-toc li')
  		markdownli.on('click', function() {
    		markdownli.removeClass('active');
    		$(this).addClass('active')
  		})

  function qrcode() {
    var qrcode = new QRCode("qrbtn", {
      text: "http://jindo.dev.naver.com/collie",
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  }
  qrcode();

})(window, undefined)
