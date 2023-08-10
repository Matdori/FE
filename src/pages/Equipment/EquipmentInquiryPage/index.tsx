/* eslint-disable import/no-named-as-default */
import { useCallback, useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import EquipmentInquiryItem from '../../../components/EquipmentInquiry/EquipmentInquiryItem'
import { EquipmentState } from '../../../Type'
import Apis from '../../../shared/Apis'
import { equipmentState, paginationState, searchState } from '../../../Atoms'
import EquipmentPagination from '../../../components/EquipmentPagination'

function EquipmentInquiryPage() {
  const [equipmentItem, setEquipmentItem] =
    useRecoilState<EquipmentState>(equipmentState)

  const { itemsPerPage, currentPage } = useRecoilValue(paginationState)
  const equipmentSearchItem = useRecoilValue(searchState)

  const getItems = useCallback(async () => {
    const response = await Apis.GetEquipmentItemsAX({
      size: itemsPerPage,
      page: currentPage,
      typeCode: equipmentSearchItem.searchTypeCode,
      name: equipmentSearchItem.searchName,
      serial: equipmentSearchItem.searchSerial,
      createDateStart: equipmentSearchItem.searchcreateDateStart,
      createDateEnd: equipmentSearchItem.searchcreateDateEnd,
      userName: equipmentSearchItem.searchUserName,
      departmentName: equipmentSearchItem.searchDepartmentName,
      comment: equipmentSearchItem.searchComment,
      status: equipmentSearchItem.searchStatus,
    })
    setEquipmentItem({
      ...equipmentItem,
      items: response.data.data,
      totalCnt: response.data.totalCnt,
    })
  }, [currentPage, equipmentSearchItem])

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
