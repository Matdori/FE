/* eslint-disable import/no-named-as-default */
import { useCallback, useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import EquipmentInquiryItem from '../../../components/EquipmentInquiry/EquipmentInquiryItem'
import { EquipmentState } from '../../../Type'
import Apis from '../../../shared/Apis'
import { equipmentState, paginationState } from '../../../Atoms'
import EquipmentPagination from '../../../components/EquipmentPagination'

function EquipmentInquiryPage() {
  const [equipmentItem, setEquipmentItem] =
    useRecoilState<EquipmentState>(equipmentState)

  const { itemsPerPage, currentPage } = useRecoilValue(paginationState)

  const getItems = useCallback(async () => {
    const response: any = await Apis.GetEquipmentItemsAX({
      size: itemsPerPage,
      page: currentPage,
    })

    setEquipmentItem({
      ...equipmentItem,
      items: response.data.data,
      totalCnt: response.data.totalCnt,
    })
  }, [currentPage])

  useEffect(() => {
    getItems()
  }, [getItems])

  return (
    <>
      <EquipmentInquiryItem />
      <EquipmentPagination />
    </>
  )
}

export default EquipmentInquiryPage
