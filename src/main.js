import Vue from 'vue'
import App from './App.vue'

import firebase from 'firebase';

import Router from './routes.js'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate';

Vue.config.productionTip = false;

var config = {
  apiKey: "AIzaSyBF4aG-wf3Yl83nH9LNnlPIMGPBlPd7nNQ",
  authDomain: "deliveryapp-2727f.firebaseapp.com",
  databaseURL: "https://deliveryapp-2727f.firebaseio.com",
  projectId: "deliveryapp-2727f",
  storageBucket: "deliveryapp-2727f.appspot.com",
  messagingSenderId: "878599933785"
};

firebase.initializeApp(config);

Vue.use(VeeValidate);
Vue.use(VueRouter);

new Vue({
  el: '#app',
  router: Router,
  render: h => h(App)
})
