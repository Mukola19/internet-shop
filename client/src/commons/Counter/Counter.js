import React, { useEffect, useState } from "react"
import cl from "classname"
import st from "./Counter.module.scss"
import { MyButton } from "../Elements/Button/MyButton"

export const Counter = ({ count, changeCounter }) => {
  const [disabled, setDisabled] = useState(false)
  const [newCount, setNewCount] = useState(count)



  const onchange = (num) => {
    if (num < 0 || num.toString().length > 3) {
      return setNewCount(newCount)
    }
    setNewCount(num)
    changeCounter({ newCount: num, setDisabled })
  }

  return (
    <div>
      <div className={st.counter}>
        <MyButton
          onClick={() => onchange(newCount - 1)}
          disabled={disabled || newCount === 1}
        >
          -
        </MyButton>
        <input
          className={st.count}
          type="number"
          value={newCount || 1}
          onChange={e => onchange(+e.target.value)}
        />
        <MyButton onClick={() => onchange(newCount + 1)} disabled={disabled}>
          ✚
        </MyButton>
      </div>
    </div>
  )
}
