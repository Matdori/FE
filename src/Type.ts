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
  askInquirySearchModal: boolean
}

export interface DepartmentItems {
  departmentName: string
  count: number
}

export interface Types {
  key: number
  value: string
}

export interface AskState {
  items: AskItem[]
  totalCnt: number
}

export interface AskItem {
  seq: number
  itemName: string
  itemType: string
  askType: string
  askUserName: string
  confirmUserName: string
}

export interface AskInquirySearchFormValue {
  itemName: string
  itemType: string
  askType: string
  askUserName: string
  confirmUserName: string
  createDateStart: string
  createDateEnd: string
}

export interface AskSearchItem {
  searchItemName: string
  searchItemType: string
  searchAskType: string
  searchAskUserName: string
  searchConfirmUserName: string
  searchcreateDateStart: string
  searchcreateDateEnd: string
}

export interface GetAskItem {
  size: number
  page: number
  itemName: string
  itemType: string
  askType: string
  askUserName: string
  confirmUserName: string
  createDateStart: string
  createDateEnd: string
}
