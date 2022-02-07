import React from "react"
import { Modal } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { changeIsError } from "../../store/reducer/userReducer"
import st from './ErrorMessage.module.scss'

export const ErrorMessage = ({ isError }) => {
  const dispatch = useDispatch()

  return (
    <Modal className={st.module} show={isError} onHide={() => dispatch(changeIsError(''))} >
      <Modal.Header closeButton>
       <p>{isError}</p>
      </Modal.Header>
    </Modal>
  )
}
