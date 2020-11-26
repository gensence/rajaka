---
template: post
title: 【JavaScript】Cookie操作
slug: javascript-cookie
draft: false
priority: 0
date: 2018-08-25T06:43:09.731Z
description: JavaScriptでクッキーの保存、読み取り、消去を行うサンプル
category: JavaScript
tags:
  - プログラミング
---
Cookieは、Webサーバーがクライアントに対して、クライアントに関する情報を保存させるための手段です。保存した情報は、後で必要に応じてWebサーバーから呼び出すことができます。

cookies.jsはクッキーの保存、読み取り、消去メソッドを備えたCookie操作のサンプルオブジェクトです。

<!--StartFragment-->

### cookies.js  コード

```
function CookieHandler() {
 
    // クッキーを保存。
	this.setCookie = function (name, value, seconds) {
 
		if (typeof(seconds) != 'undefined') {
			var date = new Date();
			date.setTime(date.getTime() + (seconds*1000));
			var expires = "; expires=" + date.toGMTString();
		}
		else {
			var expires = "";
		}
 
		document.cookie = name+"="+value+expires+"; path=/";
	}
 
    // クッキーを読み込み。
	this.getCookie = function (name) {
 
		name = name + "=";
		var carray = document.cookie.split(';');
 
		for(var i=0;i < carray.length;i++) {
			var c = carray[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
		}
 
		return null;
	}
 
    // クッキーを消去。
	this.deleteCookie = function (name) {
		this.setCookie(name, "", -1);
	}
 
}
```

<!--EndFragment-->