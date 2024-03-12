import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useShopCarStore = defineStore(
  'shopcar-store',
  () => {
    const goodslist = ref<[] | undefined>([]) //购物车数据

    //获取商品列表
    const getgoodslist = (data: []) => {
      data.forEach((item: any) => {
        item.checked = true
      })
      goodslist.value = data
    }

    // 清空商品列表
    const delgoodlist = () => {
      goodslist.value = undefined
    }

    return {
      // 属性
      goodslist,
      // 方法
      getgoodslist,
      delgoodlist
    }
  },
  {
    persist: true
  }
)
