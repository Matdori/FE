import { useRecoilValue } from 'recoil'
import { askState } from '../../../Atoms'
import { ConstainDiv, ItemsList } from '../../../GlobalStyle'
import AskInquirySearch from '../AskInquirySearch'
import AskInquiryItems from '../AskInquiryItems'
import { AskItem, AskState } from '../../../Type'

function AskInquiryItem() {
  const askItem = useRecoilValue<AskState>(askState)

  return (
    <>
      <AskInquirySearch />
      <ConstainDiv>
        <ItemsList>
          <span>번호</span>
          <span>제품명</span>
          <span>종류</span>
          <span>요청 구분</span>
          <span>요청자</span>
          <span>처리자</span>
        </ItemsList>
        {askItem.items?.map((item: AskItem) => {
          return <AskInquiryItems key={item.seq} item={item} />
        })}
      </ConstainDiv>
    </>
  )
}

export default AskInquiryItem
