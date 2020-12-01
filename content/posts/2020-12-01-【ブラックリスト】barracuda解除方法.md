---
template: post
title: 【ブラックリスト】Barracuda解除方法
slug: dnsbl-barracuda
draft: false
priority: 0
date: 2020-12-01T13:24:38.241Z
description: b.barracudacentral.orgにIPアドレスが登録されてメールが届かなくなった場合の解除方法
category: メール配信
tags:
  - ブラックリスト
---
![](/media/barracuda-title.png)

# b.barracudacentral.org（BRBL）にIPアドレスが登録されてメールが届かなくなった

<strong>b.barracudacentral.org</strong>（以下BRBL）は<a href="https://www.barracudacentral.org/" target="_blank">バラクーダセントラル</a>が管理するIPアドレスのデータベースです。<br>バラクーダセントラルの運営は<a href="https://www.barracuda.com/" target="_blank">Barracuda Networks社</a>が行っています。<br>IPアドレスがバラクーダセントラルによってBRBLに登録された場合、BRBLをメールフィルターとして採用しているメールサーバー宛てに送信したメールは<strong>ブロックされて届きません。</strong><br>バラクーダセントラルは主に２つの方法でIPアドレスを収集しています。<br>

<ol><li><h3>Barracuda Netwarks社のスパムメール対策製品である<a href="https://www.barracuda.co.jp/products/spam/" target="_blank">Barracuda Email Security Gateway</a>からのフィードバックの解析</h3></li>
<li><h3>スパムトラップ（ハニーポット）に送信されたメールの解析</h3>
</li></ol>
以上からも通常のメールを適切に送信しているだけでは登録されないはずです。<br> 				ではどのようなIPアドレスがBRBLに登録されてしまうのでしょうか。<br><br>

<h1>b.barracudacentral.orgに登録される原因</h1>

<ol><li><h3>「ホスティングサービス（レンタルサーバー等）で共有IP内の他のユーザがスパム配信を行っている」</h4>
						レンタルサーバ等では、ある１ユーザーのスパム配信により登録されたために、そのサーバーに同居する別のユーザーにも影響を与えてしまうケースがあります。<br>
						<br></li>
						<li><h3>「メールサーバのオープンリレーの許可」</h3>
						最近のメールサーバはデフォルトでオープンリレー設定が無効になっています。<br>
						<br></li>
						<li><h3>「ボット感染による無差別大量メール送信」</h3>
						定期的なウイルスチェックによって防げます。<br>
						<br></li>
						<li><h3>「Backscatter対策が為されていない」</h3>
						Backscatterはメールサーバの配達不能レポートを利用してスパムを配信する送信手法です。<br>
						<br></li>
						<li><h3>「広告メールやメールマガジンを一度に大量に送信している」</h3>
						短時間に大量のメールを送ることが攻撃として判断されてしまうようです。<br>
						<br></li>
						<li><h3>「大量のメールを存在しない受信者宛に送信している」</h3>
						存在しそうなメールアドレスに無差別でメールを送信するDHA攻撃に該当してしまうそうです。

</li></ol>

１に該当するケースが多々あるようです。<br>その為、バラクーダセントラルでは解除申請を受け付けています。<br><br>

<h1>b.barracudacentral.orgの解除方法</h1>

バラクーダセントラルに解除申請を行うことで自分のIPアドレスをBRBLから解除できます。<br>下記のリンクからバラクーダセントラルを開きます。<br><a href="https://barracudacentral.org/lookups" target="_blank">https://barracudacentral.org/lookups</a><br>

![](/media/barracuda-0.png)

IPアドレスがBRBLに登録されているか調べる必要がありますので、IP or Domainに調べたいIPアドレスを入力し、Check Reputationをクリックしてください。<br><br>

![](/media/barracuda-1.png)

上画像のように赤枠が表示されたらIPアドレスがBRBLに登録されています。<br>次に、赤枠内のclick here.リンクをクリックします。<br><br>	

![](/media/barracuda-2.png)

IPアドレス、メールアドレス、電話番号、解除理由を入力後、Submit Requestをクリックします。<br>※解除理由の入力は任意です。下に解除文例を載せました。<br><br><strong>申請後24時間～48時間</strong>の間に審査され、問題がなければ解除されます。<br><br>解除となった場合は以後30日間はメールの送受信が可能になります。<br> 				ただし30日経過後に再度審査が行われます。<br>以上Barracuda BRBLの解除方法でした。<br> <br>

<h1>解除理由文例</h1>

```
Hello,
We are unable to send email to some destination because of your blacklist.
Help me not to fall again in blacklist?
1. There's no spam coming out from our mail servers.
2. There's no virus on our mail servers.
3. Our mail servers are not open relays.
Best regards.

Suzuki Tarou<br>
```