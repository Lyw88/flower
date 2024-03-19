import { request } from '@/utils/request'

export const OrderSubmitApi = (data: object) => {
  return request('/submit_order', 'get', data)
}
