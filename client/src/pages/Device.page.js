import React, { useEffect } from "react"
import { Button, Card, Col, Row, Image, div, Container } from "react-bootstrap"
import context from "react-bootstrap/esm/AccordionContext"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { addDeviceInBasket, deleteFromBasket } from "../store/reducer/basketReducer"
import { getOneDevice } from "../store/reducer/devicesReducer"
import st from "./Device.module.css"

export const DevicePage = () => {
  const device = useSelector((state) => state.devices.device)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getOneDevice(id))
  }, [id])

  if (device) {
    return (
      <Container>
        <Row className={st.row}>
          <Col md={4}>
            <Image
              variant="top"
              src={process.env.REACT_APP_API_URL + device.img}
              width={500}
              className={st.img}
            />
            <div className={st.title}>
              <div>
                <h2>{device.name}</h2>
                <p>{device.price}</p>
              </div>
              { device.basketDevice ? <Button variant="danger" className={st.button} onClick={() => dispatch(deleteFromBasket(device.id))}>Видалити</Button> :
        <Button variant="secondary" className={st.button} onClick={() => dispatch(addDeviceInBasket(device.id))}>В корзину</Button>

}
            </div>
          </Col>
          <Col md={{ span: 4, offset: 3 }}>
            <Container>
              <h3>Характеристики</h3>
              <ul>
                {device.infos ? device.infos.map(info => (
                <li key={info.id}>{info.title} :     {info.description}</li>

                )) : null}
              </ul>
            </Container>
          </Col>
        </Row>
      </Container>
    )
  }

  return null
}


