import React from 'react'

export default function Header(props) {
  const { title, containerClass, btnClass, titleClass, btn, onClickBtn } = props
  return (
    <div className={`flex justify-between ${containerClass}`}>
      <div className={`${titleClass}`}>{title}</div>
      <div className={`w-20 ${btnClass}`} onClick={onClickBtn}>{btn}</div>
    </div>
  )
}
