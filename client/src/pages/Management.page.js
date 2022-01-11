import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Router } from "react-router-dom"
import { Button, Card, ListGroup, Modal } from "react-bootstrap"
import st from "./Management.page.module.css"
import { ModalCommon } from "../components/Modals/ModalCommon"
import { createBrand, createType } from "../store/reducer/typesBrandsReducer"
import { ModalDevice } from "../components/Modals/ModalDevice"

export const ManagementPage = () => {
  const [showType, setShowType] = useState(false)
  const [showBrand, setShowBrand] = useState(false)
  const [showDevice, setShowDevice] = useState(false)

  return (
    <>
      <ListGroup variant="flush" className={st.list}>
        <ListGroup.Item onClick={() => setShowType(true)}>Типи</ListGroup.Item>
        <ListGroup.Item onClick={() => setShowBrand(true)}> Бренди </ListGroup.Item>
        <ListGroup.Item onClick={() => setShowDevice(true)}> Товари </ListGroup.Item>
        <ListGroup.Item>Крористувачі</ListGroup.Item>
      </ListGroup>



      <ModalCommon
        show={showType}
        handleClose={setShowType}
        title="Типи"
        create={createType}
      />
      <ModalCommon
        show={showBrand}
        handleClose={setShowBrand}
        title="Бренди"
        create={createBrand}
      />
       <ModalDevice
        show={showDevice}
        handleClose={setShowDevice}
        title="Товари"
        create={ null}
      />



    </>
  )
}
