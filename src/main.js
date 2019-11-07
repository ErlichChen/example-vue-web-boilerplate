import Vue from 'vue';
import app from './app.vue';
import routes from './router/routes';

Vue.config.productionTip = false

new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./components/' + matchingView + '.vue')
        : require('./components/404.vue')
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
}).$mount('#app')

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
