import PostList from '../components/PostList';
import '../styles/App.css';
import React, {useEffect, useState, useContext} from 'react';
import PostForm from '../components/PostForm';
import PopupWindow from '../components/UI/PopupWindow/PopupWindow';
import StyledButton from '../components/UI/button/StyledButton';
import {getPages} from '../components/pagescount'
import { StoreContext } from '../settings';
import { useLocation, useNavigate } from 'react-router-dom';
import PageList from '../components/PageList';

const Posts = () => {
  // ---* gets current page_id from query params
  const [page,setPage] = useState(1)
  let { search } = useLocation();
  const query = new URLSearchParams(search);
  let page_id = Number(query.get("page"))
  if (page_id === 0) {
    page_id = 1
  }
  //const {page_id} = useParams()

  // *---

  // posts limit per page
  const {limit} = useContext(StoreContext)

  // useContext storage
  const {postsStore} = useContext(StoreContext)

  // ---* Total list of posts
  const [posts,setPosts] = postsStore

  // List of posts for current page
  const [groupedPosts,setgroupedPosts] = useState([])
  // *---

  const navigate = useNavigate()

  // pages array for page select buttons
  const [pagesArray,setPagesArray] = useState([1])

  // total count of pages
  const [pages,setPages] = useState(1)

  // a switch for post creation menu
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const remove = (post) => {
    // removes a post
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const create = (newPost) => {
    // creates a new post
    setPosts([...posts, newPost])
    handleClose()
  }

  useEffect(() => {
    setPage(Number(page_id))
  },[page_id])

  useEffect(() => {
    // Increases/decreases page count by posts count
    setPages(getPages(posts.length,limit))
    setgroupedPosts(posts.slice((page-1)*limit,page*limit))
  },[posts,page])

  useEffect(() => {
    // Creates pages array for bottom page buttons
    if(groupedPosts.length === 0 && page > 1) {
      navigate({pathname: "", search: "?page="+String(page-1)})
    }
    const newPagesArray = []
    for (let i = 1; i <= pages; i++) {
      newPagesArray.push(i)
    }
    setPagesArray(newPagesArray)
  },[pages])

  return (
    <div className="App">
      <StyledButton onClick={handleOpen}>Створити пост</StyledButton>
      <PopupWindow open={open} handleClose={handleClose}>
        <PostForm create={create}/>
      </PopupWindow>
      <hr></hr>
      {posts.length ? 
      <PostList posts={groupedPosts} title='Javascript posts' remove = {remove}/>
      :
      <h1>No posts</h1>
      }
      <PageList pagesArray={pagesArray} page={page}/>
    </div>
  )
}

export default Posts