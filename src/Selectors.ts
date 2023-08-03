import { selector } from 'recoil'
import { equipmentState, paginationState } from './Atoms'
import { PaginationItem } from './Type'

export const equipmentPaginationItem2 = selector<PaginationItem>({
  key: 'equipmentPaginationItem',
  get: ({ get }) => {
    const paginationItems = get(paginationState)
    const { itemsPerPage } = paginationItems
    const { currentPage } = paginationItems

    return {
      itemsPerPage,
      currentPage,
    }
  },
})

export const equipmentPaginationItem = selector<PaginationItem>({
  key: 'equipmentPaginationItem',
  get: ({ get }) => {
    const paginationItems = get(paginationState)
    const { itemsPerPage } = paginationItems
    const { currentPage } = paginationItems

    return {
      itemsPerPage,
      currentPage,
    }
  },
})
