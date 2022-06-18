import path from 'path'
import { WebClient } from '@slack/web-api'
import axios from 'axios'
import { emojify } from 'node-emoji'
import { defineNuxtConfig } from 'nuxt'

type feed = {
  options: {
    title: string
    link: string
    description: string
  }
  addItem(number: {title: string, guid: string, link: string}): void
}

export interface AttachmentData {
  pretext: string;
  title?: string;
  'title_link'?: string;
  text?: string;
}

export interface Response {
  iid: string;
  attachments: AttachmentData[];
}

interface AsyncData {
  api: Array<Response>
}

export default defineNuxtConfig({
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
  buildModules: ['@nuxtjs/tailwindcss'],
  generate: {
    routes :[
      '/archive/2020',
      '/archive/2019',
      '/archive/2018'
    ]
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
          const token = process.env.SLACK_TOKEN
          const web = new WebClient(token)
          const messages = await web.search.messages({
            query: 'Reading',
            sort: 'timestamp',
            sort_dir: 'desc',
            count: 100
          }).then((res) => {
            return res.messages
          })
          posts = messages?.matches
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
        const preTextRender = function (text: string): string | undefined {
          if (text.includes('Reading... ')) {
            const mystr = text.split('Reading... ').join('')
            return mystr.replace(/<[^a-z]*> : /g, '').replace(/^<[^>]h>|<[^>]*>/g, '').replace(/.via Twitter ./g, '')
          } else if (text.includes('Reading… ')) {
            const mystr = text.split('Reading… ').join('')
            return mystr.replace(/<[^a-z]*> : /g, '').replace(/^<[^>]h>|<[^>]*>/g, '').replace(/.via Twitter ./g, '')
          }
        }
        const emojiRender = function (text: string): string {
          return emojify(text)
        }
        posts?.forEach(
          (post: any) => {
            if (post.attachments[0].title) {
              feed.addItem({
                title: emojiRender(post.attachments[0].title),
                guid: post.iid!,
                link: urlRender(post.attachments[0].title)
              })
            } else {
              feed.addItem({
                title: emojiRender(preTextRender(post.attachments[0].pretext)!),
                guid: post.iid,
                link: urlRender(post.attachments[0].pretext)
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
})

