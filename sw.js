importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/12e21acbe13b225f238f.js",
    "revision": "d0f608ac2ad9c44acd3229110988f012"
  },
  {
    "url": "/_nuxt/208126814aca35e17294.js",
    "revision": "912c544d7775d3c0e7f1767cb5cded65"
  },
  {
    "url": "/_nuxt/2414fa6523082bcaab7e.js",
    "revision": "95de13c51e7d592b7b5c26f536047733"
  },
  {
    "url": "/_nuxt/314ed7a3be524ac52af2.js",
    "revision": "c0ee0bcaa6166898d5c4abe6e55aee3f"
  },
  {
    "url": "/_nuxt/57c5c11542d6c64d9909.js",
    "revision": "9f06528fc7b2c08a2e4816542c01aec5"
  },
  {
    "url": "/_nuxt/b9f3138567c2af167a5d.js",
    "revision": "22d3c046d4694eabb1065bd5078e8f53"
  },
  {
    "url": "/_nuxt/d04ffa0bfe6ade141a75.js",
    "revision": "4bfada69d213710b0ea2342e46ed1389"
  }
], {
  "cacheId": "reading",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
