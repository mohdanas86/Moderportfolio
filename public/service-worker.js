// service-worker.js
const CACHE_NAME = 'anas-portfolio-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/globals.css',
  '/anaspfp.jpg',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  // Static assets
  '/css-3.png',
  '/html.png',
  '/js.png',
  '/python.png',
  '/java.png',
  '/next.svg',
  '/vercel.svg',
  // Images for projects
  '/ainotestaker.png',
  '/blog-backend.png',
  '/fynsera.png',
  '/imgrithm.png',
  // Additional assets
  '/anasalam-resume.pdf'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Improved fetch strategy - Stale-while-revalidate
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        // Return cached response immediately if available (stale)
        if (cachedResponse) {
          // Fetch new version in the background (revalidate)
          fetch(event.request).then((response) => {
            // Check if we received a valid response
            if (response && response.status === 200 && response.type === 'basic') {
              // Clone the response
              const responseToCache = response.clone();
              
              // Update the cache with the new version
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseToCache);
              });
            }
          }).catch(() => {
            // Network request failed, we'll just use the cached version
          });
          
          return cachedResponse;
        }

        // If not in cache, make network request
        return fetch(event.request).then((response) => {
          // Don't cache if not a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response
          const responseToCache = response.clone();
          
          // Add to cache
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          
          return response;
        });
      })
    );
  }
});

// Clean up old caches
self.addEventListener('activate', (event) => {
  const cacheAllowlist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            // If this cache name isn't in our allowlist, delete it
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
