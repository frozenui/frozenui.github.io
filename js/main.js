$(function () {
    function changeDemo(id) {
        $('.demo-iframe').find('div[id]').hide();
        $('.demo-iframe').find('#'+id).show();
    }

    //  初始化剪贴板功能
    function initCopyToBoard(element) {
        $(element).each(function () {
            var element = $(this);
            var client = new ZeroClipboard(element);
            var oldText = $(element).text();
            var newText = '已复制';
            client.on( "ready", function( readyEvent ) {
                client.on( "aftercopy", function( event ) {
                    console.log(event.data["text/plain"] );
                    $(element).text(newText);
                    setTimeout(function () {
                        $(element).text(oldText);
                    }, 3000);
                } );
            } );
        });
    }

    // 初始化拖拽
    function initDraggable (element) {
        var $element = $(element);
        var isDraggable = false;
        var diffX = 0;
        var diffY = 0;
        function mousemoveHandle (e) {
            if (isDraggable) {
                var left = e.clientX - diffX;
                var top = e.clientY - diffY;
                $element.css({
                    left: left
                });
            }
        }
        $element.on('mousedown', function (e) {
            isDraggable = true;
            diffX = e.clientX - $element.offset().left;
            diffY = e.clientY - $element.offset().top;

            $element.on('mousemove', mousemoveHandle);
        });
        $element.on('mouseup', function (e) {
            isDraggable = false;
            diffX = 0;
            diffY = 0;

            $element.off('mousemove', mousemoveHandle);
        });
        $element.on('mouseout', function (e) {
            isDraggable = false;
            $element.off('mousemove', mousemoveHandle);
        });
    }

    // 初始化代码高亮
    function initHighlight () {
        hljs.configure({
            tabReplace: '  '
        });
        hljs.initHighlightingOnLoad();
    }

    function initCaseQrcode(element) {
        $(element).each(function(index,el){
            var url=$(el).attr("data-url");
            var width = $(this).width();
            var height = $(this).height();
            $(this).find(".qr").qrcode({width: width, height: height, text: url});
        });
    }

    function bindEvents () {
        // 滚动监听
        var timmer;
        var hideIframe = false;
        $(window).on('scroll', function () {
            clearTimeout(timmer);
            timmer = setTimeout(function () {
                if ($(window).scrollTop() > 300) {
                    $('.scroll-top-btn, .hide-demo-btn').fadeIn();

                    !hideIframe && $('.demo-iframe-wrap').fadeIn();

                    var id = $('.side-highlight').data('id');
                    changeDemo(id);
                } else {
                    $('.scroll-top-btn, .hide-demo-btn').hide();
                    $('.demo-iframe-wrap').hide();
                }
            }, 50);
        });

        // 隐藏手机
        $('.hide-demo-btn').on('click', function (e) {
            e.preventDefault();
            var display = $('.demo-iframe-wrap').css('display');
            $('.demo-iframe-wrap').toggle();
            var text = (display === 'none') ? '隐藏 Demo' : '显示 Demo';
            hideIframe = (display === 'none') ? false : true;
            $(this).text(text);
        });


        $('.doc-demo-link').on('mouseover', function (e) {
            e.preventDefault();
            var href =  $(this)[0].href; // 原生js 的 href 才是绝对路径
            var panelHeight  = $(this).parent().height();
            var height = 300;
            $(this).siblings('.doc-qrcode').empty().qrcode({width: height,height: height,text: href});
            $('.demo-iframe-wrap').hide();
            $(this).siblings('.doc-qrcode').show();
        });
        $('.doc-demo-link').on('mouseout', function (e) {
            $(this).siblings('.doc-qrcode').hide();
            $('.demo-iframe-wrap').show();
        });
    }

    var $ = jQuery;
    seajs.config({
        base: "http://frozenui.github.io/static/sea-modules/",
        alias: {
            "$": "jquery/jquery/2.1.0/jquery.js",
            "sticky": "arale/sticky/1.3.1/sticky",
            "side": "http://frozenui.github.io/static/side",
            "handlebars": "gallery/handlebars/1.0.2/handlebars"
        }
    });
    seajs.use(['sticky', 'side'], function (Sticky, Side) {
        if (document.body.clientWidth > 980) {
            Sticky('.side-area', 20);
        }
        Side.init();
        initHighlight();
        initCopyToBoard('.doc-copy-code-btn');
        initDraggable('.demo-iframe-wrap');
        initCaseQrcode('.cwfqr');
        bindEvents();
    });

});
