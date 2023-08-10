import { useRecoilValue } from 'recoil'
import { equipmentState } from '../../../Atoms'
import { EquipmentItem, EquipmentState } from '../../../Type'
import { ConstainDiv, ItemsList } from '../../../GlobalStyle'
import EquipmentInquiryItems from '../EquipmentInquiryItems'
import EquipmentInquirySearch from '../EquipmentInquirySearch'

function EquipmentInquiryItem() {
  const equipmentItem = useRecoilValue<EquipmentState>(equipmentState)

  return (
    <>
      <EquipmentInquirySearch />
      <ConstainDiv>
        <ItemsList>
          <span>종류</span>
          <span>제품명</span>
          <span>시리얼 넘버</span>
          <span>등록일자</span>
          <span>사용자</span>
          <span>부서</span>
          <span>비고</span>
          <span>상태</span>
        </ItemsList>
        {equipmentItem.items?.map((item: EquipmentItem) => {
          return <EquipmentInquiryItems key={item.seq} item={item} />
        })}
      </ConstainDiv>
    </>
  )
}

export default EquipmentInquiryItem
