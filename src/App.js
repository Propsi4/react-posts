import PostList from './components/PostList';
import './styles/App.css';
import React, {useEffect, useState} from 'react';
import PostForm from './components/PostForm';
import PopupWindow from './components/UI/PopupWindow/PopupWindow';
import StyledButton from './components/UI/button/StyledButton';

function App() {
  const [posts,setPosts] = useState([
    {id:1, title:'Post1', body:'Desc'},
    {id:2, title:'Post2', body:'Desc'},
    {id:3, title:'Post3', body:'Desc'}
  ]);
  const [visible, setVisible] = useState(false);
  const remove = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setVisible(false);
  }
  return (
    <div className="App">
      <StyledButton onClick={() => setVisible(true)}>Створити пост</StyledButton>
      <PopupWindow visible={visible} setVisible={setVisible}>
      <PostForm create={createPost}/>
      </PopupWindow>
      <hr></hr>
      {posts.length ? 
      <PostList posts={posts} title='Javascript posts' remove = {remove}/>
      :
      <h1>No posts</h1>
      }
    </div>
  );
}

export default App;
