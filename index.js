import Vue from 'vue'
import App from './src/App.vue'
import './src/1.png'
import './src/bb.png'
import './src/index.css'

// var root = document.createElement('div')
// document.body.appendChild(root)
console.log(App);
new Vue({
  el:"#app",
  render: h => h(App)
})
