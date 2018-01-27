import YoutubeVue from './YoutubeVue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('youtube-vue', YoutubeVue);
  }
};

