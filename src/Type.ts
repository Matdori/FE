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
  name: string
  serial: string
  comment: string
  createDate: string
  userName: string
  departmentName: string
  status: string
}

export interface PaginationItem {
  currentPage: number
  itemsPerPage: number
}
