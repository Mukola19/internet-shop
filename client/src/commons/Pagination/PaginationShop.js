import React, { useState } from "react"
import cl from "classname"
import st from "./PaginationShop.module.scss"

export const PaginationShop = ({ count, page, changePage, partionSize }) => {
  let countPage = Math.ceil(count / partionSize)

  const pages = []
  for (let i = 1; i < countPage; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(countPage / partionSize)
  const [portionNumber, setPortionNumber] = useState(1)
  let leftPortionLeftNummber = (portionNumber - 1) * partionSize + 1
  let rightPortionLeftNummber = portionNumber * partionSize

  return (
    <div className={st.pagination}>
      {portionNumber > 1 && (
        <span className={st.button} onClick={() => setPortionNumber(portionNumber - 1)}>-</span>
      )}

      {pages
        .filter(
          p => p >= leftPortionLeftNummber && p <= rightPortionLeftNummber
        )
        .map(p => (
          <span
            key={p}
            className={cl(st.item, { [st.active]: page === p })}
            onClick={() => changePage(p)}
          >
            {p}
          </span>
        ))}

      {portionCount > portionNumber && (
        <span className={st.button} onClick={() => setPortionNumber(portionNumber + 1)}>+</span>
      )}
    </div>
  )
}
