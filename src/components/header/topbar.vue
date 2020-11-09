<template>
  <!-- 头部 -->
  <div class="search_bar">
    <img src="../../assets/img/title.png" />
    <!-- 搜索歌曲 -->
    <!-- @clear="searchMusic" -->
    <div class="searchbox">
      <el-input class="searchInput" placeholder="请输入内容" v-model="query" clearable @change="searchMusic" autocomplete="off">
        <el-button type="goon" slot="append" icon="el-icon-search" @click="searchMusic" ></el-button>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
    }
  },
  mounted(){
    this.searchMusic();
  },
  methods: {
    searchMusic: async function() {
      let geturl = ''
      if(this.query === ''){
        
        geturl = "https://autumnfish.cn/search?keywords=" + "热门"
      } else {
        geturl = "https://autumnfish.cn/search?keywords=" + this.query
      }
      const {data: res} = await this.$http.get(geturl)
      if(res.code !== 200) return
      this.$store.state.musicList = res.result.songs;
      // console.log(this.$store.state.musicList)
    },
  }

}
</script>

<style>
.search_bar {
    height: 60px;
    background-color: rgb(236,65,65);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 11;
}

.search_bar img {
    margin-left: 23px;
}

.search_bar .searchbox{
    margin-right: 23px;
    overflow: hidden;
    border-radius: 27px;
    width:300px;
}
.searchInput input.el-input__inner{
  border: 0px;
}
</style>