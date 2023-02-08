import request from '@/utils/request'

/**
 * 表单过滤查询
 * @param query
 * @returns {*}
 */
export function selectHealth(query) {
  return request({
    url: '/health/search?'+query,
    method: 'get'
  })
}
