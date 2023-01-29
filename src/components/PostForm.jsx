import React, {useState} from 'react'
import StyledButton from './UI/button/StyledButton'
import StyledInput from './UI/StyledInput/StyledInput'

const PostForm = ({createPost}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        createPost(newPost)
        setPost({title: '', body: ''})
    }
    return (
        <form>
        <h1>PostForm</h1>
        <StyledInput value={post.title} type='text' placeholder='Назва поста' onChange={e => setPost({...post, title: e.target.value})}/>
        <StyledInput value={post.body} type='text' placeholder='Опис' onChange={e => setPost({...post, body: e.target.value})}/>
        <StyledButton onClick={addNewPost}>Створити</StyledButton>
      </form>
    )
  }
export default PostForm
