import React from 'react'
import StyledButton from './UI/button/StyledButton'
import '../styles/App.css'
const PostItem = (props) => {
    return (
      <div className='post'>
        <div className='post_content'>                
          <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
        </div>
        <div className='post_btns'>
          <StyledButton onClick={() => props.open}>Відкрити</StyledButton>
          <StyledButton onClick={() => props.remove(props.post)}>Видалити</StyledButton>
        </div>
      </div>
    )
}

export default PostItem;