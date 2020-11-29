import axios from 'axios'

const request = axios.create({
  baseURL: 'http://192.168.31.49:3001/'
})

export default request
