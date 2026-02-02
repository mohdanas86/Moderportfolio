// Simple service worker for PWA functionality
const CACHE_NAME = 'portfolio-v1';

self.addEventListener('install', (event) => {
    console.log('Service worker installing');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('Service worker activating');
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Simple pass-through for now
    event.respondWith(fetch(event.request));
});