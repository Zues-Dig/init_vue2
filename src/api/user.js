import request from '@/utils/request'

export function getPage (data) {
  return request({
    url: '/user/get_page',
    method: 'post',
    data
  })
}
