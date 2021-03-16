<template lang="pug">
  v-container.pa-0(fluid)
    iframe#docFrame(
      v-if="hasDoc"
      name="docFrame"
      width="100%"
      :height="height"
      :src="docLink"
      @load="onFrameLoaded")
</template>

<script>
  import isNil from 'lodash/isNil'
  import isEmpty from 'lodash/isEmpty'

  export default {
    name: 'DocView',

    data: () => ({
      height: 500
    }),
    computed: {
      hasDoc() {
        return !isNil(this.$route.meta.doc) && !isEmpty(this.$route.meta.doc)
      },
      docLink() {
        return `./docs/${this.$route.meta.doc}.html`
      }
    },
    methods: {
      onFrameLoaded() {
        // <link rel="stylesheet" href="https://www.w3schools.com/lib/w3schools23.css">
        const link = document.createElement('link')
        link.href = 'https://www.w3schools.com/lib/w3schools23.css'
        link.rel = 'stylesheet'
        link.type = 'text/css'
        window.frames.docFrame.document.head.appendChild(link)
        window.frames.docFrame.document.documentElement.style.overflow = 'hidden'
        setTimeout(() => {
          const windowHeight = window.innerHeight
          let height = window.frames.docFrame.document.documentElement.scrollHeight + 50
          if (height < windowHeight) {
            height = windowHeight
          }
          this.height = height
        }, 1000)
      }
    },
    mounted() {
      this.height = window.innerHeight - 100
    }
  }
</script>
<style lang="sass">
  #docFrame
    /*display: none*/
    body, html
      overflow: hidden
</style>
