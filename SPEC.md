# chemical-quest-puzzle 仕様書（SPEC）

## サービス概要
- 元素記号を組み合わせて化学式を作る教育パズルゲーム
- 中学生・理科教師向け
- GitHub Pagesで無料公開

## 主要仕様
- HTML5/CSS3/JavaScript（ES6+）
- レスポンシブデザイン（モバイル/タブレット/PC）
- 多言語対応（日本語・英語、Intl API）
- アクセシビリティ（文字サイズ5段階、ARIA、コントラスト比4.5:1以上）
- SEO（メタタグ、JSON-LD、sitemap.xml）
- PWA（manifest.json, sw.js）

## UI仕様
- 元素パレットは常時3列グリッドで表示し、操作性・視認性を最適化
- 作成中の化学式枠は濃色背景＋白文字で視認性を大幅に向上
- ドラッグ&ドロップで化学式を作成
- スコア・履歴・タイマー・ヒント機能
- 主要なUIはファーストビューに収まる設計

## テスト・品質保証
- 機能テスト（ドラッグ&ドロップ、バリデーション、PWA等）
- ブラウザ対応：Chrome/Firefox/Safari/Edge/iOS/Android

## 継続的改善
- 3D分子構造/マルチプレイヤー/AI/VR/AR
- Google Analytics, Search Console, ユーザーフィードバック 