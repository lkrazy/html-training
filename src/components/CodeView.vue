<template lang="pug">
  v-container.pa-0(fluid)
    v-row.ma-0
      v-col.pl-0.pr-0(md="6" ref="codeColumn")
        monaco-editor(
        v-if="isReady && isActive"
        :options="options"
        v-model="sourceCode"
        :width="width"
        :height="height"
        language="html"
        theme="vs-dark"
        )
      v-col.pl-0(md="6")
        iframe(
          frameborder="none"
          :width="width"
          :height="height"
          ref="previewFrame"
          :src="htmlContent"
          )
</template>

<script>
  import MonacoEditor from 'monaco-editor-vue'
  import SAMPLE_CODE from '../constants/sampleCode'

  export default {
    name: 'CodeView',
    components: {
      MonacoEditor
    },
    props: {
      isActive: {
        type: Boolean
      }
    },
    watch: {
      isActive(val) {
        if (val) {
          setTimeout(() => {
            this.calculateCodeSize()
            this.isReady = true
          }, 300)
        } else {
          this.isReady = false
        }
      }
    },
    data: () => ({
      sourceCode: '',
      isReady: false,
      height: 500,
      width: 500,
      options: {
        autoIndent: true,
        mouseWheelZoom: true,
        minimap: {
          enabled: false
        }
      }
    }),
    computed: {
      htmlContent() {
        return `data:text/html;charseet=utf8,${escape(this.sourceCode)}`
      }
    },
    methods: {
      calculateCodeSize() {
        const { innerHeight } = window
        const { innerWidth } = window
        this.height = innerHeight - 106
        this.width = (innerWidth - 80) / 2 - 10
      },
      generateCode() {
        this.sourceCode = SAMPLE_CODE
      }
    },
    mounted() {
      this.$eventBus.$on('GEN_CODE', this.generateCode)
      this.$eventBus.$on('changeMode:code', this.calculateCodeSize)
      this.calculateCodeSize()
    },
    destroyed() {
      this.$eventBus.$off('GEN_CODE', this.generateCode)
      this.$eventBus.$off('changeMode:code', this.calculateCodeSize)
    }
  }
</script>
