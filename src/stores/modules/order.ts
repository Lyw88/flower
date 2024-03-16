import { defineStore } from 'pinia'
import { ref } from 'vue'

export const orderUseStore = defineStore(
  'order-store',
  () => {
    const address = ref()
    const time = ref('12:00')

    const getaddress = (data: any) => {
      address.value = data
    }
    const gettime = (data: any) => {
      time.value = data
    }

    const delval = () => {
      address.value = undefined
      time.value = '12:00'
    }
    return {
      address,
      time,
      gettime,
      getaddress,
      delval
    }
  },
  {
    persist: true
  }
)
