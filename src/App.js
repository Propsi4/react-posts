import PostList from './components/PostList';
import './styles/App.css';
import React, {useEffect, useState} from 'react';
import PostForm from './components/PostForm';
import PopupWindow from './components/UI/PopupWindow/PopupWindow';
import StyledButton from './components/UI/button/StyledButton';
import {getPages} from './components/pagescount'
function App() {
  // posts limit per page
  const limit = 4
  // pages array for page select buttons
  const [pagesArray,setPagesArray] = useState([1])
  // total count of pages
  const [pages,setPages] = useState(1)
  // current page
  const [page,setPage] = useState(1)
  // list of posts
  const [posts,setPosts] = useState([
    {id:1, title:'Post1', body:'Desc'},
    {id:2, title:'Post2', body:'Desc'},
    {id:3, title:'Post3', body:'Desc'}
  ])
  // posts for current page
  const [groupedPosts,setgroupedPosts] = useState([...posts])
  // a switch for post creation menu
  const [visible, setVisible] = useState(false);
  const remove = (post) => {
    // removes a post
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const create = (newPost) => {
    // creates a new post
    setPosts([...posts, newPost])
    setVisible(false);
  }

  useEffect(() => {
    // Goes to previous page when no posts were found on current page, used for post's remove button
    if(groupedPosts.length === 0 && page > 1) {
      setPage(page - 1)
    }
  },[groupedPosts,page])

  useEffect(() => {
    // Increases/decreases page count by posts count
    setPages(getPages(posts.length,limit))
  },[posts.length])

  useEffect(() => {
    // Creates pages array for bottom page buttons
    const newPagesArray = []
    for (let i = 1; i <= pages; i++) {
      newPagesArray.push(i)
    }
    setPagesArray(newPagesArray)
  },[pages])

  useEffect(() => {
    // Sets posts for current page
    setgroupedPosts(posts.slice((page - 1) * limit, page * limit))
  },[page,posts])

  return (
    <div className="App">
      <StyledButton onClick={() => setVisible(true)}>Створити пост</StyledButton>
      <PopupWindow visible={visible} setVisible={setVisible}>
        <PostForm create={create}/>
      </PopupWindow>
      <hr></hr>
      {posts.length ? 
      <PostList posts={groupedPosts} title='Javascript posts' remove = {remove}/>
      :
      <h1>No posts</h1>
      }
      <div className="page_wrapper">
      {pagesArray.map(index => <span key={index} onClick={() => setPage(index)} className={page === index ?
      "page page_current" : "page"
    }>{index}</span>)}
      </div>
    </div>
  );
}

export default App;
