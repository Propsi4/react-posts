import React from 'react'
//import Card from '@material-ui'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import StyledButton from './UI/button/StyledButton'
import '../styles/App.css'
const PostItem = (props) => {
  const navigate = useNavigate()

    return (
          <Card sx={{ minWidth: 275, backgroundColor: '', margin: 1 }}>
      <CardContent>
        <Typography variant="h5" component="div">
        {String(props.post.title).substring(0,15)}
        </Typography>
        <Typography variant="body2">
        {String(props.post.body).substring(0,15) + (String(props.post.body).length > 15 ? "..." : "") }
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent: 'center'}} >
        <Button size="small" onClick={() => navigate({pathname: '/viewpost', search:"?id="+props.post.id})}>Read more</Button>
        <Button size="small" onClick={() => props.remove(props.post)}>Delete post</Button>
      </CardActions>
    </Card>
      // <div className='post'>
      //   <div className='post_content'>                
      //     <strong>{props.number}. {String(props.post.title).substring(0,15) + (String(props.post.title).length > 15 ? "..." : "") }</strong>
      //           <div>
      //               {String(props.post.body).substring(0,15) + (String(props.post.body).length > 15 ? "..." : "") }
      //           </div>
      //   </div>
      //   <div className='post_btns'>
      //     <StyledButton onClick={() => {navigate({pathname: '/viewpost', search:"?id="+props.post.id})}}>Відкрити</StyledButton>
      //     <StyledButton onClick={() => props.remove(props.post)}>Видалити</StyledButton>
      //   </div>
      // </div>
    )
}

export default PostItem;