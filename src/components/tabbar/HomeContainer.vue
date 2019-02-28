<!-- home 容器 -->
<template>
  <div>
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="http://new.crup.cn/ShowPic/Show?vpath=/newadimg/21a20c29-3a1f-4573-af6d-3c6f909c809a.jpg&vtag=1&ptype=1" alt="">
        </mt-swipe-item>
        <mt-swipe-item><img src="http://new.crup.cn/ShowPic/Show?vpath=/newadimg/06293041-121e-4a37-85ed-1f4d09617d82.jpg&vtag=1&ptype=1" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="http://new.crup.cn/ShowPic/Show?vpath=/newadimg/21a20c29-3a1f-4573-af6d-3c6f909c809a.jpg&vtag=1&ptype=1" alt=""></mt-swipe-item>
      </mt-swipe>
      <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                  <span class="mui-icon mui-icon-home"></span>
                  <div class="mui-media-body">Home</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                  <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                  <div class="mui-media-body">Email</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                  <span class="mui-icon mui-icon-chatbubble"></span>
                  <div class="mui-media-body">Chat</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                  <span class="mui-icon mui-icon-location"></span>
                  <div class="mui-media-body">location</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                  <span class="mui-icon mui-icon-search"></span>
                  <div class="mui-media-body">Search</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                  <span class="mui-icon mui-icon-phone"></span>
                  <div class="mui-media-body">Phone</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                  <span class="mui-icon mui-icon-gear"></span>
                  <div class="mui-media-body">Setting</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                  <span class="mui-icon mui-icon-info"></span>
                  <div class="mui-media-body">about</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                  <span class="mui-icon mui-icon-more"></span>
          <div class="mui-media-body">more</div></a></li>
      </ul> 
		</div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    };
  },
}
</script>
<style lang='scss' scoped>
.mint-swipe{height: 200px;}
.mint-swipe img{height: 100%;width: 100%;}
</style>