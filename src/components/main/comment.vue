<template>
  <div class="comment_wrapper">
    <h5 class='title'>热门留言</h5>
    <div class="comment_list">
        <dl v-for="item in $store.state.hotComments" :key="item.id">
            <dt><img :src="item.user.avatarUrl" alt=""></dt>
            <dd class="name">{{ item.user.nickname }}</dd>
            <dd class="detail">{{ item.content }}</dd>
        </dl>
    </div>
    <!-- 小竖线 -->
    <img src="../../assets/img/line.png" class="right_line">
  </div>
</template>

<script>
export default {

}
</script>

<style>
.comment_wrapper {
    width: 180px;
    height: 410px;
    list-style: none;
    position: absolute;
    left: 600px;
    top: 0px;
    padding: 25px 10px;
    /* overflow: hidden; */
}

.comment_wrapper .title {
    position: absolute;
    top: 0;
    margin-top: 10px;
}

.comment_wrapper .comment_list {
    overflow: auto;
    height: 380px;
    margin-top: 20px;
}

.comment_wrapper .comment_list::-webkit-scrollbar {
    display: none;
}

.comment_wrapper dl {
    padding-top: 10px;
    padding-left: 55px;
    position: relative;
    margin-bottom: 20px;
}

.comment_wrapper dt {
    position: absolute;
    left: 4px;
    top: 10px;
}

.comment_wrapper dt img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
}

.comment_wrapper dd {
    font-size: 12px;
}

.comment_wrapper .name {
    font-weight: bold;
    color: #333;
    padding-top: 5px;
}

.comment_wrapper .detail {
    color: #666;
    margin-top: 5px;
    line-height: 18px;
}
</style>