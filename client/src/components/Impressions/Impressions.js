import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addImpression } from '../../store/reducer/devicesReducer'
import { Response } from './Response' 
import { WriteAReview } from './WriteAReview'
import st from './Impressions.module.scss'


export const Impressions = ({ impression, deviceId }) => {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()

  const onHide = () => setShowModal(false)

  return (
    <div className={st.rating}>
      <WriteAReview
        show={showModal}
        onHide={onHide}
        title='Напишіть відгук'
        addImpression={data => dispatch(addImpression({ ...data, deviceId }, onHide)) }
      />

      <div className={st.header}>
        <h3>Відгуки</h3>
        <Button variant='secondary' onClick={() => setShowModal(true)}>
          Написати відгук
        </Button>
      </div>

      <Response impression={impression}  />
    </div>
  )
}
