import axios from 'axios'

const noToken = axios.create({
  baseURL: import.meta.env.VITE_SERVER,
  withCredentials: true,
})

const token = axios.create({
  baseURL: import.meta.env.VITE_SERVER,
  headers: {
    authorization:
      localStorage.getItem('Access_Token') === undefined
        ? ''
        : localStorage.getItem('Access_Token'),
  },
  withCredentials: true,
})

export const Apis = {
  SigninAX: (payload: any) => noToken.post(`/api/user/login`, payload),

  GetEquipmentItemsAX: (payload: any) =>
    token.get(`/api/item?page=${payload.page - 1}&size=${payload.size}`),
  // token.get(`/api/item? name=te & page=0 & size=10 & sort=seq,asc`),
}

export default Apis
