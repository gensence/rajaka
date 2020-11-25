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

onmouseoverイベントで複数の画像を使用するときに発生する遅延を解消するには全ての画像をプリロードする方法があります。

この関数の引数として1つの画像URL又は、画像URLの配列を指定することもできます。

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