import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Col,  ListGroup, Row ,Container, Alert} from "react-bootstrap"
import { DeviceList } from "../../components/DevicesList/DeviceList"
import { PaginationShop } from "../../commons/Pagination/PaginationShop."
import { AlertMessage } from "../../commons/AlertMessage"
import {  getDevices } from "../../store/reducer/devicesReducer"
import { TypesList } from "../../components/TypesList"
import st from "./Shop.module.scss"




export const ShopPage = () => {
  const devices = useSelector((state) => state.devices)
  const dispatch = useDispatch()

  return (
    <Row className={st.row}>
      <Col md={2}>
       <TypesList/>
      </Col>

      <Col md={10}> 
        <Row>
          {devices.array.length !== 0 ? devices.array.map(device => (
            <DeviceList {...device} key={device.id} />
          )): <AlertMessage text='Нічого не знайдено'/>}

          

          <PaginationShop
            count={devices.count}
            partionSize={5}
            pageSize={devices.limit}
            page={devices.page}
            changePage={page => dispatch(getDevices({ page }))}
          />
        </Row>
      </Col>
    </Row>
  )
}
