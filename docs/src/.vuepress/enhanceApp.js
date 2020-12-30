/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

 import Vuetify from 'vuetify'
 import 'vuetify/dist/vuetify.min.css'

// Helpers
import colors from 'vuetify/es5/util/colors'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(Vuetify, {
    theme: {
      primary: colors.indigo.base, // #3f51b5
      secondary: colors.red.lighten4, // #FFCDD2
      accent: colors.pink.accent2 // #FF4081
    }
  })
  // ...apply enhancements for the site.
}
