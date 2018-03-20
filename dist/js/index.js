(function(window, undefined) {

  function scroll() {

    $(window).on('scroll', function() {
      var wst = $(window).scrollTop() + $(window).height() / 2;
      var length = $('main > h2').length;
      var h3length = $('main >h3').length;
      // console.log(wst);
      for (var i = 0; i < length - 1; i++) {
        if ($('main > h2').eq(i).offset().top < wst && $('main > h2').eq(i + 1).offset().top > wst) {
          $('#markdown-toc >li').removeClass('active');
          $('#markdown-toc >li').eq(i).addClass('active');
          break;
        }
        if ($('main > h2').eq(length - 1).offset().top < wst) {
          $('#markdown-toc >li').removeClass('active');
          $('#markdown-toc >li').eq(length - 1).addClass('active');
        }
      }
      for (var i = 0; i < h3length - 1; i++) {
        if ($('main > h3').eq(i).offset().top < wst && $('main > h3').eq(i + 1).offset().top > wst) {
          $('#markdown-toc >li ul li').removeClass('active');
          $('#markdown-toc >li ul li').eq(i).addClass('active');
          break;
        }
        if ($('main > h3').eq(length - 1).offset().top < wst) {
          $('#markdown-toc >li ul li').removeClass('active');
          $('#markdown-toc >li ul li').eq(length - 1).addClass('active');
        }
      }




    });
  }
  scroll()
  var markdownli = $('#markdown-toc > li')
  markdownli.on('click', function() {
    markdownli.removeClass('active');
    $(this).addClass('active')
  })


  function qrcode() {

    var qrcode = new QRCode("qrbtn", {
      text: "http://119.29.8.64/vipstyle/frozenui/demo/html/component/button/btn.html",
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });

    var qrcodeactionsheet = new QRCode("qractionsheet", {
      text: "http://119.29.8.64/vipstyle/frozenui/demo/html/component/actionsheet/actionsheet.html",
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });

    var qrcodepanel = new QRCode("qrpanel", {
      text: "http://119.29.8.64/vipstyle/frozenui/demo/html/component/panel/panel.html",
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
     var qrcodeinput = new QRCode("qrinput", {
      text: "http://119.29.8.64/vipstyle/frozenui/demo/html/component/form/form.html",
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });

    var qrcodelist = new QRCode("qrlist", {
      text: "http://119.29.8.64/vipstyle/frozenui/demo/html/component/list/list.html",
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });

    var qrcodetip = new QRCode("qrtips", {
      text: "http://119.29.8.64/vipstyle/frozenui/demo/html/component/tips/tips.html",
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });

     var qrcodegrid = new QRCode("qrgrid", {
      text: "http://119.29.8.64/vipstyle/frozenui/demo/html/component/grid/grid.html",
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });

    var qrcodedialog = new QRCode("qrdialog", {
      text: "http://119.29.8.64/vipstyle/frozenui/demo/html/component/dialog/dialog.html",
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
     var qrcodenotice = new QRCode("qrnotice", {
      text: "http://119.29.8.64/vipstyle/frozenui/demo/html/component/notice/notice.html",
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });

    var qrcodefeeds = new QRCode("qrfeeds", {
      text: "http://119.29.8.64/vipstyle/frozenui/demo/html/component/feeds/feeds.html",
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });

    var qrcodeprogress = new QRCode("qrprogress", {
      text: "http://119.29.8.64/vipstyle/frozenui/demo/html/component/progress/progress.html",
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });

    var qrcodesubscript = new QRCode("qrsubscript", {
      text: "http://119.29.8.64/vipstyle/frozenui/demo/html/component/decorate/subscript.html",
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
    var qrcodesearch = new QRCode("qrsearch", {
      text: "http://119.29.8.64/vipstyle/frozenui/demo/html/component/search/searchbar.html",
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
    var qrcodetab = new QRCode("qrtab", {
      text: "http://119.29.8.64/vipstyle/frozenui/demo/html/component/tab/tab.html",
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H 
    });


  }
  qrcode();

})(window, undefined)
