---
template: post
title: 【JavaScript】HTMLソースコードを選択できないようにする
slug: javascript-unselectable-text
draft: false
priority: 0
date: 2018-07-10T06:45:44.193Z
description: 訪問者がHTMLページのテキストを選択できないようにする方法
category: JavaScript
tags:
  - プログラミング
---
![javascript](/media/javascript.png "javascript")

htmlのテキストをWebサイトの訪問者が選択できないようにするには？

以下を使用してみてください。

<!--StartFragment-->

##### Source code for unselectable.js

```
var Unselectable = {
 
	enable : function(e) {
		var e = e ? e : window.event;
 
		if (e.button != 1) {
			if (e.target) {
				var targer = e.target;
			} else if (e.srcElement) {
				var targer = e.srcElement;
			}
 
			var targetTag = targer.tagName.toLowerCase();
			if ((targetTag != "input") && (targetTag != "textarea")) {
				return false;
			}
		}
	},
 
	disable : function () {
		return true;
	}
 
}
 
if (typeof(document.onselectstart) != "undefined") {
	document.onselectstart = Unselectable.enable;
} else {
	document.onmousedown = Unselectable.enable;
	document.onmouseup = Unselectable.disable;
}
```

<!--EndFragment-->