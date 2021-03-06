---
template: post
title: 【JavaScript】マウスカーソルデザインを変更する方法
slug: javascript-custom-cursor
draft: false
priority: 0
date: 2019-04-10T16:37:25.425Z
description: |
  【HTML+JavaScript】JavaScriptでカーソルデザインを変更するサンプルコードを掲載しています。
category: JavaScript
tags:
  - プログラミング
---
このスクリプトは、マウスカーソルを十字に変更します。

このスクリプトを修正して、デザインや特殊効果を追加することができます。

イメージ（スキン）ファイルを変更することで、マウスカーソルの形状や色を変更することもできます。

<!--StartFragment-->

### 動作サンプル

![javascript](/media/javascript-custom-cursor.gif "javascript")

<!--EndFragment-->

<!--StartFragment-->

### コード

```
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <title>プロジェクト</title>
    <script type="text/javascript">
const skinableCursor = {
	// publicプロパティ。カーソルデザインを変更する場合はここで変更します。
	skinPath : 'skin.gif',

	// privateプロパティ。ブラウザを検出します。
	IE : ( document.all && document.getElementById && !window.opera ),
	FF : (!document.all && document.getElementById && !window.opera),
	OP : (document.all && document.getElementById && window.opera),

	// privateプロパティ。カーソルの属性。
	cursor : {
		lt : { x : '0px',	y : '0px',	w : '19px',	h : '26px' ,	dx : -22,	dy : -22 },
		rt : { x : '19px',	y : '0px',	w : '26px',	h : '19px' ,	dx : -3,	dy : -22 },
		rb : { x : '26px',	y : '19px',	w : '19px',	h : '26px' ,	dx : 4,		dy : -3 },
		lb : { x : '0px',	y : '26px',	w : '26px',	h : '19px' ,	dx : -22,	dy : 4 }
	},

	// privateメソッド。初期化。
	init : function () {

		skinableCursor.cursor.browserDelta = (skinableCursor.IE ? 2 : 0);

		if ( skinableCursor.FF || skinableCursor.OP ) {
			document.addEventListener("DOMContentLoaded", skinableCursor.domReady, false);
		}

		if ( skinableCursor.IE ) {

			document.write("<scr" + "ipt id=__ieinit defer=true " +
				"src=//:><\/script>");

			const script = document.getElementById("__ieinit");
			script.onreadystatechange = function() {
				if ( this.readyState != "complete" ) return;
				this.parentNode.removeChild( this );
				skinableCursor.domReady();
			};

			script = null;
		}
	},

	// privateメソッド。
	domReady : function () {

		skinableCursor.create();

		if ( skinableCursor.FF || skinableCursor.OP ) {
			const s = document.createElement('style');
			s.innerHTML = '* { cursor: inherit; } html { height: 100%; } body, html { cursor: crosshair; }';
			document.body.appendChild(s);
			document.addEventListener('mousemove', skinableCursor.move, false);
		}

		if ( skinableCursor.IE ) {
			const s = document.createStyleSheet()
			s.addRule("*", "cursor: inherit");
			s.addRule("body", "cursor: crosshair");
			s.addRule("html", "cursor: crosshair");
			document.attachEvent('onmousemove', skinableCursor.move);
		}

		const anchors = document.getElementsByTagName('a');
		for (x = 0; x < anchors.length; x++) {
			if ( skinableCursor.FF || skinableCursor.OP ) {
				anchors[x].addEventListener('mousemove', skinableCursor.events.anchor, false);
				anchors[x].addEventListener('mouseout', skinableCursor.events.show, false);
			}

			if ( skinableCursor.IE ) {
				anchors[x].attachEvent('onmousemove', skinableCursor.events.anchor);
				anchors[x].attachEvent('onmouseout', skinableCursor.events.show);
			}
		}

	},

	// privateメソッド。カーソルの作成。
	create : function () {

		function create(el, d) {
			el.style.position = 'absolute';
			el.style.overflow = 'hidden';
			el.style.display = 'none';
			el.style.left = d.x;
			el.style.top = d.y;
			el.style.width = d.w;
			el.style.height = d.h;
			if ( skinableCursor.IE ) {
				el.innerHTML = '<img src="' + skinableCursor.skinPath + '" style="margin: -' + d.y + ' 0px 0px -' + d.x + '">';
			} else {
				el.style.background = 'url(' + skinableCursor.skinPath + ') -' + d.x + ' -' + d.y;
			}
			return el;
		}

		const c = skinableCursor.cursor;
		c.lt.el = create(document.createElement('div'), c.lt);
		c.rt.el = create(document.createElement('div'), c.rt);
		c.rb.el = create(document.createElement('div'), c.rb);
		c.lb.el = create(document.createElement('div'), c.lb);

		document.body.appendChild(c.lt.el);
		document.body.appendChild(c.rt.el);
		document.body.appendChild(c.rb.el);
		document.body.appendChild(c.lb.el);

	},


	// privateメソッド。カーソルの移動。
	move : function (e) {

		function pos(el, x, y) {
			el.el.style.left = x + el.dx + 'px';
			el.el.style.top = y + el.dy + 'px';
		}

		function hide(el, x, y) {
			const w = document.documentElement.clientWidth;
			const h = document.documentElement.clientHeight;
			const deltaX = w - (x + el.dx + parseInt(el.w) - skinableCursor.cursor.browserDelta);
			const deltaY = h - (y + el.dy + parseInt(el.h) - skinableCursor.cursor.browserDelta);
			if (!skinableCursor.noSkin) {
				el.el.style.display = deltaX > 0 ? (deltaY > 0 ? 'block' : 'none') : 'none';
			}
		}

		const p = skinableCursor.getMousePosition(e);
		const s = skinableCursor.getScrollPosition();
		const c = skinableCursor.cursor;
		const x = p.x + s.x - c.browserDelta;
		const y = p.y + s.y - c.browserDelta;

		hide(c.lt, p.x, p.y);
		hide(c.rt, p.x, p.y);
		hide(c.rb, p.x, p.y);
		hide(c.lb, p.x, p.y);

		pos(c.lt, x, y);
		pos(c.rt, x, y);
		pos(c.rb, x, y);
		pos(c.lb, x, y);

	},

	// privateメソッド。マウスの位置を返す。
	getMousePosition : function (e) {

		e = e ? e : window.event;
		const position = {
			'x' : e.clientX,
			'y' : e.clientY
		}

		return position;

	},

	// privateメソッド。ドキュメントのスクロール位置を取得する。
	getScrollPosition : function () {

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

	},

	// privateプロパティ / メソッド。
	events : {

		anchor : function (e) {
			skinableCursor.noSkin = true;
			document.body.style.cursor = 'pointer';

			const c = skinableCursor.cursor;
			c.lt.el.style.display = 'none';
			c.rt.el.style.display = 'none';
			c.rb.el.style.display = 'none';
			c.lb.el.style.display = 'none';

		},

		show : function () {
			skinableCursor.noSkin = false;
			document.body.style.cursor = 'crosshair';
		}

	}

}

skinableCursor.init();
	</script>
</head>
<body>
</body>
</html>
```

<!--EndFragment-->