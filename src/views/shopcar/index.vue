<script setup lang="ts">
import { computed, onMounted, ref, watch, watchEffect } from 'vue'
import { useShopCarStore } from '@/stores/modules/shopcar'
const car_store = useShopCarStore()

const form = ref<any>(null)
const onSubmit = () => {
  const formData = {
    selectedItems: selectedItems.value,
    totalPrice: totalPrice.value
  }
  console.log('Form submitted with data:', formData)
}

const onSubmitButtonClick = () => {
  form.value.submit()
}

const selectedItems = ref([])

//订单栏总计
const totalPrice = computed(() => {
  // eslint-disable-next-line vue/no-side-effects-in-computed-properties
  selectedItems.value = [] // 清空selectedItems
  if (!data.value || !Array.isArray(data.value)) {
    return 0
  }

  const total = data.value.reduce((sum, item) => {
    if (
      item &&
      item.checked &&
      item.quantity &&
      item.content &&
      item.content.p_price
    ) {
      selectedItems.value.push(item)
      sum += item.quantity * item.content.p_price // 计算总价
    }
    return sum
  }, 0)
  return total * 100
})

//渲染购物车
const data = ref()
data.value = car_store.goodslist

//全选功能
const allChecked = ref<boolean | undefined>(false)

const checkAll = () => {
  car_store?.goodslist?.forEach((item) => (item.checked = allChecked.value))
}

//是否全选计算属性

const isAll = () => {
  const test = computed(
    () => car_store?.goodslist?.every((item) => item.checked)
  )
  allChecked.value = test.value
}

onMounted(() => {
  isAll()
})
</script>

<template>
  <div class="car-page">
    <cp-navbar title="购物车"></cp-navbar>
    <!-- 购物车 -->
    <van-form ref="form" @submit="onSubmit">
      <div class="car">
        <van-card
          v-for="item in data"
          :key="item?.p_id"
          :num="item?.quantity"
          :price="item?.content?.p_price"
          desc="描述信息"
          :title="item?.content?.p_name"
          :thumb="
            item?.content?.p_image != null
              ? 'http://localhost:3000/upload/' + `${item?.content?.p_image[0]}`
              : 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg'
          "
        >
          <template #bottom>
            <div class="count">
              <van-checkbox v-model="item.checked" @change="isAll" />
              <van-stepper v-model="item.quantity" />
            </div>
          </template>
        </van-card>
        <!-- 订单栏目 -->
        <van-submit-bar
          decimal-length="2"
          :price="totalPrice"
          :button-text="`去结算(${selectedItems.length})`"
          @click-button="onSubmitButtonClick"
        >
          <van-checkbox v-model="allChecked" @click="checkAll"
            >全选</van-checkbox
          >
        </van-submit-bar>
      </div>
    </van-form>
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
