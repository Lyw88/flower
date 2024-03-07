import { request } from '@/utils/request'

export const product_itemApi = (p_id: any) => {
  return request('/product_item', 'get', { p_id })
}
