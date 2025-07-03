import { createApp } from 'vue'
import mitt from 'mitt'
import '@babel/polyfill'

import App from './App.vue'
import router from './router'
import ColorInput from 'vue-color-input'
import VueHtml2Canvas from 'vue-html2canvas'

import './assets/scss/main.scss'

window.eventBus = mitt()

createApp(App).use(router).use(ColorInput).use(VueHtml2Canvas).mount('#app')
