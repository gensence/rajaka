---
template: post
title: 【JavaScript】右クリックメニューを実装する
slug: javascript-context-menu
draft: false
priority: 0
date: 2020-01-08T06:12:53.205Z
description: JavaScriptでコンテキストメニューを表示するサンプル
category: JavaScript
tags:
  - プログラミング
---
contextmenu.jsは固有項目のコンテキストメニューを表示するサンプルです。

<!--StartFragment-->

### 動作サンプル

![javascript](/media/javascript-contect-menu.gif "javascript")

<!--EndFragment-->

<!--StartFragment-->

### index.html  コード

```
<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="utf-8">
	<title>コンテキストメニュー</title>
	<script type="text/javascript" src="contextmenu.js"></script>
	<script type="text/javascript">
		SimpleContextMenu.setup({'preventDefault':true, 'preventForms':false});
		SimpleContextMenu.attach('container', 'CM1');
	</script>
	<style type="text/css">
ul.SimpleContextMenu {
	display: none;
	position: absolute;
	margin: 0px;
	padding: 0px;
	font-family: verdana;
	font-size: 12px;
	list-style-type: none;
	border-top: 1px solid #000000;
	border-left: 1px solid #000000;
	border-right: 1px solid #000000;
}
ul.SimpleContextMenu li {
	border-bottom: 1px solid #000000;
}
ul.SimpleContextMenu li a {
	display: block;
	width: 40px;
	padding: 2px 10px 3px 10px;
	text-decoration: none;
	color: #0033cc;
	background: #eeeeee;
}
ul.SimpleContextMenu li a:hover {
	text-decoration: none;
	color: #ffffff;
	background: #0033cc;
}
div.container {
	width: 50px;
	text-align: center;
	color: #0033cc;
	border: solid 1px #0033cc;
	padding: 0.5em;
	border-radius: 0.5em;
}
	</style>
</head>
<body>
	<ul id="CM1" class="SimpleContextMenu">
		<li><a href="#">複製</a></li>
		<li><a href="#">修正</a></li>
		<li><a href="#">削除</a></li>
	</ul>
	<div class="container">A</div>
	<div class="container">B</div>
	<div class="container">C</div>
</body>
</html>
```

<!--EndFragment-->

<!--StartFragment-->

### contectmenu.js  コード

```
var SimpleContextMenu = {

	// private属性。
	_menus : new Array,
	_attachedElement : null,
	_menuElement : null,
	_preventDefault : true,
	_preventForms : true,

	// publicメソッド。コンテキストメニュー全体を設定します。
	setup : function (conf) {

		if ( document.all && document.getElementById && !window.opera ) {
			SimpleContextMenu.IE = true;
		}

		if ( !document.all && document.getElementById && !window.opera ) {
			SimpleContextMenu.FF = true;
		}

		if ( document.all && document.getElementById && window.opera ) {
			SimpleContextMenu.OP = true;
		}

		if ( SimpleContextMenu.IE || SimpleContextMenu.FF ) {

			document.oncontextmenu = SimpleContextMenu._show;
			document.onclick = SimpleContextMenu._hide;

			if (conf && typeof(conf.preventDefault) != "undefined") {
				SimpleContextMenu._preventDefault = conf.preventDefault;
			}

			if (conf && typeof(conf.preventForms) != "undefined") {
				SimpleContextMenu._preventForms = conf.preventForms;
			}

		}

	},

	// publicメソッド。特定のクラス名にコンテキストメニューをアタッチします。
	attach : function (classNames, menuId) {

		if (typeof(classNames) == "string") {
			SimpleContextMenu._menus[classNames] = menuId;
		}

		if (typeof(classNames) == "object") {
			for (x = 0; x < classNames.length; x++) {
				SimpleContextMenu._menus[classNames[x]] = menuId;
			}
		}

	},

	// privateメソッド。表示するコンテキストメニューを取得します。
	_getMenuElementId : function (e) {

		if (SimpleContextMenu.IE) {
			SimpleContextMenu._attachedElement = event.srcElement;
		} else {
			SimpleContextMenu._attachedElement = e.target;
		}

		while(SimpleContextMenu._attachedElement != null) {
			var className = SimpleContextMenu._attachedElement.className;

			if (typeof(className) != "undefined") {
				className = className.replace(/^\s+/g, "").replace(/\s+$/g, "")
				var classArray = className.split(/[ ]+/g);

				for (i = 0; i < classArray.length; i++) {
					if (SimpleContextMenu._menus[classArray[i]]) {
						return SimpleContextMenu._menus[classArray[i]];
					}
				}
			}

			if (SimpleContextMenu.IE) {
				SimpleContextMenu._attachedElement = SimpleContextMenu._attachedElement.parentElement;
			} else {
				SimpleContextMenu._attachedElement = SimpleContextMenu._attachedElement.parentNode;
			}
		}

		return null;

	},

	// privateメソッド。コンテキストメニューを表示します。
	_show : function (e) {

		SimpleContextMenu._hide();
		var menuElementId = SimpleContextMenu._getMenuElementId(e);

		var m = SimpleContextMenu._getMousePosition(e);
		var s = SimpleContextMenu._getScrollPosition(e);

		SimpleContextMenu._menuElement = document.getElementById(menuElementId);
		SimpleContextMenu._menuElement.style.left = m.x + s.x + 'px';
		SimpleContextMenu._menuElement.style.top = m.y + s.y + 'px';
		SimpleContextMenu._menuElement.style.display = 'block';
		return false;

	},

	// privateメソッド。コンテキストメニューを非表示にします。
	_hide : function () {

		if (SimpleContextMenu._menuElement) {
			SimpleContextMenu._menuElement.style.display = 'none';
		}

	},

	// privateメソッド。マウスの位置を返します。
	_getMousePosition : function (e) {

		e = e ? e : window.event;
		var position = {
			'x' : e.clientX,
			'y' : e.clientY
		}

		return position;

	},

	// privateメソッド。ドキュメントのスクロール位置を取得します。
	_getScrollPosition : function () {

		var x = 0;
		var y = 0;

		if( typeof( window.pageYOffset ) == 'number' ) {
			x = window.pageXOffset;
			y = window.pageYOffset;
		} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
			x = document.documentElement.scrollLeft;
			y = document.documentElement.scrollTop;
		} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
			x = document.body.scrollLeft;
			y = document.body.scrollTop;
		}

		var position = {
			'x' : x,
			'y' : y
		}

		return position;

	}

}
```

<!--EndFragment-->