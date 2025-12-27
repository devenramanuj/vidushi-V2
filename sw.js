self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('vidushi-store').then((cache) => cache.addAll([
      '/',
      'index.html',
      'manifest.json',
      'silent.mp4',
      'talking.mp4',
      'smiling.mp4',
      'thinking.mp4',
      'angry.mp4'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});

