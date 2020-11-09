<template>
  <div class="center_con">
    <songlist />
    <playercon />
    <comment />
  </div>
</template>

<script>
import songlist from './SongList'
import playercon from './playercon'
import comment from './comment'
export default {
  components: {
    songlist,
    playercon,
    comment
  }
}
</script>

<style>
.center_con {
    height: 435px;
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    position: relative;
}
</style>