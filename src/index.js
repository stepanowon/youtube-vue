import YoutubeVue from './components/YoutubeVue.vue'

const install = (Vue) => {
  Vue.component('youtube-vue', YoutubeVue)
}

// auto install if used in browser
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
    YoutubeVue
}

export default install