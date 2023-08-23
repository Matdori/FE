import { useCallback, useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import AskInquiryItem from '../../../components/AskInquiry/AskInquiryItem'
import { AskState } from '../../../Type'
import Apis from '../../../shared/Apis'
import { askState, paginationState, askSearchState } from '../../../Atoms'
import AskPagination from '../../../components/AskInquiry/AskPagination'
import Layout from '../../../components/Layout/Layout'

function AskInquiryPage() {
  const [askItem, setAskItem] = useRecoilState<AskState>(askState)

  const { itemsPerPage, currentPage } = useRecoilValue(paginationState)
  const askSearchItem = useRecoilValue(askSearchState)

  const getItems = useCallback(async () => {
    const response = await Apis.GetAskItemsAX({
      size: itemsPerPage,
      page: currentPage,
      itemName: askSearchItem.searchItemName,
      itemType: askSearchItem.searchItemType,
      askType: askSearchItem.searchAskType,
      askUserName: askSearchItem.searchAskUserName,
      confirmUserName: askSearchItem.searchConfirmUserName,
      createDateStart: askSearchItem.searchcreateDateStart,
      createDateEnd: askSearchItem.searchcreateDateEnd,
    })
    setAskItem({
      ...askItem,
      items: response.data.data,
      totalCnt: response.data.totalCnt,
    })
  }, [currentPage, askSearchItem])

  useEffect(() => {
    getItems()
  }, [getItems])

  return (
    <Layout>
      <AskInquiryItem />
      <AskPagination />
    </Layout>
  )
}

export default AskInquiryPage
