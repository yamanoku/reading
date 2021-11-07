import path from 'path'
import { NuxtConfig } from '@nuxt/types'
import axios from 'axios'
import { emojify } from 'node-emoji'
import { TOKEN } from './static/config'

type feed = {
  options: {
    title: string
    link: string
    description: string
  }
  addItem(number: {title: string, guid: string, link: string}): void
}

interface AsyncData {
  api: Array<{
    attachments: {
      [key: number]: {
        title?: string
        'title_link'?: string
        text: string
      }
    }
    iid: string
  }>
}

const nuxtConfig: Partial<NuxtConfig> = {
  target: 'static',
  telemetry: false,
  head: {
    title: 'READING...',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '@yamanoku Reading News List'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://yamanoku.net/reading/icon.png'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  build: {
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        if (!config.module) {
          return
        }
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    quiet: false
  },
  buildModules: [
    [
      '@nuxt/typescript-build',
      {
        typeCheck: true,
        ignoreNotFoundWarnings: true
      }
    ],
    '@nuxtjs/tailwindcss'
  ],
  generate: {
    routes () {
      return [
        '/archive/2020',
        '/archive/2019',
        '/archive/2018'
      ]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
      '~': path.resolve(__dirname)
    }
  },
  plugins: [
    '~/plugins/vue-axe',
    { src: '@/plugins/mock', mode: 'client' }
  ],
  modules: ['@nuxtjs/feed', '@nuxtjs/pwa'],
  feed: [
    {
      path: '/feed.xml',
      async create (feed: feed) {
        feed.options = {
          title: 'Reading…',
          link: 'https://reading.yamanoku.net/feed.xml',
          description: "yamanoku's reading feed"
        }
        let posts
        if (process.env.NODE_ENV === 'development') {
          const { data } = await axios.get<AsyncData>('/api')
          posts = data.api
        } else {
          const { data } = await axios.get<AsyncData>(TOKEN)
          posts = data.api
        }
        const urlRender = function (text: string): string {
          if (text === null) {
            return ''
          }
          const textCheckArray = text.match(/ <([^\s]+)>/)
          if (textCheckArray !== null) {
            return textCheckArray[1]
          } else {
            return ''
          }
        }
        const emojiRender = function (text: string): string {
          return emojify(text)
        }
        posts.forEach(
          (post) => {
            if (!post.attachments[0].title) {
              feed.addItem({
                title: emojiRender(post.attachments[0].text),
                guid: post.iid,
                link: urlRender(post.attachments[0].text)
              })
            } else {
              feed.addItem({
                title: emojiRender(post.attachments[0].title),
                guid: post.iid,
                link: post.attachments[0].title_link!
              })
            }
          }
        )
      },
      cacheTime: 1000 * 60 * 15,
      type: 'rss2'
    }
  ],
  workbox: {
    dev: true
  },
  manifest: {
    name: 'READING...',
    short_name: 'READING...',
    title: 'READING...',
    'og:title': 'READING...',
    description: '@yamanoku Reading News List',
    'og:description': '@yamanoku Reading News List',
    lang: 'en',
    theme_color: '#f9f9f9',
    background_color: '#f9f9f9'
  }
}

module.exports = nuxtConfig
