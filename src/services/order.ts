import { request } from '@/utils/request'

// 提交订单
export const OrderSubmitApi = (data: object) => {
  return request('/submit_order', 'get', data)
}

// 统计订单状态
export const OrderStateCountApi = (u_id: any) => {
  return request('/o_stateCount', 'get', { u_id })
}
