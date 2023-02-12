import {React, createContext, useState} from "react"
export const StoreContext = createContext(null)
export default ({children}) => {
    const limit = 6
    const [posts,setPosts] = useState([
    {id:1, title:'Post1', body:'Desc'},
    {id:2, title:'Post2', body:'Desc'},
    {id:3, title:'Post3', body:'Desc'},
    {id:4, title:'Post4', body:'Desc'},
    {id:5, title:'Post5', body:'Desc'},
    {id:6, title:'Post6', body:'Desc'}])
    const store = {
        limit: limit,
        postsStore: [posts,setPosts],
    }
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
