var cacheName = 'daveredfern:0125';

var cacheFiles = ['/', '/about/', '/blog/', '/contact/', '/now/', '/hide-or-exclude-folders-and-files-from-search-in-visual-studio-code/', '/getting-sass-using-arrays-functions-loops/', '/screen-sizes/', '/green-smoothie/', '/always-leave-things-cleaner-than-you-found-them/', '/enabling-a-chance-for-something-to-happen/', '/design-principles/', ];

self.addEventListener('install', function (event) {
    event.waitUntil(caches.open(cacheName).then(function (cache) {
        return cache.addAll(cacheFiles);
    }));
});

self.addEventListener('fetch', function (event) {
    event.respondWith(caches.match(event.request).then(function (response) {
        if (response) {
            return response;
        }
        return fetch(event.request);
    }).catch(function () {
        return caches.match('/offline/');
    }));
});

self.addEventListener('activate', function (event) {
    var cacheWhitelist = ['daveredfern:0125'];
    event.waitUntil(caches.keys().then(function (cacheNames) {
        return Promise.all(cacheNames.map(function (cacheName) {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
                return caches.delete(cacheName);
            }
        }));
    }));
});