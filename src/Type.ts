export interface LoginFormValue {
  userEmail: string
  userPassword: string
}

export interface EquipmentState {
  items: EquipmentItem[]
  totalCnt: number
}

export interface EquipmentItem {
  seq: number
  type: string
  name: string
  serial: string
  comment: string
  createDate: string
  userName: string
  departmentName: string
  status: string
}

export interface EquipmentInquirySearchFormValue {
  type: number
  name: string
  serial: string
  createDateStart: string
  createDateEnd: string
  userName: string
  departmentName: string
  comment: string
  status: string
}

export interface PaginationItem {
  currentPage: number
  itemsPerPage: number
}

export interface SearchItem {
  searchTypeCode: string
  searchName: string
  searchSerial: string
  searchcreateDateStart: string
  searchcreateDateEnd: string
  searchUserName: string
  searchDepartmentName: string
  searchComment: string
  searchStatus: string
}

export interface GetEquipmentItem {
  size: number
  page: number
  typeCode: string
  name: string
  serial: string
  createDateStart: string
  createDateEnd: string
  userName: string
  departmentName: string
  comment: string
  status: string
}

export interface ModalsStates {
  equipmentInquirySearchModal: boolean
}

export interface DepartmentItems {
  departmentName: string
  count: number
}

export interface Types {
  key: number
  value: string
}
