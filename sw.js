importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0ca5aeafafa65a67a0b9.js",
    "revision": "d4b57d71915611cf5c7b0a253230f320"
  },
  {
    "url": "/_nuxt/29f2f55b6d68942cd0bb.js",
    "revision": "5eb53a5f5a86079534584d6ef558bdc1"
  },
  {
    "url": "/_nuxt/5ec12b01e4233b08671e.js",
    "revision": "b94139aec12205f82e10ce6cf42bd243"
  },
  {
    "url": "/_nuxt/80e34c0222b436fd5cfa.js",
    "revision": "b3ff9afdeda8305defc178d196ec62bc"
  },
  {
    "url": "/_nuxt/a47454a8bae7fce6aaf9.js",
    "revision": "27e8e30e8654bc79f6bb0db0847ed95e"
  },
  {
    "url": "/_nuxt/a92836490cd1d5e18fb3.js",
    "revision": "5b0fdb1506a5ad048a7bd7cfa664cca0"
  },
  {
    "url": "/_nuxt/bd7ed51ad1a6c211cffb.js",
    "revision": "28e8eabdcbed85b4186a6e4724246663"
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
