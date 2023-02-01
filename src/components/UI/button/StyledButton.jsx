import React from 'react'
import classes from './StyledButton.module.css'
const StyledButton = ({children,...props}) => {
    return (
        <button className={classes.StyledButton} {...props} >
            {children}
        </button>
    )
}

export default StyledButton