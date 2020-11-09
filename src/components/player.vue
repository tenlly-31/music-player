<template>
  <div class="wrap">
      
        <!-- 播放器主体区域 -->
        <div class="play_wrap" id="player">
            <!-- 头部部分 -->
            <topbar />
            <!-- 主体部分 -->
            <mainpart />
            <!-- 底部播放器 -->
            <div class="audio_con">
                <audio id="audio" :src="$store.state.musicUrl" @play="play" @pause="pause" ref='audio' controls autoplay loop class="myaudio"></audio>
            </div>
            <!-- 播放mv前的遮罩层 -->
            <div class="video_con" style="display: none;" v-show="$store.state.isShow">
                <video :src="$store.state.mvUrl" controls="controls" autoplay></video>
                <div class="mask" @click="hide"></div>
            </div>
        </div>
    </div>

</template>

<script>
import topbar from './header/topbar';
import mainpart from './main/mainpart';

export default {
  data(){
    return{
    }
  },
  props: {
    msg: String
  },
  methods:{
        // 歌曲播放
        play: function() {
            // console.log("play");
            this.$store.state.isPlaying = true;
        },
        // 歌曲暂停
        pause: function() {
            // console.log("pause");
            this.$store.state.isPlaying = false;
        },
        // 隐藏
        hide: function() {
            this.$store.state.isShow = false;
            this.$store.state.mvUrl = '';
            if(this.$store.state.musicUrl !== ''){
                this.$store.commit('discClick')
                let audio = document.getElementById("audio")
                if(this.$store.state.isPlaying === true){
                    audio.play()
                } else {
                    audio.pause()
                }
            }
        }
  },
  components: {
      topbar,
      mainpart
  }
}
</script>


<style scoped>


</style>
