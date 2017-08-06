---
layout: simple
title: 快速开始
description:
redirect_from:
toc: true
---

<!-- Bootstrap is the world's most popular framework for building responsive, mobile-first sites and applications. Inside you'll find high quality HTML, CSS, and JavaScript to make starting any project easier than ever. -->

<!-- Here's how to quickly get started with the Bootstrap CDN and a template starter page. -->

## 简介

FrozenUI 是一套基于移动端的UI库。它非常轻量、精美，遵从手机QQ设计规范，提供了表单、对话框、列表等常用组件。此外，FrozenUI还提供文字截断、1px边框、rem、两端留白等常用场景的解决方案。CSS做得更模块化和颗粒化，使用sass编写CSS代码，你完全可以按照实际情况按需加载。


## 获取 FrozenUI

**方式一**：点击链接下载文件
<a href="{{ site.download.source }}" class="">{{ site.download.source }} </a>
<br><br>
**方式二**：在页面上引入样式文件（推荐）

{% highlight html %}
<link rel="stylesheet" href="http://i.gtimg.cn/vipstyle/qui/2.0.0/css/qui.css">
{% endhighlight %}

## 如何使用

通过以上方式获取到 FrozenUI 后，在页面中引入后即可使用。以 FrozenUI 的按钮为例：

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0, user-scalable=no">
        <title>FrozenUI Demo</title>
        <!-- 引入 FrozenUI -->
        <link rel="stylesheet" href="http://i.gtimg.cn/vipstyle/qui/2.0.0/css/qui.css"/>
    </head>
    <body>
        <!-- 使用 -->
        <div class="ui-btn-wrap">
            <button class="ui-btn">常规按钮</button>
            <button class="ui-btn disabled">不可点击按钮</button>
        </div>
    </body>
</html>
{% endhighlight %}

更多的使用示例，请参考 [http://frozenui.github.io/frozenui/demo/index.html](http://frozenui.github.io/frozenui/demo/index.html)

## 如何开发
FrozenUI 使用 Grunt 作为编译系统，在你开发编译之前需要安装 [node.js](https://nodejs.org/en/)（npm 已经包含在内) 和 [Grunt](https://gruntjs.com/) 。

{% highlight plaintext %}
git clone https://github.com/frozenui/frozenui.git
cd frozenui
npm install
grunt
{% endhighlight %}

运行 grunt 命令，会监听src目录下所有文件的变更，并且默认会在8080端口启动服务器，然后在浏览器打开 http://localhost:8080/。
<br><br>
项目 clone 到本地后，可以看到文件组织结构，具体文件说明如下：

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


## 使用进阶

FrozenUI 是一个非常灵活、轻量的组件库，遵循模块化和颗粒化的理念，除了上述中的常规使用，我们还有一些进阶的用法。

### 1、组件按需引用
按照项目实际需要来引入对应的组件，例如：项目中只有按钮和弹窗，那我就单独引入 button 和 dialog 组件即可。那么可以在项目 index.scss 这样编写：

{% highlight sass %}
@import "path/src/sass/component/button/btn";
@import "path/src/sass/component/dialog/dialog";
{% endhighlight %}

通过按需引用的方法，可以使得你的项目减少一些没必要的代码，从而减少样式体积。

### 2、自定义组件参数
FrozenUI 有一个配置所有组件的 variables 文件夹，如果项目中需要更改某一些通用参数，那么可以通过修改 variables 内的文件来解决，例如：统一修改所有按钮的颜色，那么可以修改 <code>src/scss/base/variables/component.scss</code> 文件，修改其中的 button 相关样式，演示代码如下：
{% highlight sass %}
$button-bg-color:   #333;
$button-text:       #fff;
{% endhighlight %}

通过该方法，可以让多页面场景更高效管理。常见的一键换肤功能也可以通过此方法快速实现。
