---
template: post
title: 【JavaScript】右クリックメニューを表示する方法
slug: javascript-context-menu
draft: false
priority: 0
date: 2020-01-08T06:12:53.205Z
description: 【HTML+CSS+JavaScript】右クリックで展開・表示するメニューの実装方法とコピペで使えるコードを掲載。
category: JavaScript
tags:
  - プログラミング
---
右クリックで固有項目のコンテキストメニューを表示するサンプルを作成しました。

コピー＆ペーストですぐ使用できます。

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
		ContextMenu.setup({'preventDefault':true, 'preventForms':false});
		ContextMenu.attach('container', 'CM');
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
	<ul id="CM" class="SimpleContextMenu">
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

### contextmenu.js  コード

```
const ContextMenu = {

	// private属性。
	_menus : new Array,
	_attachedElement : null,
	_menuElement : null,
	_preventDefault : true,
	_preventForms : true,

	// publicメソッド。コンテキストメニュー全体を設定します。
	setup : function (conf) {

		if ( document.all && document.getElementById && !window.opera ) {
			ContextMenu.IE = true;
		}

		if ( !document.all && document.getElementById && !window.opera ) {
			ContextMenu.FF = true;
		}

		if ( document.all && document.getElementById && window.opera ) {
			ContextMenu.OP = true;
		}

		if ( ContextMenu.IE || ContextMenu.FF ) {

			document.oncontextmenu = ContextMenu._show;
			document.onclick = ContextMenu._hide;

			if (conf && typeof(conf.preventDefault) != "undefined") {
				ContextMenu._preventDefault = conf.preventDefault;
			}

			if (conf && typeof(conf.preventForms) != "undefined") {
				ContextMenu._preventForms = conf.preventForms;
			}

		}

	},

	// publicメソッド。特定のクラス名にコンテキストメニューをアタッチします。
	attach : function (classNames, menuId) {

		if (typeof(classNames) == "string") {
			ContextMenu._menus[classNames] = menuId;
		}

		if (typeof(classNames) == "object") {
			for (x = 0; x < classNames.length; x++) {
				ContextMenu._menus[classNames[x]] = menuId;
			}
		}

	},

	// privateメソッド。表示するコンテキストメニューを取得します。
	_getMenuElementId : function (e) {

		if (ContextMenu.IE) {
			ContextMenu._attachedElement = event.srcElement;
		} else {
			ContextMenu._attachedElement = e.target;
		}

		while(ContextMenu._attachedElement != null) {
			let className = ContextMenu._attachedElement.className;

			if (typeof(className) != "undefined") {
				className = className.replace(/^\s+/g, "").replace(/\s+$/g, "")
				const classArray = className.split(/[ ]+/g);

				for (i = 0; i < classArray.length; i++) {
					if (ContextMenu._menus[classArray[i]]) {
						return ContextMenu._menus[classArray[i]];
					}
				}
			}

			if (ContextMenu.IE) {
				ContextMenu._attachedElement = ContextMenu._attachedElement.parentElement;
			} else {
				ContextMenu._attachedElement = ContextMenu._attachedElement.parentNode;
			}
		}

		return null;

	},

	// privateメソッド。コンテキストメニューを表示します。
	_show : function (e) {

		ContextMenu._hide();
		const menuElementId = ContextMenu._getMenuElementId(e);

		const m = ContextMenu._getMousePosition(e);
		const s = ContextMenu._getScrollPosition(e);

		ContextMenu._menuElement = document.getElementById(menuElementId);
		ContextMenu._menuElement.style.left = m.x + s.x + 'px';
		ContextMenu._menuElement.style.top = m.y + s.y + 'px';
		ContextMenu._menuElement.style.display = 'block';
		return false;

	},

	// privateメソッド。コンテキストメニューを非表示にします。
	_hide : function () {

		if (ContextMenu._menuElement) {
			ContextMenu._menuElement.style.display = 'none';
		}

	},

	// privateメソッド。マウスの位置を返します。
	_getMousePosition : function (e) {

		e = e ? e : window.event;
		const position = {
			'x' : e.clientX,
			'y' : e.clientY
		}

		return position;

	},

	// privateメソッド。ドキュメントのスクロール位置を取得します。
	_getScrollPosition : function () {

		let x = 0;
		let y = 0;

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

		const position = {
			'x' : x,
			'y' : y
		}

		return position;

	}

}
```

<!--EndFragment-->