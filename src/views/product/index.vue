<script setup lang="ts">
import { searchApi } from '@/services/type'
import { onMounted } from 'vue'
import { ref } from 'vue'

const getImageUrl = (name: string) => {
  return new URL(`../../assets/sort/${name}`, import.meta.url).href
}

const select = ref(0)
//排序
const changeselect = async (index: number, sort: string, method: string) => {
  select.value = index
  loadData(sort, method)
}

//加载相关数据
import { useRoute } from 'vue-router'
const route = useRoute()
const data = ref()
const loadData = async (sort: string, method: string) => {
  let config: any = { p_name: route.query.content }
  if (sort) {
    ;(config.sort = sort), (config.method = method)
  }
  try {
    const res = await searchApi(config)
    data.value = res
    console.log(data.value)
  } catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  loadData('p_name', 'desc')
})
</script>

<template>
  <cp-navbar title="搜索结果"></cp-navbar>

  <div class="product-page">
    <!-- 排序 -->
    <div class="sort">
      <van-row>
        <van-col span="8" @click="changeselect(0, 'p_name', 'desc')"
          ><a href="javascript:;" :class="{ active: select === 0 }"
            >综合
          </a></van-col
        >
        <van-col span="8" @click="changeselect(1, 'p_sale', 'desc')"
          ><a href="javascript:;" :class="{ active: select === 1 }"
            >销量</a
          ></van-col
        >
        <van-col span="8" @click="changeselect(2, 'p_price', 'desc')"
          ><a href="javascript:;" :class="{ active: select === 2 }"
            >价格</a
          ></van-col
        >
      </van-row>
    </div>
    <!-- 商品卡片 -->
    <div class="item">
      <van-row>
        <van-col span="12" v-for="item in data" :key="item.p_id">
          <van-image
            width="100%"
            fit="cover"
            round
            :src="getImageUrl(`9012709.jpg`)"
          />
          <div class="info">
            <div class="title">{{ item.p_name }}</div>
            <div class="price">￥{{ item.p_price }}</div>
            <div class="sale">已销售{{ item.p_sale }}件</div>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-page {
  padding-top: 46px;
  .sort {
    .van-row {
      height: 35px;
      background-color: #fff;
      margin-bottom: 8px;
      .van-col {
        display: flex;
        justify-content: center;
        align-items: center;
        .active {
          color: #ff894c;
        }
      }
    }
  }
  .item {
    padding: 0 5px;
    .van-row {
      .van-col {
        $radius: 8px;
        height: 275px;
        margin-bottom: 8px;
        border-radius: $radius;
        background-color: #fff;
        &:nth-child(odd) {
          border-right: 4px solid #f3f5f7;
        }
        &:nth-child(even) {
          border-left: 4px solid #f3f5f7;
        }
        .van-image {
          border-radius: $radius $radius 0 0;
        }
        .info {
          padding: 8px;
          .title {
            font-size: 14px;
            color: #464858;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .price {
            font-size: 17px;
            font-weight: bold;
            color: #ff7c74;
          }
          .sale {
            font-size: 12px;
            color: #464858;
          }
        }
      }
    }
  }
}
</style>
