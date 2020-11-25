---
template: post
title: 【Javascript】画像のプリロード
slug: javascript-image-preload
draft: false
priority: 0
date: 2018-06-06T12:42:14.355Z
description: onmouseoverイベントで複数の画像を使用するときに発生する遅延を取り除く方法
category: Javascript
tags:
  - プログラミング
---
![javascript](/media/javascript.png "javascript")

onmouseoverイベントで複数の画像を使用するときに発生する遅延を取り除くにはすべての画像をプリロードします。

この関数の引数として1つの画像URL又は、画像URLの配列を指定することもできます。

<!--StartFragment-->

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