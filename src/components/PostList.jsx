import React from 'react'
import PostItem from './PostItem'
const PostList = ({posts,title,remove}) => {
    return (
      <div>
        <h1>{title}</h1>
        {posts.map((post,index) => 
        <div key={post.id}>
            <PostItem number={index + 1} post={post} remove = {remove}/>
        </div>)}
      </div>
    )
}

export default PostList;