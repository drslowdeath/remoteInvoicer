// // main.js
// import Alpine from 'alpinejs'
// import '/src/css/style.css'
// // Plugins
// import morph from '@alpinejs/morph'
// import anchor from '@alpinejs/anchor'
// import collapse from '@alpinejs/collapse'
// import persist from '@alpinejs/persist'

// import sideBar from '/src/components/navigation/sideBar.js'
// import mainScreen from '/src/components/navigation/mainScreen.js'
// import feather from 'feather-icons'

// // Setup Alpine
// window.Alpine = Alpine

// Alpine.plugin(morph)
// Alpine.plugin(persist)
// Alpine.plugin(anchor)
// Alpine.plugin(collapse)

// Alpine.data('tabManager', tabManager)
// Alpine.data('toastManager', toastManager)

// document.addEventListener('alpine:init', () => {
//   // Register Alpine components here
//   // Stores
//   Alpine.store('darkMode', {
//     init() {
//       this.on = window.matchMedia('(prefers-color-scheme: dark)').matches
//     },
//     on: Alpine.$persist(false),

//     toggleTheme() {
//       this.on = !this.on
//     },
//   })
//   Alpine.store('svg', {
//     icons: feather.icons,
//     svgCache: [],
//     async init() {
//       this.svgCache.push(feather('feather-icons'))
//       await this.getSvgCache()
//       console.log(this.svgCache)
//     },
//     getIcon(name, options = {}) {
//       // Example: feather.icons.circle.toSvg({ 'stroke-width': 1, width: 20, ... });
//       // Returns a string
//       if (!feather.icons[name]) {
//         throw new Error('Icon not found')
//       }
//       return feather.icons[name].toSvg(options)
//     },
//   })
//   Alpine.data('tabManager', () => ({
//     init() {
//       console.log('Tab manager initialized')
//       this.initializeContent()
//     },

//     initializeContent() {
//       console.log('Initializing sidebar and main screen...')
//     },
//   }))

//   Alpine.data('sideBar', sideBar)
//   Alpine.data('mainScreen', mainScreen)
// })

// // Components

// document.addEventListener('alpine:init', () => {
//   // Register Managers
// })

// // Register Components
// Alpine.data('sideBar', sideBar)
// Alpine.data('mainScreen', mainScreen)

// // Start Alpine
// Alpine.start()

// console.log('Application Initialized')

import Alpine from 'alpinejs'
import sideBar from './components/navigation/sideBar.js'
import mainView from './components/navigation/mainView.js'
import tabStore from './tabStore.js'
import { persist } from '@alpinejs/persist'

Alpine.plugin(persist)

window.Alpine = Alpine

Alpine.store('tabStore', tabStore)

Alpine.data('tabManager', () => ({
  init() {
    console.log('Tab Manager Started')
    this.loadUI()
  },

  loadUI() {
    Alpine.data('sideBar', sideBar)
    Alpine.data('mainView', mainView)
  },
}))

document.addEventListener('DOMContentLoaded', () => {
  Alpine.start()
})
