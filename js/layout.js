$(function() {
    var template_header = '<div class="head-content">'+
          '<div class="title-area">'+
              '<h1>'+
                  '<a href="/">Frozen UI</a>'+
              '</h1>'+                 
          '</div>'+
        
        '<div class="nav-area">'+
            '<a class="nav-toggle"></a>'+
                '<ol class="main-nav">'+
                    '<li><a href="/start.html">快速开始</a></li>'+
                    '<li><a href="/base.html">基础组件</a></li>'+
                    '<li><a href="/components.html">UI 组件</a></li>'+
                    '<li><a href="http://frozenui.github.io/frozenjs/">JS 插件</a></li>'+
                    '<li><a href="/case.html">动效库</a></li>'+
                    '<li><a href="/customize.html">下载</a></li>'+
                    '<li><a href="/frozenui/demo/index.html">Demo</a></li>'+
                    '<li><a href="https://github.com/frozenui/frozenui">GitHub</a></li>'+
                '</ol>'+
            '</div>'+
        '</div>'+
      '</div>';
    $('.head-area').html(template_header);
    var template_footer = '<div class="footer-content">'+
    		'<a href="https://github.com/frozenui">GitHub</a> • '+
            '<a href="http://lab.lepture.com/nico/">nico</a> • '+
            '<a href="https://github.com/frozenui/frozenui/issues">Issues</a> • '+
            '<a href="https://github.com/QQVIPTeam">QQVIP FD Team</a> • '+
            '<a href="http://alloyteam.com/">Alloyteam Team</a> • 交流群：427632094'+
        '</div>';
    $('.footer-area').html(template_footer); 
    $('.nav-toggle').click(function(e){
      $('.main-nav').toggleClass('slideDown');
    });
});