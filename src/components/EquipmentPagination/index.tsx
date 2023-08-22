import { useRecoilState, useRecoilValue } from 'recoil'
import { Pagination } from 'react-bootstrap'
import { EquipmentState, PaginationItem } from '../../Type'
import { equipmentState, paginationState } from '../../Atoms'

function EquipmentPagination() {
  const [equipmentPaginationItem, setEquipmentPaginationItem] =
    useRecoilState<PaginationItem>(paginationState)

  const equipmentItem = useRecoilValue<EquipmentState>(equipmentState)

  const lastPage = Math.ceil(
    equipmentItem.totalCnt / equipmentPaginationItem.itemsPerPage
  )

  const onClickHandler = (data: number) => {
    setEquipmentPaginationItem({
      ...equipmentPaginationItem,
      currentPage: data,
    })
  }

  const paginationItems = () => {
    const result = []
    for (let i = 1; i <= lastPage; i += 1) {
      result.push(
        <Pagination.Item
          key={i}
          active={equipmentPaginationItem.currentPage === i}
          onClick={() => onClickHandler(i)}
        >
          {i}
        </Pagination.Item>
      )
    }
    return result
  }

  return (
    <Pagination>
      <Pagination.First
        disabled={equipmentPaginationItem.currentPage === 1}
        onClick={() => onClickHandler(1)}
      />
      <Pagination.Prev
        disabled={equipmentPaginationItem.currentPage === 1}
        onClick={() => onClickHandler(equipmentPaginationItem.currentPage - 1)}
      />
      {paginationItems()}
      <Pagination.Next
        disabled={equipmentPaginationItem.currentPage === lastPage}
        onClick={() => onClickHandler(equipmentPaginationItem.currentPage + 1)}
      />
      <Pagination.Last
        disabled={equipmentPaginationItem.currentPage === lastPage}
        onClick={() => onClickHandler(lastPage)}
      />
    </Pagination>
  )
}

export default EquipmentPagination
