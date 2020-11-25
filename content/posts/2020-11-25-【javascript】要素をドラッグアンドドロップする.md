---
template: post
title: 【JavaScript】要素をドラッグアンドドロップする
slug: javascript-drag-and-drop
draft: false
priority: 0
date: 2018-07-27T06:55:47.961Z
description: Webページ上の要素や画像をドラッグする方法
category: JavaScript
tags:
  - プログラミング
---
![javascript](/media/javascript.png "javascript")

ウェブページ上の要素や画像をドラッグしたいと思ったことはありませんか？

下記のjavascriptのドラッグハンドラを使ってみてください。

このドラッグハンドラは、relative要素やabsolute要素にアタッチすることができます。

### 使い方

1. まず、コードの先頭にこのスクリプトを含めます。※headタグの中に記述してください。
2. スクリプトをロードしたら、ドラッグハンドラをアタッチするコードを書いてください。

このドラッグハンドラをページ上の任意の数の要素にアタッチすることで、すべての要素をドラッグすることができます。

<!--StartFragment-->

##### Source code for drag.js

```
var DragHandler = {
 
	// privateプロパティ。
	_oElem : null,
 
	// publicメソッド。ドラッグハンドラーを要素にアタッチします。
	attach : function(oElem) {
		oElem.onmousedown = DragHandler._dragBegin;
 
		// コールバック。
		oElem.dragBegin = new Function();
		oElem.drag = new Function();
		oElem.dragEnd = new Function();
 
		return oElem;
	},
 
	// privateメソッド。ドラッグ処理を開始します。
	_dragBegin : function(e) {
		var oElem = DragHandler._oElem = this;
 
		if (isNaN(parseInt(oElem.style.left))) { oElem.style.left = '0px'; }
		if (isNaN(parseInt(oElem.style.top))) { oElem.style.top = '0px'; }
 
		var x = parseInt(oElem.style.left);
		var y = parseInt(oElem.style.top);
 
		e = e ? e : window.event;
		oElem.mouseX = e.clientX;
		oElem.mouseY = e.clientY;
 
		oElem.dragBegin(oElem, x, y);
 
		document.onmousemove = DragHandler._drag;
		document.onmouseup = DragHandler._dragEnd;
		return false;
	},

	// privateメソッド。要素をドラッグ（移動）します。
	_drag : function(e) {
		var oElem = DragHandler._oElem;
 
		var x = parseInt(oElem.style.left);
		var y = parseInt(oElem.style.top);
 
		e = e ? e : window.event;
		oElem.style.left = x + (e.clientX - oElem.mouseX) + 'px';
		oElem.style.top = y + (e.clientY - oElem.mouseY) + 'px';
 
		oElem.mouseX = e.clientX;
		oElem.mouseY = e.clientY;
 
		oElem.drag(oElem, x, y);
 
		return false;
	},

	// privateメソッド。ドラッグ処理を停止します。
	_dragEnd : function() {
		var oElem = DragHandler._oElem;
 
		var x = parseInt(oElem.style.left);
		var y = parseInt(oElem.style.top);
 
		oElem.dragEnd(oElem, x, y);
 
		document.onmousemove = null;
		document.onmouseup = null;
		DragHandler._oElem = null;
	}
 
}
```

<!--EndFragment-->