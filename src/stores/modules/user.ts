import { useShopCarStore } from './shopcar'
import type { User } from '@/types/user.d'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { orderUseStore } from './order'

export const useUserStore = defineStore(
  'cp-user',
  () => {
    const user = ref<User>()
    const car_store = useShopCarStore()
    const order_store = orderUseStore()

    const getUser = (u: User) => {
      user.value = u
    }

    const delUser = () => {
      user.value = undefined
      car_store.delgoodlist()
      order_store.delval()
    }

    return {
      user,
      getUser,
      delUser
    }
  },
  {
    persist: true
  }
)
