function EquipmentInquirySearch() {
  return (
    <div>
      <span>
        종류:
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </span>
      <span>
        제품명:
        <input type="text" size={10} />
      </span>
      <span>
        시리얼 넘버:
        <input type="text" size={10} />
      </span>
      <span>
        등록일자
        <input type="date" />
        <input type="date" />
      </span>
      <span>
        사용자:
        <input type="text" size={5} />
      </span>
      <span>
        부서:
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </span>
      <span>
        비고:
        <input type="text" size={5} />
      </span>
      <span>
        상태:
        <select>
          <option>사용중</option>
          <option>재고</option>
          <option>수리중</option>
        </select>
      </span>
    </div>
  )
}

export default EquipmentInquirySearch
