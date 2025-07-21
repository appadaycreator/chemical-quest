# chemical-quest-puzzle

## サービス概要
- 元素記号を組み合わせて化学式を作る教育パズルゲーム
- 中学生向け・理科教師向け
- GitHub Pagesで無料公開

## ペルソナ
- 中学生「田中ゆうき」：ゲーム好き、スマホユーザー、視覚的学習
- 理科教師「佐藤先生」：デジタル教材導入、進捗把握

## ディレクトリ構成（推奨）
```
chemical-quest-puzzle/
├── index.html         # メインページ
├── lp.html            # ランディングページ
├── about.html         # 使い方ページ
├── terms.html         # 利用規約・免責事項
├── privacy.html       # プライバシーポリシー
├── contact.html       # 問い合わせフォーム
├── function.html      # 機能要件書
├── sitemap.xml        # サイトマップ
├── robots.txt         # ロボット制御
├── manifest.json      # PWA設定
├── sw.js              # サービスワーカー
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── app.js
│   │   ├── elements.js
│   │   ├── game.js
│   │   └── affiliate.js
│   ├── icons/
│   │   ├── icon-192.png
│   │   ├── icon-512.png
│   │   └── favicon.svg
│   └── images/
│       └── og-image.png
└── tests/
    ├── test-suite.html
    └── ui-test.js
```

## 開発・公開手順
1. GitHubリポジトリ作成・Pages設定
2. Cursorで開発・ローカルテスト
3. コミット＆プッシュ
4. Google Search Console登録

## 段階的実装計画
- フェーズ1：HTML/CSS/レスポンシブ/基礎機能/PWA
- フェーズ2：ドラッグ&ドロップ/バリデーション/スコア
- フェーズ3：多言語/アクセシビリティ/SEO/アフィリエイト

## 技術仕様
- レスポンシブ（モバイル/タブレット/PC）
- 多言語（Intl API, ローカルストレージ）
- アクセシビリティ（文字サイズ5段階, ARIA, コントラスト）
- SEO（メタタグ, JSON-LD, sitemap.xml）
- PWA（manifest.json, sw.js）
- 元素パレットは常時3列グリッドで表示し、操作性・視認性を最適化
- 目標化合物の化学式のみ初期非表示、名称は常時表示。クリックで初めて化学式を表示

## テスト・品質保証
- 機能テスト（ドラッグ&ドロップ、バリデーション、PWA等）
- ブラウザ対応：Chrome/Firefox/Safari/Edge/iOS/Android

## 継続的改善
- 3D分子構造/マルチプレイヤー/AI/VR/AR
- Google Analytics, Search Console, ユーザーフィードバック

## 横展開指針
- ファイル構成・開発フローをテンプレート化し、他教科パズル（数学・英語等）へ展開可能
- ペルソナ・教材・アフィリエイト商品を差し替えるだけで新規立ち上げ可
- 共通コンポーネント（多言語、アクセシビリティ、PWA、SEO、アフィリエイト）をモジュール化
