import YoutubeVue from './YoutubeVue.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('youtube-vue', YoutubeVue);
  }
};