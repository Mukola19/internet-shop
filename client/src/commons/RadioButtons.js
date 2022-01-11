import React from 'react'
import { Button, ButtonGroup, ToggleButton } from 'react-bootstrap'
import st from './RadioButtons.module.css'

export const RadioButtons = ({isActive, setIsActive}) => {
  const radios = [
    { name: 'Додати', value: 1 },
    { name: 'Редагувати', value: 2 },
    { name: 'Видалити', value: 3 },
  ]


  return (

    <>    
      {radios.map((radio, i) => (
        <ToggleButton
          className={st.buttons}
          size='sm'
          key={i}
          id={`radio-${i}`}
          type='radio'
          variant={'outline-dark'}
          name='radio'
          value={radio.value}
          checked={isActive == radio.value}
          onChange={(e) => setIsActive(+e.currentTarget.value)}
        >
          {radio.name}
        </ToggleButton>
      ))}
    </>


  )
}
