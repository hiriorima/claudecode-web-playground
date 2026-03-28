# claudecode-web-playground

Claude Code のウェブプレイグラウンド環境です。ブラウザ上で Claude Code を使ったコーディング支援を試すことができます。

## 概要

このリポジトリは、Claude Code on the Web を使い始めるためのサンプルプロジェクトです。Claude Code のウェブセッションに最適化された設定と、開発を効率化するためのフックが含まれています。

## 特徴

- **Claude Code on the Web 対応**: ブラウザから直接 Claude Code を利用可能
- **SessionStart フック**: セッション開始時に自動でテスト・リンターを実行
- **すぐに使える構成**: クローンしてすぐに開発を開始できます

## はじめ方

### 前提条件

- [Claude Code](https://claude.ai/code) のアカウント

### セットアップ

1. リポジトリをクローンします:

```bash
git clone https://github.com/hiriorima/claudecode-web-playground.git
cd claudecode-web-playground
```

2. Claude Code on the Web でこのリポジトリを開きます。

## 使い方

Claude Code のウェブセッションを開始すると、設定されたフックが自動的に実行され、開発環境が整います。

セッション内で Claude に自然言語で指示を出すだけで、コードの生成・編集・デバッグを行えます。

## ライセンス

MIT
