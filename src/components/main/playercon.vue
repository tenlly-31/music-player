<template>
  <div class="player_con" :class="{playing:$store.state.isPlaying}">
    <img src="../../assets/img/player_bar.png" class="play_bar" />
    <!-- 黑胶碟片 -->
    <div @click="discClick">
        <img src="../../assets/img/disc.png" class="disc autoRotate"  />
    </div>
    <img :src=" $store.state.musicCover" class="cover autoRotate" />
    
</div>
</template>

<script>
export default {
    methods: {
        discClick(){
            this.$store.commit('discClick')
            let audio = document.getElementById("audio")
            if(this.$store.state.isPlaying === true){
                audio.play()
            } else {
                audio.pause()
            }
        }
    }

}
</script>

<style>
.player_con {
    width: 400px;
    height: 435px;
    position: absolute;
    left: 200px;
    top: 0px;
}

.player_con2 {
    width: 400px;
    height: 435px;
    position: absolute;
    left: 200px;
    top: 0px;
}

.player_con2 video {
    position: absolute;
    left: 20px;
    top: 30px;
    width: 355px;
    height: 265px;
}

.disc {
    position: absolute;
    left: 73px;
    top: 60px;
    z-index: 9;
    /* 鼠标hover变成小手 */
    cursor: pointer;
}

.cover {
    position: absolute;
    left: 125px;
    top: 112px;
    width: 150px;
    height: 150px;
    border-radius: 75px;
    z-index: 8;
}

@keyframes Rotate {
    from {
        transform: rotateZ(0);
    }
    to {
        transform: rotateZ(360deg);
    }
}


/* 旋转的类名 */

.autoRotate {
    animation-name: Rotate;
    animation-iteration-count: infinite;
    animation-play-state: paused;
    animation-timing-function: linear;
    animation-duration: 5s;
}


/* 是否正在播放 */

.player_con.playing .disc,
.player_con.playing .cover {
    animation-play-state: running;
}

.play_bar {
    position: absolute;
    left: 200px;
    top: -10px;
    z-index: 10;
    transform: rotate(-25deg);
    transform-origin: 12px 12px;
    transition: 1s;
}


/* 播放杆 转回去 */

.player_con.playing .play_bar {
    transform: rotate(0);
}
</style>