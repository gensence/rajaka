---
template: post
title: 【JavaScript】画像のプリロード
slug: javascript-image-preload
draft: false
priority: 0
date: 2018-06-06T12:42:14.355Z
description: onmouseoverイベントで複数の画像を使用するときに発生する遅延を解消する方法
category: JavaScript
tags:
  - プログラミング
---
![javascript](/media/javascript.png "javascript")

onmouseoverイベントで複数の画像を使用するときに発生する遅延を解消する方法の一つに全ての画像をプリロードする方法があります。

imagepreload.jsは全ての画像をプリロードするためのスクリプトです。

必要に応じて関数の引数を1つの画像URL又は、画像URLの配列に設定してください。

<!--StartFragment-->

##### Source code for imagepreload.js

```
function ImagePreload() {
	if (typeof(arguments) != 'undefined') {
		for (i=0; i<arguments.length; i++ ) {
			if (typeof(arguments[i]) == "object") {
				for (k=0; k<arguments[i].length; k++) {
					var oImage = new Image;
					oImage.src = arguments[i][k];
				}
			}
 
			if (typeof(arguments[i]) == "string") {
				var oImage = new Image;
				oImage.src = arguments[i];
			}
		}
	}
}
```

<!--EndFragment-->