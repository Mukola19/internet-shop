import React, { useEffect } from "react"
import { Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { BasketListContainer } from "../../components/BasketList/BasketListContainer"
import { getBasket } from "../../store/reducer/basketReducer"
import { receivingBasket } from "../../store/selectors/basket-selector"
import st from "./Basket.module.scss"

export const BasketPage = () => {
  const basket = useSelector(receivingBasket)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBasket())
  }, [])


  return (
    <Container>
      <ul className={st.list}>
        <h2>Всього у вас в корзині: {basket.allCount}</h2>
        {basket?.array.map(device => (
          <BasketListContainer {...device} key={device.id} />
        ))}
      </ul>
    </Container>
  )
}
