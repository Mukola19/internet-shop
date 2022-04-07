import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { receiptDevices } from "../../store/reducer/typesBrandsReducer"
import st from "./TypesList.module.scss"

export const TypesList = () => {
  const typesBrands = useSelector((state) => state.typesBrands)
  const dispatch = useDispatch()

  const onclick = (typeId) => {
    dispatch(receiptDevices({ typeId }))
  }

  return (
    <div className={st.listGroup}>
      <h5>Категорії</h5>
      <button onClick={() => onclick(null)}>Скасувати</button>

      {typesBrands.types.map((type) => (
        <button
          key={type.id}
          onClick={() => onclick(type.id)}
          className={type.id === typesBrands.activeType ? st.active : null}
        >
          {type.name}
        </button>
      ))}

      <button>Показати ще</button>
    </div>
  )
}
