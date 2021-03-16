<template lang="pug">
  v-container(fluid)
    doc-view(v-show="isDocMode")
    code-view(v-show="!isDocMode" :is-active="!isDocMode")
</template>

<script>
  import DocView from './DocView'
  import CodeView from './CodeView'
  import viewMode from '../mixins/viewMode'

  export default {
    name: 'TrainContent',
    components: { CodeView, DocView },
    mixins: [viewMode],
    data: () => ({}),
    computed: {}
  }
</script>
