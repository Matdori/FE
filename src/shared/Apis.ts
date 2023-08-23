import axios from 'axios'
import { GetAskItem, GetEquipmentItem, LoginFormValue } from '../Type'

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

const Apis = {
  SigninAX: (payload: LoginFormValue) =>
    noToken.post(`/api/user/login`, payload),

  GetEquipmentItemsAX: (payload: GetEquipmentItem) =>
    token.get(
      `/api/item?page=${payload.page - 1}&size=${payload.size}&typeCode=${
        payload.typeCode
      }&name=${payload.name}&serial=${payload.serial}&startDate=${
        payload.createDateStart
      }&endDate=${payload.createDateEnd}&comment=${payload.comment}&userName=${
        payload.userName
      }&departmentName=${payload.departmentName}&status=${payload.status}`
    ),
  // token.get(`/api/item? name=te & page=0 & size=10 & sort=seq,asc`),

  GetSearchTypeAX: () => token.get(`/api/item/type`),
  GetSearchStatusAX: () => token.get(`/api/item/status`),
  GetSearchDepartmentAX: () => token.get(`/api/department`),

  GetAskItemsAX: (payload: GetAskItem) =>
    token.get(
      `/api/ask?page=${payload.page - 1}&size=${payload.size}&itemName=${
        payload.itemName
      }&itemType=${payload.itemType}&askType=${payload.askType}&askUserName=${
        payload.askUserName
      }&confirmUserName=${payload.confirmUserName}&startDate=${
        payload.createDateStart
      }&endDate=${payload.createDateEnd}`
    ),
  GetAskTypeAX: () => token.get(`/api/ask/type`),
}

export default Apis
