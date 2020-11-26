---
template: post
title: 【JavaScript】テーブルにソート機能を実装
slug: javascript-sortable-table
draft: false
priority: 0
date: 2019-10-16T04:44:36.031Z
description: JavaScriptでテーブルにソート機能を作成するサンプル
category: JavaScript
tags:
  - JavaScript
  - 実験
---
sortabletable.jsは、通常のHTML内のテーブルをソート可能なテーブルに変換します。

### 使い方

1. ヘッダー（ソート）行をtheadセクションに、テーブル行をtbodyセクションに配置してください。
2. sortabletable.jsファイルをインクルードして、各テーブルの後でSortableTableオブジェクトを生成してください。

<!--StartFragment-->

### 動作サンプル

![javascript](/media/javascript-sortable-table.gif "javascript")

<!--EndFragment-->

<!--StartFragment-->

### index.html  コード

```
<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="utf-8">
	<title>テーブルソート</title>
	<script type="text/javascript" src="sortabletable.js"></script>
	<style>
table {
	border-spacing: 1;
	border-collapse: collapse;
	width: 300px;
	text-align: left;
	font-size: 12px;
	font-family: verdana;
	background: #c0c0c0;
}
table thead  {
	cursor: pointer;
}
table thead tr {
	background: #c0c0c0;
}
table tbody tr {
	background: #f0f0f0;
}
td, th {
	border: 1px solid white;
}
	</style>
</head>
<body>
	<table id="table">
		<thead>
			<tr>
				<th class="c1">氏名</th>
				<th class="c2">性別</th>
				<th class="c3">年齢</th>
			</tr>
		</thead>

		<tbody>
			<tr class="r1">
				<td class="c1">鈴木&nbsp;A太郎</td>
				<td class="c2">男</td>
				<td class="c3">30</td>
			</tr>
			<tr class="r2">
				<td class="c1">佐藤&nbsp;B次郎</td>
				<td class="c2">男</td>
				<td class="c3">32</td>
			</tr>
			<tr class="r1">
				<td class="c1">鈴木&nbsp;C三郎</td>
				<td class="c2">男</td>
				<td class="c3">34</td>
			</tr>
			<tr class="r2">
				<td class="c1">鈴木&nbsp;D子</td>
				<td class="c2">女</td>
				<td class="c3">31</td>
			</tr>
			<tr class="r1">
				<td class="c1">佐藤&nbsp;E子</td>
				<td class="c2">女</td>
				<td class="c3">33</td>
			</tr>
		</tbody>
	</table>
	<script type="text/javascript">
var t = new SortableTable(document.getElementById('table'), 100);
	</script>
</body>
</html>
```

<!--EndFragment-->

<!--StartFragment-->

### sortabletable.js  コード

```
function SortableTable (tableEl) {

	this.tbody = tableEl.getElementsByTagName('tbody');
	this.thead = tableEl.getElementsByTagName('thead');

	this.getInnerText = function (el) {
		if (typeof(el.textContent) != 'undefined') return el.textContent;
		if (typeof(el.innerText) != 'undefined') return el.innerText;
		if (typeof(el.innerHTML) == 'string') return el.innerHTML.replace(/<[^<>]+>/g,'');
	}

	this.getParent = function (el, pTagName) {
		if (el == null) return null;
		else if (el.nodeType == 1 && el.tagName.toLowerCase() == pTagName.toLowerCase())
			return el;
		else
			return this.getParent(el.parentNode, pTagName);
	}

	this.sort = function (cell) {

	    var column = cell.cellIndex;
	    var itm = this.getInnerText(this.tbody[0].rows[1].cells[column]);
		var sortfn = this.sortCaseInsensitive;

		if (itm.match(/\d\d\d\d+\d\d[-]+\d\d[-]/)) sortfn = this.sortDate; // date format yyyy-mm-dd
		if (itm.replace(/^\s+|\s+$/g,"").match(/^[\d\.]+$/)) sortfn = this.sortNumeric;

		this.sortColumnIndex = column;

	    var newRows = new Array();
	    for (j = 0; j < this.tbody[0].rows.length; j++) {
			newRows[j] = this.tbody[0].rows[j];
		}

		newRows.sort(sortfn);

		if (cell.getAttribute("sortdir") == 'down') {
			newRows.reverse();
			cell.setAttribute('sortdir','up');
		} else {
			cell.setAttribute('sortdir','down');
		}

		for (i=0;i<newRows.length;i++) {
			this.tbody[0].appendChild(newRows[i]);
		}

	}

	this.sortCaseInsensitive = function(a,b) {
		aa = thisObject.getInnerText(a.cells[thisObject.sortColumnIndex]).toLowerCase();
		bb = thisObject.getInnerText(b.cells[thisObject.sortColumnIndex]).toLowerCase();
		if (aa==bb) return 0;
		if (aa<bb) return -1;
		return 1;
	}

	this.sortDate = function(a,b) {
		aa = thisObject.getInnerText(a.cells[thisObject.sortColumnIndex]);
		bb = thisObject.getInnerText(b.cells[thisObject.sortColumnIndex]);
		date1 = aa.substr(6,4)+aa.substr(3,2)+aa.substr(0,2);
		date2 = bb.substr(6,4)+bb.substr(3,2)+bb.substr(0,2);
		if (date1==date2) return 0;
		if (date1<date2) return -1;
		return 1;
	}

	this.sortNumeric = function(a,b) {
		aa = parseFloat(thisObject.getInnerText(a.cells[thisObject.sortColumnIndex]));
		if (isNaN(aa)) aa = 0;
		bb = parseFloat(thisObject.getInnerText(b.cells[thisObject.sortColumnIndex]));
		if (isNaN(bb)) bb = 0;
		return aa-bb;
	}

	// 変数を定義する。
	var thisObject = this;
	var sortSection = this.thead;

	// コンストラクタアクション。
	if (!(this.tbody && this.tbody[0].rows && this.tbody[0].rows.length > 0)) return;

	if (sortSection && sortSection[0].rows && sortSection[0].rows.length > 0) {
		var sortRow = sortSection[0].rows[0];
	} else {
		return;
	}

	for (var i=0; i<sortRow.cells.length; i++) {
		sortRow.cells[i].sTable = this;
		sortRow.cells[i].onclick = function () {
			this.sTable.sort(this);
			return false;
		}
	}

}
```

<!--EndFragment-->