const staticCacheName = 'daveredfern-v1';
const assets = [
    '/',
    '/now/',
    '/about/',
    '/blog/',
    '/contact/',
    '/now/',
    
    '/green-smoothie/',
    '/design-principles/',
    '/enabling-a-chance-for-something-to-happen/',
    '/always-leave-things-cleaner-than-you-found-them/',
    '/screen-sizes/'
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