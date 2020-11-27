---
template: post
title: 【JavaScript】ドラッグアンドドロップ
slug: javascript-drag-and-drop
draft: false
priority: 0
date: 2020-09-15T06:55:47.961Z
description: Webページ上の要素や画像をドラッグアンドドロップする方法
category: JavaScript
tags:
  - プログラミング
---
drag.jsはWebページ上の要素や画像をドラッグするためのスクリプトです。

### 使い方

1. headタグの中でdrag.jsを読み込んでください。
2. ドラッグハンドラをアタッチするスクリプトを書いてください。

このドラッグハンドラをページ上の任意の要素にアタッチすると要素のドラッグが可能になります。

<!--StartFragment-->

### 動作サンプル

![javascript](/media/javascript-drag-and-drop.gif "javascript")

<!--EndFragment-->

<!--StartFragment-->

### index.html  コード

```
<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="utf-8">
	<title>要素ドラッグアンドドロップ</title>
	<script type="text/javascript" src="drag.js"></script>
</head>
<body>
	<img src="pin.png" id="pin" width="60px">
	<script type="text/javascript">
var pin = document.getElementById("pin");
DragHandler.attach(pin);
	</script>
</body>
</html>
```

<!--EndFragment-->

<!--StartFragment-->

### drag.js  コード

```
var DragHandler = {

    // privateプロパティ。
    _oElem : null,

    // publicメソッド。ドラッグハンドラーを要素にアタッチします。
    attach : function(oElem) {

    	oElem.style.position = "absolute";

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

<!--StartFragment-->

### pin.png

![pin](/media/pin.png "pin")

<!--EndFragment-->