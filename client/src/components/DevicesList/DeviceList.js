import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { Button, Card, Col, Image } from "react-bootstrap"
import { useDispatch } from "react-redux"
import cl from "classname"

import {
  addDeviceInBasket,
  deleteFromBasket,
} from "../../store/reducer/basketReducer"
import st from "./DeviceList.module.scss"
import { StaticRating } from "../../commons/Rating/StaticRating"
import img from "../img/cart.ico"

export const DeviceList = ({ name, price, img, id, basketDevice, rating }) => {
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const onclick = (e) => {
    e.preventDefault()

    if (basketDevice) {
      return dispatch(deleteFromBasket(id))
    }

    dispatch(addDeviceInBasket(id))
  }

  return (
    <Col md={3}>
      <div className={st.border}>
        <div className={st.wrap}>
          <div className={st.productWrap}>
            <img src={process.env.REACT_APP_API_URL + img} />
          </div>

          <div className={st.loopAction}>
            <NavLink to={"/device/" + id} className="addToCart">
              Перегляд
            </NavLink>

            <a className={st.loopAddToCart} onClick={onclick} >
              {basketDevice ? "З корзини" : "В корзину"}
            </a>
          </div>
        </div>

        <div className={st.productInfo}>
          <StaticRating variant='small' rating={rating}/>
          <h3 className={st.productTitle}>{name}</h3>
          <span className={st.price}> $ {price}</span>
        </div>
      </div>
    </Col>
  )
}


