---
template: post
title: gatsby-remark-highlight-code導入方法
slug: gatsby-sintax-highlight
draft: false
priority: 0
date: 2020-12-10T13:25:15.057Z
description: Gatsbyブログのマークダウンのコードブロックを見やすくする方法。シンタックスハイライトプラグイン、gatsby-remark-highlight-codeの導入方法についてまとめました。
category: Gatsby
tags:
  - ブログ
---
# マークダウンのコードブロックを変更する

![](/media/highlight.png)

<br>

コードブロックデザインを[gatsby-remark-highlight-code](https://github.com/deckgo/gatsby-remark-highlight-code)に変更しました。

その際に行った手順をまとめました。

<br>

まず下記のどちらかのコマンドを実行してプラグイン（[gatsby-remark-highlight-code](https://github.com/deckgo/gatsby-remark-highlight-code)）をダウンロードして下さい。

```
yarn add gatsby-transformer-remark gatsby-remark-highlight-code @deckdeckgo/highlight-code
```

または、

```
npm install --save gatsby-transformer-remark gatsby-remark-highlight-code @deckdeckgo/highlight-code
```

<br>

次にgatsby-config.jsにプラグインを追加してください。

```
plugins: [
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-highlight-code`,
          options: {
            terminal: 'ubuntu'
          }
        }
      ]
    }
  }
]
```

<br>

メインファイルまたはLayout.jsに以下を追加してください。

```
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();
```

<br>

以上で完了です。

テーマを変更する場合は、下記の様に変更できます。

```
plugins: [
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-highlight-code`,
          options: {
            terminal: 'ubuntu',
            theme: 'vscode'
          }
        }
      ]
    }
  }
]
```

<br>

他のテーマ情報や各オプション情報については、

Github : <https://github.com/deckgo/gatsby-remark-highlight-code>を参考にしてください。