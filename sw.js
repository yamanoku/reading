importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0a7c44523e3165f6ddca.js",
    "revision": "5426603b5c51b3b8c2d5f143f8ab10af"
  },
  {
    "url": "/_nuxt/336b95daba4cda06cf4e.js",
    "revision": "17b4a9e5a104649e5f60cf4a4f4a2a96"
  },
  {
    "url": "/_nuxt/8cbd8fe18309b3b164f2.js",
    "revision": "ad9c2a9091661955c9d4083350b7c77a"
  },
  {
    "url": "/_nuxt/c0898178b30a36c54ed9.js",
    "revision": "6099d1cc1f86b4c7bbdf869df1e7b985"
  },
  {
    "url": "/_nuxt/d6204b821b3352f86884.js",
    "revision": "16dd2df3f74c6847f9a0b2ff2c733c4a"
  },
  {
    "url": "/_nuxt/d8a731ae66a43c8f8288.js",
    "revision": "3294781265dd7c9cb67388f2272d8886"
  },
  {
    "url": "/_nuxt/fec262e98be5c73415ac.js",
    "revision": "32adefebc81e607997d3724c4a4ed561"
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
