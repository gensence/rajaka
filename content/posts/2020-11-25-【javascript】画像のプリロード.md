---
template: post
title: 【JavaScript】画像プリロード
slug: javascript-image-preload
draft: false
priority: 0
date: 2018-06-06T12:42:14.355Z
description: onmouseoverイベントで複数の画像を使用するときに発生する遅延を解消する方法
category: JavaScript
tags:
  - プログラミング
---
onmouseoverイベントで複数の画像を使用するときに発生する遅延を解消するには全ての画像をプリロードする必要があります。

preload.jsは全ての画像をプリロードするためのスクリプトです。

必要に応じて関数の引数として1つの画像URL又は、画像URLの配列を指定してください。

<!--StartFragment-->

### preload.js  コード

```
function Preload() {

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