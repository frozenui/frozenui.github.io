$(function(){
	var $ = jQuery;

    var cssCaseList = $('#cssCase'),
        apiCaseList = $('#apiCase');

    $.ajax({
        type: "POST",
        url: "http://wevas.info/frozen_case/index.php/Home/Index/getData",
        dataType: 'json'
    })
    .done(function(data) {
        var length = data.length;

        for (var i=0; i<length; i++) {

            if (data[i].category == 1) {       // CSS3 动效
                cssCaseList.append(
                    '<li>'+
                        '<div class="pic">'+
                            '<img alt="" src="http://wevas.info/frozen_case/Public/'+data[i].img+'.jpg" width="160">'+
                        '</div>'+
                        '<div class="cwfqr" data-url="'+data[i].url+'">'+
                            '<a href="'+data[i].url+'" target="_blank">'+
                                '<div class="qr"></div>'+
                            '</a>'+
                        '</div>'+
                        '<div class="desc">'+
                            '<div class="tit">'+data[i].title+'</div>'+
                            '<div class="author">'+data[i].name+'</div>'+
                        '</div>'+
                    '</li>'
                )
            }

            else if (data[i].category == 2) {      // 硬件 API
                apiCaseList.append(
                    '<li>'+
                        '<div class="pic">'+
                            '<img alt="" src="http://wevas.info/frozen_case/Public/'+data[i].img+'.jpg" width="160">'+
                        '</div>'+
                        '<div class="cwfqr" data-url="'+data[i].url+'">'+
                            '<a href="'+data[i].url+'" target="_blank">'+
                                '<div class="qr"></div>'+
                            '</a>'+
                        '</div>'+
                        '<div class="desc">'+
                            '<div class="tit">'+data[i].title+'</div>'+
                            '<div class="author">'+data[i].name+'</div>'+
                        '</div>'+
                    '</li>'
                )
            }
        }
    })
    .fail(function() {
        console.error('fail');
    })
    .always(function() {
        initCaseQrcode('.cwfqr');
        function initCaseQrcode(element) {
            $(element).each(function(index,el){
                var url = $(el).attr("data-url");
                var width = $(this).width();
                var height = $(this).height()-5;
                $(this).find(".qr").qrcode({width: width, height: height, text: url});
            });
        }
    });




});







