import React, {useContext} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/App.css'
import { StoreContext } from '../settings'
import Arrow from "../styles/arrow_left.png"
const ViewPost = () => {
  const navigate = useNavigate()

  let { search } = useLocation()

  const query = new URLSearchParams(search)

  const id = query.get('id')
  
  const {postsStore} = useContext(StoreContext)

  const posts = [...postsStore[0]]
  
  const post = posts.find(p => p.id === Number(id))

  return (
    <div className='post_view'>
      <div className='post_title'>
      <img className='post_arrow' src={Arrow} alt="Go back" onClick={() => navigate(-1)}/>
      <h1>{post.title}</h1>
      </div>
      <div className='post_desc'>
      <p>{post.body}</p>
      </div>
    </div>
  )
}

export default ViewPost