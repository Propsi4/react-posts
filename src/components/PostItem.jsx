import React from 'react'
import { useNavigate } from "react-router-dom";
import StyledButton from './UI/button/StyledButton'
import '../styles/App.css'
const PostItem = (props) => {
  const navigate = useNavigate()
    return (
      <div className='post'>
        <div className='post_content'>                
          <strong>{props.number}. {String(props.post.title).substring(0,15)}</strong>
                <div>
                    {String(props.post.body).substring(0,20)}
                </div>
        </div>
        <div className='post_btns'>
          <StyledButton onClick={() => {navigate({pathname: '/viewpost', search:"?id="+props.post.id})}}>Відкрити</StyledButton>
          <StyledButton onClick={() => props.remove(props.post)}>Видалити</StyledButton>
        </div>
      </div>
    )
}

export default PostItem;