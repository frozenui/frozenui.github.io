---
layout: docs
title: 工具方法
description: 专注于移动web的UI框架，基于腾讯手机QQ规范.
group: function
redirect_from: "/function/"
---
## function

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

<!-- ## Examples -->
## 1px线

{% example html %}
  <ul class="ui-list-text border-list">
    <li class="ui-border-t">上边框</li>
    <li class="ui-border">边框</li>
    <li class="ui-border-b">下边框</li>
    <li class="ui-border-tb">上下边框</li>
    <li class="ui-border-l">左边框</li>
    <li class="ui-border-r">右边框</li>
    <li class="ui-border-radius">
        圆角边框
    </li>
</ul>
{% endexample %}


<!-- ## Examples -->
<!-- ## 占位图

{% example html %}
<section class="ui-placehold-img">
    <span style="background-image:url(http://placeholder.qiniudn.com/640x200)"></span>
</section>
{% endexample %} -->


## 文本大小
{% example html %}
<div class="ui-whitespace">
    <p>默认字体大小32px, 行高为1.5</p>
    <h1>标题：h1, 36px</h1>
    <h2>栏目：h2, 34px</h2>
    <h3>内文：导航，正文段落h3, 32px</h3>
    <h4>内文：人名歌名标题等h4, 32px</h4>
    <h5>副内文：h5, 同ui-txt-sub, 28px</h5>
    <h6>辅助文字：h6, 同ui-txt-tips, 24px</h6>
</div>
{% endexample %}



## 文字颜色
{% example html %}
<div class="ui-whitespace">
    <p class="ui-txt-default">主要内容色</p>
    <p class="ui-txt-white" style="background:#000">主要内容反色</p>
    <p class="ui-txt-info">辅助次要内容色</p>
    <p class="ui-txt-muted">时间，输入框，不可点击状态文本色</p>
    <p class="ui-txt-warning">警示，会员红名，搜索热词，同ui-txt-red</p>
    <p class="ui-txt-highlight">关键词高亮，同em</p>
    <p><a>链接颜色</a></p>
    <p class="ui-txt-feeds">feeds链接</p>
</div>
{% endexample %}

## 两端对齐
{% example html %}
<div class="ui-whitespace">
    <p class="ui-txt-justify-one">一行文本</p>
    <p class="ui-txt-justify">普通的多行文本内容：在首个《进击的巨人》预热视频中只是描述了一个巨人恰好拿起一人准备放进嘴巴里面，而另个场景则是超大型巨人附着浓重的烟雾将巨手拍下来。将于今年8月1日上映。</p>
</div>

{% endexample %}


## 超出截断
{% example html %}
<div class="ui-nowrap ui-whitespace">
    一行文字超出长度省略，内容文字超出长度省略，内容文字超出长度省略，内容文字超出长度省略，内容文字超出长度省略，内容文字超出长度省略，内容文字超出长度省略，内容文字超出长度省略，内容文字超出长度省略，内容文字超出长度省略，内容文字超出长度省略
</div>

{% endexample %}
