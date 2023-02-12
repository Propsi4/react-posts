import React from 'react'
import PostItem from './PostItem'
import Grid from '@mui/material/Unstable_Grid2';
const PostList = ({posts,title,remove}) => {
    return (
      <div>
        <h1>{title}</h1>
        <Grid container sx={{justifyContent: 'center'}} columns={2}>
        {posts.map((post,index) => 
        <Grid item xs={1} key={post.id}>
            <PostItem post={post} remove = {remove}/>
        </Grid>)}
        </Grid>
      </div>
    )
}

export default PostList;