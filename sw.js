const CACHE_NAME = 'chemical-quest-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/lp.html',
  '/about.html',
  '/terms.html',
  '/privacy.html',
  '/contact.html',
  '/function.html',
  '/assets/css/style.css',
  '/assets/js/app.js',
  '/assets/js/elements.js',
  '/assets/js/game.js',
  '/assets/js/affiliate.js',
  '/assets/icons/icon-192.png',
  '/assets/icons/icon-512.png',
  '/assets/icons/favicon.svg',
  '/assets/images/og-image.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
}); 