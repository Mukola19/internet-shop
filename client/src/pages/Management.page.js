import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { ListGroup } from "react-bootstrap"
import st from "./Management.page.module.css"
import { ModalContainer } from "../components/Modals/ModalContainer"

export const ManagementPage = () => {
  const [show, setShow] = useState(false)
  const [flag, setFlag] = useState('')
 
  const showModal = text => {
    setShow(true)
    setFlag(text)
  }
  const closeModal = boolean => {
    setShow(boolean)
    setFlag('')
  }

  return (
    <>
      <ListGroup variant="flush" className={st.list}>
        <ListGroup.Item onClick={() => showModal('type')}>Типи</ListGroup.Item>
        <ListGroup.Item onClick={() => showModal('brand')}> Бренди </ListGroup.Item>
        <ListGroup.Item onClick={() => showModal('device')}> Товари </ListGroup.Item>
        <ListGroup.Item>Крористувачі</ListGroup.Item>
      </ListGroup>

      <ModalContainer show={show} handleClose={closeModal} flag={flag}/>

    </>
  )
}


