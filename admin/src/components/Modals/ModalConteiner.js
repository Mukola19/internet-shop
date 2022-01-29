import React from "react"
import { Modal } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { createDevice } from "../../store/reducer/devicesReducer"
import {
  createBrand,
  createType,
} from "../../store/reducer/typesBrandsReducer"
import { DeviceForm } from "./DeviceForm"
import { ModalDevice } from "./ModalDevice"
import { ModalForm } from "./ModalForm"

export const ModalConteiner = ({ showDevice, showType, showBrand, onHide ,mark}) => {
  const dispatch = useDispatch()

  const create = (data) => {
    switch (true) {
      case showType:
        return dispatch(createType(data, onHide))
      case showBrand:
        return dispatch(createBrand(data, onHide))
      case showDevice:
        return dispatch(createDevice(data, onHide))
      default:
        break
    }
  }

  return (
    <div>
      <Modal show={showType || showBrand || showDevice} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{mark}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showDevice ? (
            <DeviceForm create={create} />
          ) : (
            <ModalForm create={create} />
          )}
        </Modal.Body>
      </Modal>
    </div>
  )
}
