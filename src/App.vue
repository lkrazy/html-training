<template lang="pug">
  v-app
    v-app-bar#app-bar(app color="#616161" dark)
      .d-flex.align-center
        v-img.shrink.mr-2(
          alt="Vuetify Logo"
          contain
          :src="require('@/assets/logo-ld.png')"
          transition="scale-transition" width="40"
          )
      h3.mr-3(width="300") {{ $route.meta.title }}
      v-tooltip(bottom v-if="!isDocMode")
        template(v-slot:activator="{ on, attrs }")
          v-btn(
            v-on="on"
            icon
            @click="$eventBus.$emit('GEN_CODE')"
            v-bind="attrs"
          )
            v-icon mdi-flash
        span Generate code
      v-spacer
      v-btn(
        text
        @click="changeMode('doc')"
        :class="['mode-btn', isDocMode ? 'active' : '']"
        ) Doc
      v-btn(
        text
        @click="changeMode('code')"
        :class="['mode-btn', !isDocMode ? 'active' : '']"
        ) Code
    v-navigation-drawer(
      app
      fixed
      permanent
      :expand-on-hover="!isDocMode"
      width="200"
    )
      v-app-bar(color="#616161" dark)
        v-select(
        :items="courses"
        v-model="selectedCourse"
        return-object
        dense outlined
        hide-details
        item-text="meta.title"
        )
      v-list(v-if="selectedCourse && selectedCourse.children")
        template(
          v-for="menuItem in selectedCourse.children"
        )
          v-list-item(
            v-if="!menuItem.children"
            :key="menuItem.name"
            :to="{ name: menuItem.name }"
            )
            v-list-item-title {{ menuItem.meta.title }}
          v-list-group(
            v-else
          )
            template(v-slot:activator)
              v-list-item-content
                v-list-item-title {{ menuItem.meta.title }}
            v-list-item(
              v-for="subMenu in menuItem.children"
              :key="subMenu.name"
              :to="{ name: subMenu.name }"
            )
              v-list-item-icon.mr-1
                v-icon mdi-chevron-right
              v-list-item-title {{ subMenu.meta.title }}
    v-main#main-app
      train-content
</template>

<script>
  import htmlMenu from '@/router/htmlMenu'
  import cssMenu from '@/router/cssMenu'
  import HelloWorld from './components/HelloWorld'
  import TrainContent from './components/TrainContent'
  import viewMode from './mixins/viewMode'

  export default {
    name: 'App',
    mixins: [viewMode],

    components: {
      TrainContent,
      HelloWorld
    },

    data: () => ({
      courses: [htmlMenu, cssMenu],
      selectedCourse: null
    }),
    methods: {
      changeMode(mode) {
        this.$eventBus.$emit(`changeMode:${mode}`)
        this.$router.push({ path: this.$route.path, query: { mode } }).catch(() => {})
      }
    },
    mounted() {
      console.log(this.$route)
      this.selectedCourse = this.courses.find((course) => {
        console.log('courseName: ', course.name, course)
        return this.$route.matched.some((m) => m.name === course.name)
      })
      console.log('course: ', this.selectedCourse)
    }
  }
</script>
<style src="./app.sass" lang="sass" />
