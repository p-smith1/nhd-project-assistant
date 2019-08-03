import Vue from 'nativescript-vue'
import App from './App'
import routes from '~/router'
import store from './store'
import drawerContent from '~/components/drawerContent'
import sideDrawer from '~/components/sideDrawer'
import firebase from 'nativescript-plugin-firebase'
import Home from '~/pages/Home'

import VueDevtools from 'nativescript-vue-devtools'
import {TNSFontIcon, fonticon} from 'nativescript-fonticon'

TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  'fa': './assets/font-awesome.css'
}
TNSFontIcon.loadCss()

Vue.filter('fonticon', fonticon)

firebase.init({
  // Optionally pass in properties for database, authentication and cloud messaging,
  // see their respective docs.
}).then(
    function () {
      console.log("firebase.init done");
    },
    function (error) {
      console.log("firebase.init error: " + error);
    }
)

Vue.prototype.$routes = routes

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)

// new Vue({
//   store,
//   render: h => h('frame', [h(App)])
// }).$start()

new Vue({
  store,
  render: h => h('Frame', [
    h(App, [
      h(Home, { slot: 'mainContent' })
    ])
  ])
}).$start()

// new Vue({
//   store,
//   render (h) {
//     return h(
//       sideDrawer,
//       [
//         h(drawerContent, { slot: 'drawerContent' }),
//         h(routes.Home, { slot: 'mainContent' })
//       ]
//     )
//   }
// }).$start()