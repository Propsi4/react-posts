import React from 'react'
import { useNavigate } from "react-router-dom";
const PageList = ({pagesArray, page}) => {
    const navigate = useNavigate()
  return (
    <div className="page_wrapper">
    {
        pagesArray.map(index => <span key={index} onClick={() => navigate({pathname: "/posts", search: "?page="+index})} className={page == index ?
            "page page_current" : "page"
          }>{index}</span>)
    }
    </div>
  )
}

export default PageList