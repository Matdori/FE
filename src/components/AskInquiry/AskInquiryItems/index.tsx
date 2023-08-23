import { ItemsList } from '../../../GlobalStyle'
import { AskItem } from '../../../Type'

type AskItemProps = {
  item: AskItem
}

function AskInquiryItems({ item }: AskItemProps) {
  return (
    <ItemsList>
      <span>{item.seq}</span>
      <span>{item.itemName}</span>
      <span>{item.itemType}</span>
      <span>{item.askType}</span>
      <span>{item.askUserName}</span>
      <span>{item.confirmUserName}</span>
    </ItemsList>
  )
}

export default AskInquiryItems
