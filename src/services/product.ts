import { request } from '@/utils/request'

export const product_itemApi = (p_id: any) => {
  return request('/product_item', 'get', { p_id })
}

export const AddShopCarApi = (data: object) => {
  return request('/add_shopcar', 'get', data)
}

export const LoadShopCarApi = (u_id: number | undefined) => {
  return request('/load_shopcar', 'get', { u_id })
}
