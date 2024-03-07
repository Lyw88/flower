<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts"></script>

<template>
  <cpNavbar title="商品详情"></cpNavbar>
  <div class="items-page">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <van-image
          fit="cover"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
      </van-swipe-item>
      <!-- ------------------------------------------------------------------------- -->
      <van-swipe-item>
        <van-image
          fit="cover"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          fit="cover"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          fit="cover"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
      </van-swipe-item>
      <!-- -------------------------------------------------------------------------------- -->
    </van-swipe>
    <!-- 商品信息 -->
    <div class="info">
      <div class="top">
        <div class="price"><span>¥</span>275</div>
        <div class="sale">已售2590件</div>
      </div>
      <div class="bottom">
        <div class="left">
          <div class="title">美丽绽放/3.8节定制款</div>
          <div class="detail">粉色戴安娜12枝，紫色紫罗兰4枝，粉色洋牡丹3枝</div>
        </div>
        <div class="right"><van-icon name="star-o" />收藏</div>
      </div>
    </div>
    <!-- 配送地址 -->
    <div class="address"></div>
  </div>
</template>

<style lang="scss" scoped>
.items-page {
  padding-top: 46px;
  .van-swipe {
    height: 409px;
    .van-image {
      height: 100%;
    }
  }
  .info {
    // height: 150px;
    padding: 12px 16px;
    .top {
      display: flex;
      align-items: center;
      .price {
        flex: 1;
        font-size: 26.6px;
        font-weight: 600;
        color: #ff734c;
        span {
          font-size: 15px;
        }
      }
      .sale {
        font-size: 12px;
        color: #71797f;
      }
    }
    .bottom {
      display: flex;
      .left {
        flex: 1;
        .title {
          font-size: 16.8px;
          font-weight: bold;
        }
        .detail {
          color: #747474;
          font-size: 14px;
        }
      }
      .right {
        width: 70px;
        height: 25px;
        margin-right: -16px;
        background-color: #eaebef;
        border-radius: 14px 0 0 14px;
        text-align: center;
        line-height: 25px;
        font-size: 14px;
        color: #999b9a;
      }
    }
  }
  .address {
    height: 67px;
    margin: 11px;
    background-color: #fff;
    border-radius: 10px;
  }
}
</style>
