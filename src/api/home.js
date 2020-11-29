import request from '@/utils/request'

// 获取轮播图数据
// 获取文章列表数据
export const getSwipers = () => {
  return request({
    url: 'swiper',
    method: 'GET'
  })
}
