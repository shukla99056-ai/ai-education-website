const CACHE_NAME = "pragyanpath-v1";

const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/contact.html",
  "/privacy.html",
  "/script.js",
  "/manifest.json",
  "/assets/images/icon-192.png",
  "/assets/images/icon-512.png",
  "/assets/images/logo.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
