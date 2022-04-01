# youtube-vue

Youtube Player Component for Vue.js 2.x.  
This is based on [youtube-player](https://github.com/gajus/youtube-player)

Youtube Player for Vue 3.x--> [Here](https://github.com/stepanowon/youtube-vue3)

[![npm](https://img.shields.io/npm/v/youtube-vue.svg)](https://www.npmjs.com/package/youtube-vue)
[![npm](https://img.shields.io/npm/dm/youtube-vue.svg)](https://www.npmjs.com/package/youtube-vue)
[![GitHub stars](https://img.shields.io/github/stars/stepanowon/youtube-vue.svg?style=social&label=Stars&style=for-the-badge)](https://github.com/stepanowon/youtube-vue/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/stepanowon/youtube-vue.svg?style=social&label=Fork&style=for-the-badge)](https://github.com/stepanowon/youtube-vue/network)
[![Build Status](https://travis-ci.org/stepanowon/youtube-vue.svg?branch=master)](https://travis-ci.org/stepanowon/youtube-vue)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

---

> Contact : stepanowon@hotmail.com  
> Author : Stephen Won(원형섭), OpenSG Inc.  
> Online Demo : https://youtube-vue.vercel.app/

## Screen Shot

<img src="https://raw.githubusercontent.com/stepanowon/youtube-vue/master/images/videoid.png" width="640" height="480" />

## License

MIT

## Usage

#### CDN - install

```
<script type="text/javascript" src="https://unpkg.com/vue"></script>
<script type="text/javascript" src="https://unpkg.com/youtube-vue"></script>
```

#### CDN - usage

```
<div id="app">
    <div>
        <youtube-vue :videoid="video_id" :loop="loop" :autoplay="autoplay" />
    </div>
</div>
......
<script type="text/javascript">
    new Vue({
        el : "#app",
        data : {
            video_id:"PABUl_EX_hw", loop:0, autoplay:1
        }
    })
</script>
......
```

##

#### NPM - install

```
npm install --save youtube-vue
- or -
yarn add youtube-vue
```

#### NPM - usage

```
<template>
  <div>
    <div>
      video_id : <input type="text" v-model="temp.video_id" /><br />
      loop : <input type="number" v-model.number="temp.loop" /><br />
      <button @click="applyConfig">Apply</button>
      <button @click="playCurrentVideo">Play</button>
      <button @click="stopCurrentVideo">Stop</button>
      <button @click="pauseCurrentVideo">Pause</button>
    </div>
    <YoutubeVue
      ref="youtube"
      :videoid="play.video_id"
      :loop="play.loop"
      :width="480"
      :height="320"
      :modestbranding="1"
      :controls="1"
      @ended="onEnded"
      @paused="onPaused"
      @played="onPlayed"
    />
  </div>
</template>

export default {
  name: "App",
  data() {
    return {
      temp: { video_id: "3P1CnWI62Ik", loop: 1 },
      play: { video_id: "3P1CnWI62Ik", loop: 1 },
    };
  },
  components: {
    YoutubeVue,
  },
  methods: {
    applyConfig() {
      this.play = Object.assign(this.play, this.temp);
    },
    playCurrentVideo() {
      this.$refs.youtube.player.playVideo();
    },
    stopCurrentVideo() {
      this.$refs.youtube.player.stopVideo();
    },
    pauseCurrentVideo() {
      this.$refs.youtube.player.pauseVideo();
    },
    onEnded() {
      console.log("## OnEnded");
      this.$refs.youtube.player.playVideo();
    },
    onPaused() {
      console.log("## OnPaused");
    },
    onPlayed() {
      console.log("## OnPlayed");
    },
  },
};
</script>
```

##

#### Props

- width
  - type : Number
  - width of player
- height
  - type : Number
  - height of player
- autoplay
  - type : Number
  - default value : 0
  - autoplay of player ( 0 , 1:autoplay)
- videoid
  - type : String
  - Youtube video id
- loop
  - type : Number
  - default value : 0
  - a setting of 1 causes the player to play the initial video again and again
- controls
  - type : Number
  - default value : 0
  - https://developers.google.com/youtube/player_parameters#controls
- modestbranding
  - type : Number
  - default value : 1
  - https://developers.google.com/youtube/player_parameters#modestbranding

##

#### methods

- playVideo()
- stopVideo()
- mute()
- unMute()
- setVolume(number) : number => 0~100
- getVolume()
- setSize(width, height) : you can set player size on run-time

## events

- ended : when current video is ended
- paused : when current video is pauded
- played : when video is played
- ready : when player is ready state
