import React from "react"
import {  Image } from "react-bootstrap"
import { Counter } from "../../commons/Counter/Counter"
import { MyButton } from "../../commons/Elements/Button/MyButton"
import st from "./BasketList.module.scss"

export const BasketList = ({ name, price, img, count, changeCounter, deleteDevice, disabled }) => {
  return (
    <li className={st.item}>
      <div className={st.img}>
        <Image src={process.env.REACT_APP_API_URL + img} />
      </div>

      <h6>{name}</h6>
      <h5>$ {price}</h5>
      <Counter count={count} changeCounter={changeCounter} />

      <MyButton> Замовити</MyButton>
      <MyButton onClick={deleteDevice} disabled={disabled} variant="danger">
        &#10008;
      </MyButton>
    </li>
  )
}
