<template>
    <div class="styleContainer">
        <iframe id="player" :style="stylePlayer" type="text/html" 
            :width="width" :height="height"
            :src="videoSrc" :title="videoid"
            frameBorder="0"
            allowFullScreen="1" />
    </div>
</template>

<script>
export default {
    name: 'vue-tube',
    mounted() {
     
        this.player = new YT.Player('player', {
            height: this.height,
            width: this.width,
            videoId: this.videoid,
            playerVars : {
                list: this.list,
                listType: this.listType,
                hl: this.hl,
                loop: this.loop,
                rel: this.rel,
                autoplay: this.autoplay,  
            },
            events : {
                'onReady': (e) => {
                    console.log("### Ready")
                },
                'onStateChange': (e) => {
                    if (e.data === YT.PlayerState.ENDED) {
                        this.$emit('ended')
                    } else if (e.data === YT.PlayerState.PAUSED) {
                        this.$emit('paused')
                    } else if (e.data === YT.PlayerState.PLAYING) {
                        this.$emit('played')
                    }
                }
            }
        });
    },
    /**
    * @Properties
    * @width {Number} width of player 
    * @height {Number} height of player
    * @autoplay {Number} autoplay of player =(0,1:autoplay) - default value:0
    * @videoid {String} - Youtube video id
    * @hl {String} interface language(ex:ko, en) - default value:en
    * @loop {Number} (0,1:loop) - default value:0
    * @rel {Number} display relative video(0, 1:display) - default value:0
    * @listType {String} list type - ('search', 'playlist', 'user_uploads')
    * @list {String} (listType:'search'-> search keyword), (listType:'user_uploaded'-> uploaded youtube channel), (listType:'playlist'-> playlist_id)
    * @origin {String} optional value, assign Your web application's origin
    */
    props: {
        width: { type:Number, default:480 },
        height: { type:Number, default:320 },
        autoplay: { type:Number, default:0, validator: (v) => Number(v)===0||Number(v)===1 },
        videoid : { type:String, required:true },
        hl: { type:String, default:'en' },
        loop : { type:Number, default:0, validator: (v) => Number(v)===0||Number(v)===1 },
        rel : { type:Number, default:0, validator: (v) => Number(v)===0||Number(v)===1 },  
        listType: { type:String, required:false, validator: (v) => v==="search"||v==="user_uploades"||v==="playlist" },
        list: { type:String, required:false },  
        origin : { type:String, default:"http://localhost:8080" }
    },
    computed : {
        stylePlayer() {
            return { width:this.width, height:this.height }
        },
        videoSrc() {
            //**props validation!!
            if (this.videoid && this.videoid.trim() !== '') 
                if (this.loop === 1)
                    return `https://www.youtube.com/embed/${this.videoid}?origin=${this.origin}&enablejsapi=1&autoplay=${this.autoplay}&modestbranding=1&fs=1&hl=${this.hl}&loop=${this.loop}&rel=${this.rel}&playlist=${this.videoid}`;
                else if (this.loop === 0)
                    return `https://www.youtube.com/embed/${this.videoid}?origin=${this.origin}&enablejsapi=1&autoplay=${this.autoplay}&modestbranding=1&fs=1&hl=${this.hl}&loop=${this.loop}&rel=${this.rel}`;                    
                else
                    throw new Error('loop props must be 0 or 1.')
            else if (this.listType.trim() !== '' && this.list.trim() !== '')
                return `https://www.youtube.com/embed?origin=${this.origin}&enablejsapi=1&listType=${this.listType}&list=${this.list}&autoplay=${this.autoplay}&modestbranding=1&fs=1&hl=${this.hl}&loop=${this.loop}&rel=${this.rel}`;
            else
                throw new Error('Invalid props: either videoid or (listType, list) must be assigned.')
        }
    },
    methods : {
        playVideo(){
            this.player.playVideo();
        },
        stopVideo() {
            this.player.stopVideo();
        },
        pauseVideo() {
            this.player.pauseVideo();
        },
        mute() {
            this.player.mute();
        },
        unMute() {
            this.player.unMute();
        },
        setVolume(volume) {
            if (volume >= 0 && volume <= 100) {
                this.player.setVolume(volume)
            }
        },
        getVolume()  {
            return this.player.getVolume()
        },
        setSize(width, height) {
            this.player.setSize(width, height)   
        }
    }
}
</script>

<style scoped>
    .styleContainer { margin:0; padding:0; }
</style>
