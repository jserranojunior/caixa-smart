import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from '../js/routes'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import store from './vuex/store'
import store from './store'

 
import App from './components/App' 

const router = new VueRouter({
    // mode: 'history', #### REMOVE A HASHTAG DO VUE E DEIXA URL TODA ###
    // fallback: true,  #### REMOVE A HASHTAG DO VUE E DEIXA URL TODA ###
    routes,
})
 
  
Vue.use(VueRouter)
new Vue({
    store,
    router,
    components:{
        App, 
    }
}).$mount('#app')   

