import httpService from './http.services'

const orderEndpoint = 'order/'

const orderService = {
  create: async (payload) => {
    const { data } = await httpService.post(orderEndpoint, payload)
    return data
  },
  get: async () => {
    const req = await httpService.get(orderEndpoint)
    return req.data
  }
}
export default orderService
