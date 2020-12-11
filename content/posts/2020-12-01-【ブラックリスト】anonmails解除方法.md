---
template: post
title: 【DNSBL】Anonmails解除方法
slug: dnsbl-anonmails
draft: false
priority: 0
date: 2020-11-26T14:09:45.095Z
description: spam.dnsbl.anonmails.deに登録された場合の解除方法と解除メッセージ文例
category: メール配信
tags:
  - ブラックリスト
---
![](/media/anonmails-title.png)

# spam.dnsbl.anonmails.deにIPアドレスが登録された

<a href="https://anonmails.de/" target="_blank">Anonmails</a>は匿名のメールプロバイダーです。<br>ブラックリストに登録された場合は解除申請を行うことができます。<br>

# 解除方法

右のリンク<a href="https://anonmails.de/dnsbl.php" target="_blank">spam.dnsbl.anonmails.de</a>をクリックして、ブラックリストからの削除をリクエストします。

![](/media/anonmails-1.png)

IPアドレスを入力後Checkをクリックします。<br><br>

![](/media/anonmails-2.png)

DNSBL Removal Requestをクリックします。<br><br>

![](/media/anonmails-3.png)

IPアドレス、氏名、解除理由、質問の回答を入力後、Submitをクリックします。<br> 				解除は申請後1時間～24時間で実行されます。<br> 				以上spam.dnsbl.anonmails.deの解除方法でした。<br>

# 解除理由文例

```
Hello,
We are unable to send email to some destination because of your blacklist.
1.we never engage in email marketing (total of less than 500 emails per month from both IPs)
2.we strictly manage server security and have never had a problem with malware.
I believe these IPs are on the blacklist due to the actions of previous owners.
I would be much obliged if you could investigate and remove these IPs from the blacklist.
Best regards.

Suzuki Tarou<br>
```