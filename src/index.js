import YoutubeVue from './components/YoutubeVue.vue'

const install = (Vue) => {
  Vue.component(YoutubeVue.name, YoutubeVue)
}

// auto install if used in browser
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
    install
}

export default YoutubeVue