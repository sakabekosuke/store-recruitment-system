━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 店舗採用システム

Googleフォーム × Google Apps Script

店長が
「今日やるべきこと」
を数秒で判断できる採用管理システム

<img width="1536" height="1024" alt="ChatGPT Image 2026年7月10日 16_41_15" src="https://github.com/user-attachments/assets/127bd857-6b81-44f5-aaa4-3f3b8fc13397" />



━━━━━━━━━━━━━━━━━━━━━━━━━━

# 店舗採用システム

> 店長が「今日やるべきこと」を数秒で判断できる採用管理システム。

Googleフォーム・Googleスプレッドシート・Google Apps Scriptを利用して構築した、店舗向け採用管理システムです。

応募受付から採用・不採用管理までを自動化し、店舗責任者が「今対応すべき応募者」を一目で判断できることを目的として設計しています。

---

# Version

|項目|内容|
|---|---|
|Version|1.0.0|
|リリース日|2026年7月|
|ステータス|Stable|
Google Apps Script
---

# システム概要

本システムはGoogleフォームへ応募が届くと、自動で採用管理シートへ転記されます。

店長は採用管理シートのみを確認するだけで、

- 未対応応募
- 面接予定
- 採用
- 不採用
- 辞退

まで一元管理できます。

ダッシュボードでは現在対応が必要な応募件数や最終更新日時を表示し、店舗責任者が毎日最初に確認する画面として利用できます。

---

# 主な機能

- Googleフォーム応募受付
- 採用管理シート自動登録
- 応募状況ステータス管理
- 採用・不採用履歴保存
- ダッシュボード表示
- 最終更新日時自動更新
- Apps Scriptによる自動処理
- 他店舗展開可能なテンプレート構成

---

# システム構成

```
応募者
    │
    ▼
Googleフォーム
    │
    ▼
応募データ
    │
    ▼
Apps Script
    │
    ▼
採用管理
    │
    ▼
ダッシュボード
```

<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/1b2afd21-bd9b-4bae-b4d5-7e4a00941f64" />


---

# ディレクトリ構成

```
store-recruitment-system/

├── README.md
│
├── apps-script/
│   ├── 00_config.gs
│   ├── 01_onFormSubmit.gs
│   └── 02_onEdit.gs
│
├── docs/
│   ├── 00_README.md
│   ├── 01_シート仕様書.md
│   ├── 02_データフロー仕様.md
│   ├── 03_GAS仕様書.md
│   ├── 04_導入マニュアル.md
│   ├── 05_運用マニュアル.md
│   ├── 06_トラブルシューティング.md
│   └── 07_更新履歴.md
│
├── template/
│
└── examples/
```

---

# ドキュメント

|ファイル|内容|
|---|---|
|00_README|ドキュメント概要|
|01_シート仕様書|各シート構成|
|02_データフロー仕様|システム処理の流れ|
|03_GAS仕様書|Apps Script仕様|
|04_導入マニュアル|初期導入方法|
|05_運用マニュアル|店舗運用方法|
|06_トラブルシューティング|障害対応|
|07_更新履歴|バージョン管理|

---

# 使用技術

- Google Forms
- Google Sheets
- Google Apps Script
- GitHub
- GitHub Desktop
- Visual Studio Code
- Markdown

---

# 想定利用者

- 飲食店店長
- 店舗責任者
- エリアマネージャー
- 人事担当
- Google Workspace利用企業

---

# 今後のアップデート予定

- テンプレート版完成
- 九州魂大和八木店運用例追加
- Support AI公開
- LINE通知対応
- 面接日程管理機能
- データ分析機能

---

# 開発コンセプト

本システムは

**「店長が今日やるべきことを一目で判断できること」**

を最優先に設計しています。

機能を増やすことではなく、

**現場で迷わないこと**

を目的としています。

---

# ライセンス

本リポジトリは学習・社内利用・テンプレート利用を想定しています。

改変・店舗展開は自由ですが、本システムを販売目的で利用する場合は事前にご相談ください。

---

# Author

坂部 公亮

Store Manager

Developer

AI Workflow Builder

---

GitHub Repository

store-recruitment-system
