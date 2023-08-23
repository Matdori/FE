import { atom } from 'recoil'
import {
  EquipmentState,
  ModalsStates,
  PaginationItem,
  SearchItem,
  AskState,
  AskSearchItem,
} from './Type'

export const equipmentState = atom<EquipmentState>({
  key: 'equipmentState',
  default: {} as EquipmentState,
})

export const paginationState = atom<PaginationItem>({
  key: 'paginationState',
  default: { currentPage: 1, itemsPerPage: 10 } as PaginationItem,
})

export const searchState = atom<SearchItem>({
  key: 'searchState',
  default: {
    searchTypeCode: '',
    searchName: '',
    searchSerial: '',
    searchcreateDateStart: '',
    searchcreateDateEnd: '',
    searchUserName: '',
    searchDepartmentName: '',
    searchComment: '',
    searchStatus: '',
  } as SearchItem,
})

export const modalsState = atom<ModalsStates>({
  key: 'modalsState',
  default: { equipmentInquirySearchModal: false } as ModalsStates,
})

export const askState = atom<AskState>({
  key: 'askState',
  default: {} as AskState,
})

export const askSearchState = atom<AskSearchItem>({
  key: 'askSearchState',
  default: {
    searchItemName: '',
    searchItemType: '',
    searchAskType: '',
    searchAskUserName: '',
    searchConfirmUserName: '',
    searchcreateDateStart: '',
    searchcreateDateEnd: '',
  } as AskSearchItem,
})
