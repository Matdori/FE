import axios from 'axios'

const noToken = axios.create({
  baseURL: import.meta.env.VITE_SERVER,
  withCredentials: true,
})

const token = axios.create({
  baseURL: import.meta.env.VITE_SERVER,
  headers: {
    Access_Token:
      localStorage.getItem('Access_Token') === undefined
        ? ''
        : localStorage.getItem('Access_Token'),
  },
  withCredentials: true,
})

export const Apis = {
  SigninAX: (payload: any) => noToken.post(`/api/user/login`, payload),
}
export default Apis
