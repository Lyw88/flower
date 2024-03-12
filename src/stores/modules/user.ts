import { useShopCarStore } from './shopcar'
import type { User } from '@/types/user.d'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'cp-user',
  () => {
    const user = ref<User>()
    const car_store = useShopCarStore()

    const getUser = (u: User) => {
      user.value = u
    }

    const delUser = () => {
      user.value = undefined
      car_store.delgoodlist()
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
