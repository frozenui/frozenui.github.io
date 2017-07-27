---
layout: simple
title: 快速开始
description:
redirect_from:
  - /docs/4.0/getting-started/
  - /docs/4.0/
  - /docs/
toc: true
---

<!-- Bootstrap is the world's most popular framework for building responsive, mobile-first sites and applications. Inside you'll find high quality HTML, CSS, and JavaScript to make starting any project easier than ever. -->

<!-- Here's how to quickly get started with the Bootstrap CDN and a template starter page. -->

## 简介

FrozenUI是什么？

FrozenUI是一套基于移动端的UI库。它非常轻量、精美，遵从手机QQ设计规范，提供了表单、对话框、列表等常用组件。此外，FrozenUI还提供文字截断、1px边框、rem、两端留白等常用场景的解决方案。CSS做得更模块化和颗粒化，使用sass编写CSS代码，你完全可以按照实际情况按需加载。


## 下载


**当前版本:** 2.0.0

<a href="{{ site.download.dist }}" class="btn btn-bd-purple" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download Bootstrap');">下载 FrozenUI</a>



## 目录结构

FrozenUI主要文件组织结构如下：

{% highlight plaintext %}
FrozenUI/
├── sass/
│   ├── base 通用支撑代码
│   ├── component 组件代码
│   ├── util 基础功能代码
│   └── 存放 .scss 源码
└── css/
│   ├── full.css
│   └── qui.css
└── font/
│   └── 存放 字体文件
└── img/
│   └── 存放 图片文件
└── demo/
│   └── 示例 从 src/ 自动生成
└── dist/
    └── 发布的文件


{% endhighlight %}


## 如何使用

在页面上引入样式文件即可使用：

{% highlight html %}
<!-- 引入样式 -->
<link rel="stylesheet" href="http://i.gtimg.cn/vipstyle/qui/2.0.0/css/qui.css">
{% endhighlight %}
