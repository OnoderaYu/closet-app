# Closet App

## 公開 URL
[Closet App (Netlify)](https://frabjous-cassata-69b307.netlify.app/)

## 概要
未完成（現在Netlify でフロントのみ公開している段階です。）  
”Closet App” は、所持している衣服や試着した衣服のサイズ等の情報を記録しておくWebアプリです。  
カテゴリごとにアイテムの追加、一覧表示、編集、削除（CRUD）が可能です。  

フロントは React で作成し、バックエンド（Oracle DB + Node.js/Express）はローカル環境で動作確認済みです。  

## 主な機能
- カテゴリごとにアイテムの一覧表示
- アイテムの追加
- アイテムの編集
- アイテムの削除


## 使用技術

### フロントエンド
- **React**
- **JavaScript (ES6+)**

### バックエンド（ローカル環境）
- **Node.js / Express**
  - REST API を作成（CRUD：Create, Read, Update, Delete）
  - JSON を受け取り、Oracle DB にデータを格納
- **Oracle DB**
  - 服の情報（tops）テーブルに対して SQL 実行
  - `id, name, brand, size_value, length, chest, sleeve` を管理

### 配置・公開
- **Netlify**
  - React アプリをビルドして公開
  - 公開 URL からフロント画面を確認可能

## 現在の進捗
- フロント：追加フォーム・一覧表示を作成済み
- バックエンド：CRUD API をローカルで動作確認済み
- React と API の接続は確認済み（ただし、バックエンドはローカルのみ）
- 一覧表示に追加データが反映されることは確認済み



