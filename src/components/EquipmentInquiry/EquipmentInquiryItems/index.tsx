import { ItemsList } from '../../../GlobalStyle'
import { EquipmentItem } from '../../../Type'

type EquipmentItemProps = {
  item: EquipmentItem
}

function EquipmentInquiryItems({ item }: EquipmentItemProps) {
  return (
    <ItemsList>
      <span>{item.seq}</span>
      <span>{item.name}</span>
      <span>{item.serial}</span>
      <span>{item.createDate}</span>
      <span>{item.userName}</span>
      <span>{item.departmentName}</span>
      <span>{item.comment}</span>
      <span>{item.status}</span>
    </ItemsList>
  )
}

export default EquipmentInquiryItems
