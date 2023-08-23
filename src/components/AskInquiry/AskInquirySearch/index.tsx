/* eslint-disable react/jsx-props-no-spreading */
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button, Form, Modal } from 'react-bootstrap'
import { useRecoilState } from 'recoil'
import { useState } from 'react'
import {
  AskInquirySearchFormValue,
  ModalsStates,
  Types,
  AskSearchItem,
} from '../../../Type'
import { askSearchState, modalsState } from '../../../Atoms'
import Apis from '../../../shared/Apis'

function AskInquirySearch() {
  const [modalState, setModalsState] = useRecoilState<ModalsStates>(modalsState)
  const { register, handleSubmit, reset } = useForm<AskInquirySearchFormValue>()
  const [askSearchInputItem, setAskSearchInputItem] =
    useRecoilState<AskSearchItem>(askSearchState)
  const [askSearchItemType, setAskSearchItemType] = useState<Types[]>([])
  const [askSearchAskType, setAskSearchAskType] = useState<Types[]>([])

  const onSubmitHandler: SubmitHandler<AskInquirySearchFormValue> = data => {
    setAskSearchInputItem({
      ...askSearchInputItem,
      searchItemName: data.itemName,
      searchItemType: String(data.itemType),
      searchAskType: String(data.askType),
      searchAskUserName: data.askUserName,
      searchConfirmUserName: data.confirmUserName,
      searchcreateDateStart: data.createDateStart,
      searchcreateDateEnd: data.createDateEnd,
    })
    setModalsState({ ...modalState, askInquirySearchModal: false })
  }

  const resetFormHandler = () => {
    reset()
  }
  const getTypeData = async () => {
    const itemTypeData = await Apis.GetSearchTypeAX()
    if (itemTypeData.status === 200) {
      setAskSearchItemType(itemTypeData.data.data)
    }

    const askTypeData = await Apis.GetAskTypeAX()
    if (askTypeData.status === 200) {
      setAskSearchAskType(askTypeData.data.data)
    }
  }

  const onOpenModalHandler = () => {
    getTypeData()
    setModalsState({ ...modalState, askInquirySearchModal: true })
  }

  return (
    <div>
      <Button variant="primary" onClick={onOpenModalHandler}>
        검색하기
      </Button>
      <Modal
        fullscreen
        show={modalState.askInquirySearchModal}
        onHide={() => {
          setModalsState({
            ...modalState,
            askInquirySearchModal: false,
          })
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>검색하기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            style={{ display: 'flex' }}
            onSubmit={handleSubmit(data => {
              onSubmitHandler(data)
            })}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>제품명</Form.Label>
              <Form.Control
                type="text"
                placeholder="제품명"
                {...register('itemName')}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>종류</Form.Label>
              <Form.Select {...register('itemType')}>
                <option value="">모두</option>
                {askSearchItemType?.map((Type: Types) => {
                  return (
                    <option key={Type.key} value={Type.key}>
                      {Type.value}
                    </option>
                  )
                })}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>요청 구분</Form.Label>
              <Form.Select {...register('askType')}>
                <option value="">모두</option>
                {askSearchAskType?.map((Type: Types) => {
                  return (
                    <option key={Type.key} value={Type.key}>
                      {Type.value}
                    </option>
                  )
                })}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>신청일</Form.Label>
              <Form.Control type="date" {...register('createDateStart')} />
              <Form.Text className="text-muted">~</Form.Text>
              <Form.Control type="date" {...register('createDateEnd')} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>요청자</Form.Label>
              <Form.Control
                type="text"
                placeholder="요청자"
                {...register('askUserName')}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>처리자</Form.Label>
              <Form.Control
                type="text"
                placeholder="처리자"
                {...register('confirmUserName')}
              />
            </Form.Group>

            <input type="reset" value="Reset" onClick={resetFormHandler} />
            <Button
              onClick={() => {
                setModalsState({
                  ...modalState,
                  askInquirySearchModal: false,
                })
              }}
              variant="secondary"
            >
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <div>
        <span>- 제품명 : {askSearchInputItem.searchItemName}</span>
        <span>- 종류 : {askSearchInputItem.searchItemType}</span>
        <span>- 요청 구분 : {askSearchInputItem.searchAskType}</span>
        <span>- 신청일 : {askSearchInputItem.searchcreateDateStart}</span>
        <span>~ {askSearchInputItem.searchcreateDateEnd}</span>
        <span>- 요청자 : {askSearchInputItem.searchAskUserName}</span>
        <span>- 처리자 : {askSearchInputItem.searchConfirmUserName}</span>
      </div>
    </div>
  )
}

export default AskInquirySearch
