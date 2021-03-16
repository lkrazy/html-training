import isNil from 'lodash/isNil'

export default {
  computed: {
    isDocMode() {
      return isNil(this.$route.query.mode) || this.$route.query.mode === 'doc'
    }
  }
}
