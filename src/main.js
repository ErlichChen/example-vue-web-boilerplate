// import Vue from 'vue';
// import app from './app.vue';

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(app),
// }).$mount('#app');

// window.addEventListener('popstate', () => {
//   app.currentRoute = window.location.pathname
// })

import { createApp } from 'vue'

// import App from './App.vue'
// import Counter from './example/Counter.vue'
// import Cart from './example/Cart.vue'
import CartApp from './example/CartApp.vue'

createApp(CartApp).mount('#app')
