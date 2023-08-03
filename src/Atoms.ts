import { atom } from 'recoil'
import { EquipmentState, PaginationItem } from './Type'

export const equipmentState = atom<EquipmentState>({
  key: 'equipmentState',
  default: {} as EquipmentState,
})

export const paginationState = atom<PaginationItem>({
  key: 'paginationState',
  default: { currentPage: 1, itemsPerPage: 10 } as PaginationItem,
})
