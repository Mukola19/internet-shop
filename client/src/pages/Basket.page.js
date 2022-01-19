import React, { useCallback, useEffect, useState } from "react"
import { Button, Row, Image, Container, ListGroup } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { BasketCounter } from "../components/BasketCounter"
import {
  changeCounter,
  deleteFromBasket,
  getBasket,
} from "../store/reducer/basketReducer"
import st from "./Basket.module.css"

export const BasketPage = () => {
  const basket = useSelector((state) => state.basket)
  const dispatch = useDispatch()

  if (true) {
    return (
      <Container>
        <Row className={st.row}>
          <ListGroup variant="flush">
            {basket.array.map((device) => (
              <ListGroup.Item className={st.listGroup} key={device.id}>
                <Image src={process.env.REACT_APP_API_URL + device.img} />
                <h4>{device.name}</h4>
                <p>{device.price}</p>
                <BasketCounter
                  count={device.count}
                  changeCounter={(count, setDisabled) =>
                    dispatch(changeCounter(device.id, count, setDisabled))
                  }
                />
                <Button variant="secondary">Замовити</Button>
                <Button
                  variant="danger"
                  onClick={() =>
                    dispatch(deleteFromBasket(device.deviceId))
                  }
                >
                  Видалити
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Row>
      </Container>
    )
  }

  return null
}
