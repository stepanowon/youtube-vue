import YoutubeVue from '../examples/youtube-vue-demo/src/components/YoutubeVue.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('youtube-vue', YoutubeVue);
  }
};

