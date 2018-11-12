import requestApi from '../index'
/**
 * 股票列表
 * @param {type: 2, limit: 20}} query
 */
export function getDoodsDetail (query) {
  return requestApi({
    url: 'api/v1/mall/stock/old_stock',
    method: 'get',
    params: query,
    permission: true
  })
}
