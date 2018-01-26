# vue-tube 
Youtube Player Component for Vue.js 2.x.
This is based on https://developers.google.com/youtube/player_parameters?hl=en 

> Contact : stepanowon@hotmail.com (Stephen Won : 원형섭)
>
> Online Demo : [jsfiddle](https://jsfiddle.net/v0wffu6z), [single html](http://sample.bmaster.kro.kr/vuetube-sample.html) 
## License
MIT
## Usage  
#### CDN - install
~~~
<script type="text/javascript" src="https://unpkg.com/vue@2.5.13/dist/vue.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/stepanowon/vue-tube/master/dist/vue-tube.min.js"></script>
<script type="text/javascript">
    Vue.use(VueTube)
</script>
~~~
#### CDN - usage
~~~
<div id="app">
    <div>
        <vue-tube :videoid="video_id" :loop="loop" :autoplay="autoplay" />
    </div>
</div>
......
<script type="text/javascript">
    Vue.use(VueTube)
    new Vue({
        el : "#app",
        data : {
            video_id:"PABUl_EX_hw", loop:0, autoplay:1
        }
    })
</script>
......
~~~
##
#### NPM Registry - install
~~~
npm install --save vue-tube
- or -
yarn add vue-tube
~~~

#### NPM Registry - usage
~~~
<VueTube :videoid="video_id" :width="640" :height="480" :autoplay="1" :loop="1" :listType="listType" :list="list" />
......
<script>
import VueTube from 'vue-tube'

export default {
  components: { VueTube },
}
</script>
~~~
##
#### Props
   * width
      - type : Number
      - width of player 
   * height 
     - type : Number
     - height of player
   * autoplay 
      - type : Number
      - default value : 0
      - autoplay of player ( 0 , 1:autoplay) 
   * videoid 
      - type : String 
      - Youtube video id
   * hl 
      - type : String
      - default value : 'en' 
      - interface language(ex:en, ko, ja)
   * loop
      - type : Number
      - default value : 0
      - a setting of 1 causes the player to play the initial video again and again
   * rel
      - type : Number
      - default value : 0
      - a setting of 1 causes the player to show related videos when playback of the initial video ends.
   * listType
	   - type : String
	   - list type : 'search', 'playlist', 'user_uploads'
   * list
      - type : String
      - If the listType parameter value is search, then the list parameter value specifies the search query.
      - If the listType parameter value is user_uploads, then the list parameter value identifies the YouTube channel whose uploaded videos will be loaded.
      - If the listType parameter value is playlist, then the list parameter value specifies a YouTube playlist ID. In the parameter value, you need to prepend the playlist ID with the letters PL as shown in the example below.
      - if you want to use this parameter, videoid parameter must not be specified. 
##
#### methods
  * playVideo()
  * stopVideo() 
  * mute()
  * unMute()
  * setVolume(number) : number => 0~100
  * getVolume() 
  * setSize(width, height) : you can set player size on run-time

## events
  * ended : when current video is ended
  * paused : when current video is pauded 
  * played : when video is played



