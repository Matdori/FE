/* eslint-disable react/jsx-props-no-spreading */
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button, Form, Modal } from 'react-bootstrap'
import { useRecoilState } from 'recoil'
import { useState } from 'react'
import {
  DepartmentItems,
  EquipmentInquirySearchFormValue,
  ModalsStates,
  SearchItem,
  Types,
} from '../../../Type'
import { modalsState, searchState } from '../../../Atoms'
import Apis from '../../../shared/Apis'

function EquipmentInquirySearch() {
  const [modalState, setModalsState] = useRecoilState<ModalsStates>(modalsState)

  const { register, handleSubmit, reset } =
    useForm<EquipmentInquirySearchFormValue>()

  const [equipmentSearchInputItem, setEquipmentSearchInputItem] =
    useRecoilState<SearchItem>(searchState)

  const [equipmentSearchType, setEquipmentSearchType] = useState<Types[]>([])

  const [equipmentSearchDepartment, setEquipmentSearchDepartment] = useState<
    DepartmentItems[]
  >([])

  const [equipmentSearchStatus, setEquipmentSearchStatus] = useState<Types[]>(
    []
  )

  const onSubmitHandler: SubmitHandler<
    EquipmentInquirySearchFormValue
  > = data => {
    setEquipmentSearchInputItem({
      ...equipmentSearchInputItem,
      searchTypeCode: String(data.type),
      searchName: data.name,
      searchSerial: data.serial,
      searchcreateDateStart: data.createDateStart,
      searchcreateDateEnd: data.createDateEnd,
      searchUserName: data.userName,
      searchDepartmentName: data.departmentName,
      searchComment: data.comment,
      searchStatus: data.status,
    })
    setModalsState({ ...modalState, equipmentInquirySearchModal: false })
  }

  const resetFormHandler = () => {
    reset()
  }
  const getTypeData = async () => {
    const TypeData = await Apis.GetSearchTypeAX()
    if (TypeData.status === 200) {
      setEquipmentSearchType(TypeData.data.data)
    }
  }

  const getDepartmentData = async () => {
    const DepartmentData = await Apis.GetSearchDepartmentAX()
    if (DepartmentData.status === 200) {
      setEquipmentSearchDepartment(DepartmentData.data.data)
    }
  }
  const getStatusData = async () => {
    const StatusData = await Apis.GetSearchStatusAX()
    if (StatusData.status === 200) {
      setEquipmentSearchStatus(StatusData.data.data)
    }
  }
  const onOpenModalHandler = () => {
    getTypeData()
    getDepartmentData()
    getStatusData()
    setModalsState({ ...modalState, equipmentInquirySearchModal: true })
  }

  return (
    <div>
      <Button variant="primary" onClick={onOpenModalHandler}>
        검색하기
      </Button>
      <Modal
        fullscreen
        show={modalState.equipmentInquirySearchModal}
        onHide={() => {
          setModalsState({
            ...modalState,
            equipmentInquirySearchModal: false,
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
              <Form.Label>종류</Form.Label>
              <Form.Select {...register('type')}>
                <option value="">모두</option>
                {equipmentSearchType?.map((Type: Types) => {
                  return (
                    <option key={Type.key} value={Type.key}>
                      {Type.value}
                    </option>
                  )
                })}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>제품명</Form.Label>
              <Form.Control
                type="text"
                placeholder="제품명"
                {...register('name')}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>시리얼 넘버</Form.Label>
              <Form.Control
                type="text"
                placeholder="시리얼넘버"
                {...register('serial')}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>등록일자</Form.Label>
              <Form.Control type="date" {...register('createDateStart')} />
              <Form.Text className="text-muted">~</Form.Text>
              <Form.Control type="date" {...register('createDateEnd')} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>사용자</Form.Label>
              <Form.Control
                type="text"
                placeholder="사용자"
                {...register('userName')}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>부서</Form.Label>
              <Form.Select {...register('departmentName')}>
                <option value="">모두</option>
                {equipmentSearchDepartment.map(
                  (Department: DepartmentItems) => {
                    return (
                      <option key={Department.departmentName}>
                        {Department.departmentName}
                      </option>
                    )
                  }
                )}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>비고</Form.Label>
              <Form.Control
                type="text"
                placeholder="비고"
                {...register('comment')}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>상태</Form.Label>
              <Form.Select {...register('status')}>
                <option value="">모두</option>
                {equipmentSearchStatus?.map((Type: Types) => {
                  return (
                    <option key={Type.key} value={Type.key}>
                      {Type.value}
                    </option>
                  )
                })}
              </Form.Select>
            </Form.Group>

            <input type="reset" value="Reset" onClick={resetFormHandler} />
            <Button
              onClick={() => {
                setModalsState({
                  ...modalState,
                  equipmentInquirySearchModal: false,
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
        <span>- 종류 : {equipmentSearchInputItem.searchTypeCode}</span>
        <span>- 이름 : {equipmentSearchInputItem.searchName}</span>
        <span>- 시리얼 : {equipmentSearchInputItem.searchSerial}</span>
        <span>
          - 등록 날짜 : {equipmentSearchInputItem.searchcreateDateStart}
        </span>
        <span>~ {equipmentSearchInputItem.searchcreateDateEnd}</span>
        <span>- 사용자 : {equipmentSearchInputItem.searchUserName}</span>
        <span>- 부서 : {equipmentSearchInputItem.searchDepartmentName}</span>
        <span>- 비고 : {equipmentSearchInputItem.searchComment}</span>
        <span>- 상태 : {equipmentSearchInputItem.searchStatus}</span>
      </div>
    </div>
  )
}

export default EquipmentInquirySearch
