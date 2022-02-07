import React from 'react'
import { StaticRating } from '../../commons/Rating/StaticRating'
import st from './Rating.module.scss'

export const Response = ({ impression }) => {
  return (
    <>
      {impression? impression.map(i => (
        <div className={st.response} key={i.id}>
          <h6>{i.email}</h6>
          <StaticRating rating={i.rate} variant='small' />
          <p>{i.description}</p>
          <div>
            <h6>Переваги:</h6>
            <p>{i.advantages}</p>
          </div>
          <div>
            <h6>Недоліки:</h6>
            <p>{i.shortcomings}</p>
          </div>
        </div>
      )) : null}
    </>
  )
}
