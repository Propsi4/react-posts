import React from 'react'
import StyledButton from './UI/button/StyledButton'

const PagesList = ({pagesArray}) => {
  return (
    <div>
        {typeof pagesArray !== "undefined" 
        ?
        pagesArray.map(index => <StyledButton>1</StyledButton>)
        :
        <h1>No pages</h1>
  }
    </div>
  )
}

export default PagesList