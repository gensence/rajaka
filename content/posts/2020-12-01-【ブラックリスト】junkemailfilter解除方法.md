---
template: post
title: 【ブラックリスト】JunkEmailFilter解除方法
slug: dnsbl-junkemailfilter
draft: false
priority: 0
date: 2020-12-01T13:07:09.249Z
description: メールブラックリスト、JunkEmailFilterの解除方法と解除文例をまとめました
category: メール配信
tags:
  - ブラックリスト
---
![](/media/junkemailfilter-title.png)

# hostkarma.junkemailfilter.comにIPアドレスが登録されてメールが届かなくなった

<a href="http://www.junkemailfilter.com/spam/home.html">Junk Email Filter</a>はブラックリスト、イエローリスト、ホワイトリストからなるIPアドレスデータベースです。 <br>健全なメールを判定し、ホワイトリストにIPアドレスを登録することがこのスパムフィルターの最大の特徴です。<br> その仕組みは、ハニーポットに送られてきたメールと複数のSMTPサーバーからのフィードバックを分析し、スパム/非スパムに応じてカウンターを増やします。<br>要するにスパムはスパムカウンターを増加させ、非スパムは非スパムカウンターを増加させます。<br> スパムカウンターが一定量貯まるとブラックリストに、非スパムカウンターが一定量貯まるとホワイトリストに、両方貯まるとイエローリストに登録します。<br><br>このようにしてブラックリストに登録されてしまった場合でも申請のみで<strong>即時解除が可能</strong>です。<br>

# 解除方法

右のリンク<a href="https://ipadmin.junkemailfilter.com/remove.php">Junkemailfilter.com</a>をクリックして、ブラックリストからの削除をリクエストします。

![](/media/junkemailfilter-1.png)

IP to lookup: にIPアドレスを入力後Lookupをクリックします。<br><br>

![](/media/junkemailfilter-2.png)

ブラックリストに登録されていると上画像のように赤文字でBlack listedと表示されます。<br>IP to search: にIPアドレスを入力後、Searchをクリックします。<br><br>

![](/media/junkemailfilter-3.png)

Ip to remove: にIPアドレスを入力後、Removeをクリックします。<br><br>

![](/media/junkemailfilter-4.png)

数分後解除が実行されます。 <br>但し、スパムカウンターが上昇すると再度ブラックリストに登録されます。