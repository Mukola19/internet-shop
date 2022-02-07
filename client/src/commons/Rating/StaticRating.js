import React from "react"
import st from "./StaticRating.module.scss"
import cl from 'classname'

export const StaticRating = ({ rating, variant }) => {
  let items = []
  for (let i = 0; i < 5; i++) {
    if (rating > 0) {
      items.push(<span className={st.active} key={i}></span>)
      rating--
    } else {
      items.push(<span  key={i}></span>)
    }
  }



  return <div className={cl(variant === 'small'? st.ratingMini : st.ratingResult )}>{items}</div>
}


