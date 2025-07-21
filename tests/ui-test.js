// Puppeteer等で利用するUIテスト雛形
// 実行にはNode.js環境とPuppeteerが必要

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5500/index.html'); // 適宜ローカルサーバーのURLに変更

  // タイトル確認
  const title = await page.title();
  if (title.includes('ケミカルクエスト')) {
    console.log('タイトルテスト: OK');
  } else {
    console.error('タイトルテスト: NG');
  }

  // メインUI要素確認
  const exists = await page.$('header') && await page.$('footer');
  if (exists) {
    console.log('ヘッダー・フッター存在: OK');
  } else {
    console.error('ヘッダー・フッター存在: NG');
  }

  // PWA登録確認
  const sw = await page.evaluate(() => 'serviceWorker' in navigator);
  if (sw) {
    console.log('PWAサポート: OK');
  } else {
    console.error('PWAサポート: NG');
  }

  await browser.close();
})(); 