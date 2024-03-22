<script setup lang="ts">
import { ref } from 'vue'
import type { FormInstance } from 'vant'
import { edituserApi } from '@/services/user'
import { useUserStore } from '@/stores'

const emit = defineEmits(['showvalue'])
const store = useUserStore()

const formRef = ref<FormInstance>()

const value = ref()
const onSubmit = async (data: any) => {
  data.u_id = store.user?.u_id
  try {
    const res = await edituserApi(data)
    emit('showvalue', false)
    await store.loadData()
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <!-- 遮罩层 -->
  <div class="editForm-page">
    <cpNavbar
      title="修改昵称"
      right-text="保存"
      :back="
        () => {
          $emit('showvalue', false)
        }
      "
      @click-right="formRef?.submit"
    ></cpNavbar>
    <van-form @submit="onSubmit" submit-on-enter ref="formRef">
      <van-cell-group inset>
        <van-field v-model="value" name="u_name" placeholder="用户名" />
      </van-cell-group>
    </van-form>
  </div>
</template>

<style lang="scss" scoped>
.editForm-page {
  background-color: #f7f9fa;
  height: 100%;
}
.van-form {
  padding-top: 50px;
  .van-cell-group--inset {
    margin: 0;
    border-radius: 0;
  }
}
</style>
