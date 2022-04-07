import React from 'react'
import cl from 'classname'
import st from './MyButton.module.scss'

export const MyButton = ({ variant, title, children, ...props }) => {


  return (
    <button className={cl(st.myButton, st[variant])} {...props}>
      {title || children}{' '}
    </button>
  )
}
