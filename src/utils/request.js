import axios from 'axios'

const request = axios.create({
  baseUrl: 'http://192.168.31.49:3001'
})

export default request
