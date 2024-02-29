<script setup lang="ts">
import { showToast } from 'vant'
import { ref } from 'vue'

const onSubmit = () => showToast('点击按钮')
const checked = ref<boolean>(false)
const value = ref<number>(0)
</script>

<template>
  <div class="car-page">
    <cp-navbar title="购物车"></cp-navbar>
    <!-- 购物车 -->
    <div class="car">
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
      >
        <template #bottom>
          <div class="count">
            <van-checkbox v-model="checked" />
            <van-stepper v-model="value" />
          </div>
        </template>
      </van-card>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
      >
        <template #bottom>
          <div class="count">
            <van-checkbox v-model="checked" />
            <van-stepper v-model="value" />
          </div>
        </template>
      </van-card>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
      >
        <template #bottom>
          <div class="count">
            <van-checkbox v-model="checked" />
            <van-stepper v-model="value" />
          </div>
        </template>
      </van-card>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
      >
        <template #bottom>
          <div class="count">
            <van-checkbox v-model="checked" />
            <van-stepper v-model="value" />
          </div>
        </template>
      </van-card>
    </div>
    <!-- 订单栏目 -->
    <van-submit-bar :price="3050" button-text="去结算(0)" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<style lang="scss" scoped>
.car-page {
  padding: 46px 0 115px 0;
  .car {
    margin: 0 15px;
    .van-card {
      margin-top: 10px;
      background-color: #fff;
      border-radius: 16px;
      // .count {
      //   display: flex;
      //   justify-content: space-between;
      // }
      .count {
        .van-checkbox {
          position: absolute;
          top: 0;
          right: -4px;
        }
        .van-stepper {
          float: right;
          padding-right: 30px;
        }
      }
    }
  }
  .van-submit-bar {
    bottom: 55px;
  }
}
</style>
