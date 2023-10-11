<script setup lang="ts">
import axios from '@/utils/request'
import { useUserStore } from './stores'
const store = useUserStore()

// const getUserApi = () => {
//   axios.request({
//     url: '/patient/myUser',
//     method: 'get'
//   })
// }

const login = async () => {
  try {
    const res = await axios.request({
      url: '/login/password',
      method: 'post',
      data: {
        mobile: '13211112222',
        password: 'abc12345'
      }
    })
    console.log('成功登录', res)
  } catch (err) {
    console.log('失败', err)
  }
}
</script>

<template>
  <p>{{ store.user }}</p>
  <button
    @click="
      store.getUser({
        token: 'asdaksdh',
        id: '1',
        account: '123',
        mobile: '123434',
        avatar: 'hjk'
      })
    "
  >
    登录
  </button>
  <button @click="store.delUser">退出</button>
  <button @click="login">登录</button>
</template>

<style scoped></style>
