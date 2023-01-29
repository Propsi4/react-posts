import React from 'react'
import cl from './PopupWindow.module.css'
const PopupWindow = ({children,visible,setVisible}) => {
  const rootClasses = [cl.PopupWindow]
  if (visible) {
    rootClasses.push(cl.active)
  }
  
  return (
    <div onClick={() => setVisible(false)} className={rootClasses.join(' ')}>
      <div onClick={(e) => e.stopPropagation()} className={cl.PopupWindowContent}>
        {children}
      </div>
    </div>
  )
}

export default PopupWindow