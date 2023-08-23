import { useRecoilState, useRecoilValue } from 'recoil'
import { Pagination } from 'react-bootstrap'
import { AskState, PaginationItem } from '../../../Type'
import { askState, paginationState } from '../../../Atoms'

function AskPagination() {
  const [askPaginationItem, setAskPaginationItem] =
    useRecoilState<PaginationItem>(paginationState)

  const askItem = useRecoilValue<AskState>(askState)
  const lastPage = Math.ceil(askItem.totalCnt / askPaginationItem.itemsPerPage)

  const onClickHandler = (data: number) => {
    setAskPaginationItem({
      ...askPaginationItem,
      currentPage: data,
    })
  }

  const paginationItems = () => {
    const result = []
    for (let i = 1; i <= lastPage; i += 1) {
      result.push(
        <Pagination.Item
          key={i}
          active={askPaginationItem.currentPage === i}
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
        disabled={askPaginationItem.currentPage === 1}
        onClick={() => onClickHandler(1)}
      />
      <Pagination.Prev
        disabled={askPaginationItem.currentPage === 1}
        onClick={() => onClickHandler(askPaginationItem.currentPage - 1)}
      />
      {paginationItems()}
      <Pagination.Next
        disabled={askPaginationItem.currentPage === lastPage}
        onClick={() => onClickHandler(askPaginationItem.currentPage + 1)}
      />
      <Pagination.Last
        disabled={askPaginationItem.currentPage === lastPage}
        onClick={() => onClickHandler(lastPage)}
      />
    </Pagination>
  )
}

export default AskPagination
