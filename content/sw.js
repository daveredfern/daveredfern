---
layout: 'compress'
---

/* Update 'version' if you need to refresh the cache */
var staticCacheName = "daveredfern";
var version = "{{ site.data['hash'] }}";

const cacheFiles = [
    '/',
    '/now/',
    '/about/',
    '/blog/',
    '/contact/',

    '/green-smoothie/',
    '/design-principles/',
    '/enabling-a-chance-for-something-to-happen/',
    '/always-leave-things-cleaner-than-you-found-them/',
    '/work-with-the-garage-door-up/',

    '/offline/',

    '/assets/images/profile.jpg'
];

/* Store core files in a cache (including a page to display when offline) */
function updateStaticCache() {
    return caches.open(staticCacheName + '-' + version)
        .then(function (cache) {
            return cache.addAll(cacheFiles);
        });
};

self.addEventListener('install', function (event) {
    event.waitUntil(updateStaticCache());
});

self.addEventListener('activate', function (event) {
    var cacheWhitelist = [staticCacheName + '-' + version];
    event.waitUntil(caches.keys().then(function (cacheNames) {
        return Promise.all(cacheNames.map(function (cacheName) {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
                return caches.delete(cacheName);
            }
        }));
    }));
});

self.addEventListener('fetch', function (event) {
    var request = event.request;
    /* Always fetch non-GET requests from the network */
    if (request.method !== 'GET') {
        event.respondWith(
            fetch(request)
            .catch(function () {
                return caches.match('/offline/');
            })
        );
        return;
    }

    /* BUG: Safari wants ranged requests from videos. That's a lotta action. */
    if (request.url.match(/\.(mp4)$/)) {
        return;
    }

    /* For HTML requests, try the network first, fall back to the cache, */
    /* finally the offline page */
    if (request.headers.get('Accept').indexOf('text/html') !== -1) {
        /* The request is text/html, so respond by caching the */
        /* item or showing the /offline offline */
        event.respondWith(
            fetch(request)
            .then(function (response) {
                /* Stash a copy of this page in the cache */
                var copy = response.clone();
                caches.open(staticCacheName + '-' + version)
                    .then(function (cache) {
                        cache.put(request, copy);
                    });
                return response;
            })
            .catch(function () {
                return caches.match(request)
                    .then(function (response) {
                        /* return the cache response or the /offline page. */
                        return response || caches.match('/offline/');
                    })
            })
        );

        return;
    }

    /* For non-HTML requests, look in the cache first, fall back to the network */
    /* If it's an image, render an X in an SVG. */
    event.respondWith(
        caches.match(request)
        .then(function (response) {
            return response || fetch(request)
                .catch(function () {
                    /* If the request is for an image, show an offline placeholder */
                    if (request.headers.get('Accept').indexOf('image') !== -1) {
                        return new Response('<svg width="400" height="400" role="img" aria-labelledby="offline-title" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"><title id="offline-title">Offline</title><g><line stroke="#666666" x1="0" y1="0" x2="400" y2="400"/><line stroke="#666666" x1="0" y1="400" x2="400" y2="0"/></g></svg>', {
                            headers: {
                                'Content-Type': 'image/svg+xml'
                            }
                        });
                    }
                });
        })
    );

});