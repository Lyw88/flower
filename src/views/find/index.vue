<script setup lang="ts">
import { ref } from 'vue'
import { LazyImg, Waterfall } from 'vue-waterfall-plugin-next'
import 'vue-waterfall-plugin-next/dist/style.css'

const list = ref([
  {
    src: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2022%2F0415%2F686fb5a6j00raca2v002zc000hs00qnc.jpg&thumbnail=660x2147483647&quality=80&type=jpg'
  },
  {
    src: 'https://t7.baidu.com/it/u=1956604245,3662848045&fm=193&f=GIF'
  },
  {
    src: 'https://t7.baidu.com/it/u=727460147,2222092211&fm=193&f=GIF'
  },
  {
    src: 'https://t7.baidu.com/it/u=2511982910,2454873241&fm=193&f=GIF'
  },
  {
    src: 'https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF'
  },
  {
    src: 'https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF'
  },
  {
    src: 'https://t7.baidu.com/it/u=825057118,3516313570&fm=193&f=GIF'
  },
  {
    src: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2022%2F0415%2F686fb5a6j00raca2v002zc000hs00qnc.jpg&thumbnail=660x2147483647&quality=80&type=jpg'
  },
  {
    src: 'https://t7.baidu.com/it/u=1956604245,3662848045&fm=193&f=GIF'
  },
  {
    src: 'https://t7.baidu.com/it/u=727460147,2222092211&fm=193&f=GIF'
  },
  {
    src: 'https://t7.baidu.com/it/u=2511982910,2454873241&fm=193&f=GIF'
  },
  {
    src: 'https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF'
  },
  {
    src: 'https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF'
  },
  {
    src: 'https://t7.baidu.com/it/u=825057118,3516313570&fm=193&f=GIF'
  }
])
</script>

<template>
  <div class="find-page">
    <!-- 标题 -->
    <div class="title">用户晒单</div>
    <!-- 瀑布流-卡片 -->
    <Waterfall
      :list="list"
      :hasAroundGutter="false"
      :breakpoints="{
        1500: { rowPerView: 2 }
      }"
    >
      <template #item="{ url }">
        <div class="car">
          <LazyImg :url="url" />
          <div class="info">
            <div class="comment">花很漂亮 妈妈很喜欢</div>
            <div class="user_info">
              <div class="avatar">
                <van-image
                  round
                  fit="cover"
                  width="19"
                  height="19"
                  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                />
                <span>黎*文</span>
              </div>
              <div class="like">
                <van-icon name="like-o" />
                18
              </div>
            </div>
          </div>
        </div>
      </template>
    </Waterfall>
  </div>
</template>

<style lang="scss" scoped>
.find-page {
  padding: 0 12px;
  .title {
    z-index: 999;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    font-weight: bold;
  }
  .waterfall-list[data-v-6a0e9c4c] {
    padding-bottom: 55px;
    background-color: #f3f5f7;
    .car {
      background-color: #fff;
      border-radius: 8px;
      .lazy__box {
        border-radius: 8px 8px 0 0;
      }
      .info {
        padding: 7px 7px 11px;
        .comment {
          font-size: 12px;
          font-weight: 700;
        }
        .user_info {
          margin-top: 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .avatar {
            display: flex;
            align-items: center;
            .van-image {
              padding-right: 3px;
            }
          }
        }
      }
    }
  }
}
</style>
