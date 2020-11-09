<template>
  <div class="song_wrapper">
    <ul class="song_list">
      <li v-for="item in $store.state.musicList" :key="item.id">
        <a href="javascript:;" @click="playMusic(item.id)"></a>
        <b>{{ item.name }}</b>
        <span v-if="item.mvid!=0" @click="playMV(item.mvid)"><i></i></span>
      </li>
    </ul>
    <!-- 小竖线 -->
    <img src="../../assets/img/line.png" class="switch_btn" alt="">
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  methods: {
     playMusic: async function(musicId) {
            // console.log(musicId);
        const response = await this.$http.get("https://autumnfish.cn/song/url?id=" + musicId)
        if(response.data.code !== 200) return 
                    // console.log(response);
        this.$store.state.musicUrl = response.data.data[0].url;
            //歌曲封面
        const cover = await this.$http.get("https://autumnfish.cn/song/detail?ids=" + musicId)
        if(cover.data.code !== 200) return 
        this.$store.state.musicCover = cover.data.songs[0].al.picUrl;
            //歌曲评论
        const commit = await this.$http.get("https://autumnfish.cn/comment/hot?type=0&id=" + musicId)
        if(commit.data.code !== 200) return
        this.$store.state.hotComments = commit.data.hotComments;
    },
    playMV: async function(mvid) {
        let audio = document.getElementById("audio")
        audio.pause()
           
        const {data: res} = await this.$http.get("https://autumnfish.cn/mv/url?id=" + mvid)
        if(res.code !== 200) return
        this.$store.state.mvUrl = res.data.url;
        this.$store.state.isShow = true;
    },
  }
}
</script>

<style>
.song_wrapper {
    width: 200px;
    height: 435px;
    box-sizing: border-box;
    padding: 10px;
    list-style: none;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 1;
}
.song_list {
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
}

.song_list::-webkit-scrollbar {
    display: none;
}

.song_list li {
    font-size: 12px;
    color: #333;
    height: 40px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 580px;
    padding-left: 10px;
}

.song_list li:nth-child(odd) {
    background-color: rgba(240, 240, 240, 0.3);
}

.song_list li a {
    display: block;
    width: 17px;
    height: 17px;
    background-image: url("../../assets/img/play.png");
    background-size: 100%;
    margin-right: 5px;
    box-sizing: border-box;
}

.song_list li b {
    font-weight: normal;
    width: 122px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.song_list li span {
    width: 23px;
    height: 17px;
    margin-right: 50px;
}

.song_list li span i {
    display: block;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background: url("../../assets/img/table.png") left -48px no-repeat;
}

.song_list li em,
.song_list li i {
    font-style: normal;
    width: 100px;
}
</style>