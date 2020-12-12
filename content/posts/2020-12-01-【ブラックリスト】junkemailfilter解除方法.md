---
template: post
title: hostkarma.junkemailfilter 解除方法
slug: dnsbl-junkemailfilter
draft: false
priority: 0
date: 2020-11-17T13:07:09.249Z
description: メールブラックリスト、JunkEmailFilterの解除方法をまとめました
category: メール配信
tags:
  - ブラックリスト
---
![](/media/junkemailfilter-title.png)

# hostkarma.junkemailfilter.comにIPアドレスが登録されてメールが届かなくなった

<a href="http://www.junkemailfilter.com/spam/home.html">Junk Email Filter</a>はブラックリスト、イエローリスト、ホワイトリストからなるIPアドレスデータベースです。 <br>健全なメールを判定し、ホワイトリストにIPアドレスを登録することがこのスパムフィルターの最大の特徴です。<br> ハニーポットに送信されたメールと複数のSMTPサーバーからのフィードバックを分析し、スパム/非スパムに応じてカウンターを増やします。<br>スパムはスパムカウンターを増加させ、非スパムは非スパムカウンターを増やします。<br> スパムカウンターが一定量貯まるとブラックリストに、非スパムカウンターが一定量貯まるとホワイトリストに、両方貯まるとイエローリストに登録します。<br><br>

# 解除方法

右のリンク<a href="https://ipadmin.junkemailfilter.com/remove.php">Junkemailfilter.com</a>をクリックして、ブラックリストからの削除をリクエストします。

![](/media/junkemailfilter-1.png)

IP to lookup: にIPアドレスを入力後Lookupをクリックします。<br><br>

![](/media/junkemailfilter-2.png)

ブラックリストに登録されていると上画像のように赤文字でBlack listedと表示。<br>IP to search: にIPアドレスを入力後、Searchをクリックします。<br><br>

![](/media/junkemailfilter-3.png)

Ip to remove: にIPアドレスを入力後、Removeをクリックします。<br><br>

![](/media/junkemailfilter-4.png)

数分後解除が行われます。 <br>※スパムカウンターが上昇すると再度ブラックリストに登録。