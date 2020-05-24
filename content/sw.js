const staticCacheName = 'daveredfern-v1';
const assets = [
    '/',
    '/about/',
    '/blog/',
    '/contact/',
    '/now/',
    '/hide-or-exclude-folders-and-files-from-search-in-visual-studio-code/',
    '/getting-sass-using-arrays-functions-loops/',
    '/screen-sizes/',
    '/green-smoothie/',
    '/always-leave-things-cleaner-than-you-found-them/',
    '/enabling-a-chance-for-something-to-happen/',
    '/design-principles/',
];

// install event
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});