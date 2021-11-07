<template>
  <!-- title response -->
  <a
    v-if="linkData.attachments[0].title"
    :href="linkData.attachments[0].title_link"
    target="_blank"
    rel="noopener"
    :class="btnStyle"
  >
    {{ emojiRender(linkData.attachments[0].title) }}
  </a>
  <!-- title not response -->
  <a
    v-else
    :href="urlRender(linkData.attachments[0].pretext)"
    target="_blank"
    rel="noopener"
    :class="btnStyle"
  >
    {{ emojiRender(preTextRender(linkData.attachments[0].pretext)) }}
  </a>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { emojify } from 'node-emoji'

type listData = {
  attachments: {
    [key: number]: {
      title?: string
      'title_link'?: string
      text?: string
      pretext: string
    }
  }
  iid: string
}

export default Vue.extend({
  props: {
    listData: {
      type: Object as PropType<listData>,
      required: true,
      default () {
        return {}
      }
    },
    newsBtnStyle: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {
      linkData: this.listData,
      newsBtnClass:
        'block bg-gray text-black font-bold no-underline rounded-sm border border-solid hover:bg-primary hover:border hover:border-solid hover:text-white focus:bg-primary focus:border focus:border-solid focus:text-white focus:outline-none'
    }
  },
  computed: {
    btnStyle (): string {
      if (!this.newsBtnStyle) { return 'underline' }
      return 'block bg-gray text-black font-bold no-underline rounded-sm border border-solid hover:bg-primary hover:border hover:border-solid hover:text-white focus:bg-primary focus:border focus:border-solid focus:text-white focus:outline-none'
    }
  },
  methods: {
    preTextRender (text: string) {
      if (text.includes('Reading... ')) {
        const mystr = text.split('Reading... ').join('')
        return mystr.replace(/<[^a-z]*> : /g, '').replace(/^<[^>]h>|<[^>]*>/g, '').replace(/.via Twitter ./g, '')
      } else if (text.includes('Reading… ')) {
        const mystr = text.split('Reading… ').join('')
        return mystr.replace(/<[^a-z]*> : /g, '').replace(/^<[^>]h>|<[^>]*>/g, '').replace(/.via Twitter ./g, '')
      }
    },
    urlRender (text: string) {
      if (text === null) {
        return ''
      }
      const textCheckArray = text.match(/ <([^\s]+)>/)
      if (textCheckArray !== null) {
        return textCheckArray[1]
      } else {
        return ''
      }
    },
    emojiRender (text: string) {
      return emojify(text)
    }
  }
})
</script>
