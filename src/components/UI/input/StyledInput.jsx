import React from 'react'
import classes from './StyledInput.module.css'
const StyledInput = (props) => {
  return (
    <div>
        <input className={classes.StyledInput} {...props}></input>
    </div>
  )
}

export default StyledInput