import React from 'react'
import cl from './PopupWindow.module.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
const PopupWindow = ({children,open,handleClose}) => {
  // if (visible) {
  //   rootClasses.push(cl.active)
  // }
  
  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={cl.modal}>
          {children}
        </Box>
      </Modal>
    // <div onClick={() => setVisible(false)} className={rootClasses.join(' ')}>
    //   <div onClick={(e) => e.stopPropagation()} className={cl.PopupWindowContent}>
    //     {children}
    //   </div>
    // </div>
  )
}

export default PopupWindow