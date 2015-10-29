/*20151028 by Irene*/
(function($) {
   //ajax方法
    $("#loading").ajaxStart(function(){ 
        $("#none").css("display","none");
        $("#loading").css("display","block");
    }); 
    $("#loading").ajaxSuccess(function(){ 
        $("#loading").css("display","none");
    }); 
    var cname;
    var number;
    var oncenum = 9;//设置每次加载值
    //生成二维码
    function initCaseQrcode(element) {
        $(element).each(function(index, el) {
            var $qr = $(this).find(".qr"),
                url = $(el).find(".case-link").attr("href"),
                width = $qr.width(),
                height = $qr.height();
            $qr.qrcode({
                width: width,
                height: height,
                text: url
            });
        });
    }
    //获取菜单
    $.ajax({
        type: "POST",
        url: "http://wevas.info/frozen_case/Home/Index/getCategory",
        dataType: 'json',
        timeout: 9999999
    })
    .done(function(data) {
        var category = data;
        var j= category.length;
        for(var i=0; i<j; i++){
            $("#menu").append('<li><a href="#">'+category[i].name+'</a></li>').find('a').click(function(){
              
            });
        }
    })
    .fail(function() {
        alert('获取失败，请刷新重试。');
    })
    .always(function() {
    });
    //绑定点击事件
    $("#menu li a").live("click", function(){
        $("#menu li").removeClass('current');
        $(this).parent('li').addClass('current');
         cname = $(this).text();
         $(".caselist").empty();
           $(".load-more span").text('Loading...');
         getData(cname,1);
    });
    //初次获取；
    var name ='';
    getData(name,1);
    //获取数据
    function getData(name,num){
      if(name == '全部'){
        name = '';
      }
      
      var maxnum =  oncenum;
      $.ajax({
         type: "POST",
         url: "http://wevas.info/frozen_case/index.php/Home/Index/getData",
         dataType: 'json',
         timeout: 9999999,
         data: {
         'page':num,
         'num': maxnum,
         'category': name
         }
      })
    .done(function(data) {
        if(data.length == 1 && JSON.stringify(data[0]).indexOf("thumb") == -1){//没有数据
            $("#none").css("display","block");
        }
        else{//有数据
            var datalist = data;
            var j = datalist.length;
            for(var i=0; i<j; i++){
            var imgname = datalist[i].thumb.split(",");
            if(datalist[i].imgPath == undefined){ 
              datalist[i].imgPath ='http://wevas.info/frozen_case/Public/'; 
            }
            $(".caselist").append('<div class="item"><div class="thumb"><a class="case-link" target="_blank" href="'+datalist[i].url+'"><img src="'+datalist[i].imgPath+imgname[0]+'.jpg" alt=""><img src="'+datalist[i].imgPath+imgname[1]+'.jpg" alt=""><img src="'+datalist[i].imgPath+imgname[2]+'.jpg" alt=""><div class="qr"></div><div class="mask"></div></a></div><div class="meta"><div class="title"><a href="'+datalist[i].url+'" target="_blank">'+datalist[i].title+'</a><span class="author"><a target="_blank" href="'+datalist[i].homepage+'"><i></i>'+datalist[i].name+'</a></span></div><div class="desc">'+datalist[i].description+'</div></div></div>');
        }
        var qrlen =  $(".qr").length;
        for(var k = 0; k<qrlen; k++){
           if($($(".qr")[k]).html() == ""){
                  var items = $($(".qr")[k]).parents('.item');
                  initCaseQrcode(items);
           }
        }
      }
    })
    .fail(function() {
        alert('获取失败，请刷新重试。');
    })
    .always(function() {
    });
    }

    /*
     * 函数节流（计算短时间内点击数）
     * @param {function} fu - 要执行的函数 
     * @param {int} delay   - 时间阈值
     *
     */
    function throttle(method, delay, context) {
        clearTimeout(method.tId);
        method.tId = setTimeout(function(){
            method.call(context);
        }, delay);
    }



    // 滚动至底部加载更多

    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        var scrollHeight = $(document).height();
        var windowHeight = $(this).height();

        function getMoreData() {
          if (scrollTop + windowHeight >= scrollHeight) {
             var k = $(".caselist .item").length;
             if(k%oncenum > 0){
                 $("#none").css("display","block");
             }
             else{
                 $(".load-more span").text('Load more...');
                 var mname = $(".current a").text();
                 var mnum = parseInt(k/oncenum);
                 if(mnum >= 1){
                    mnum = mnum+1;
                 }
                 getData(mname, mnum);
             }
           }
        }

        throttle(getMoreData, 500, this)
    });

})(jQuery);


