import {React, createContext, useState} from "react"
export const StoreContext = createContext(null)
export default ({children}) => {
    const limit = 4
    const [posts,setPosts] = useState([
    {id:1, title:'Post1', body:'Desc'},
    {id:2, title:'Post2', body:'Desc'},
    {id:3, title:'Post3', body:'Desc'}])
    const store = {
        limit: limit,
        postsStore: [posts,setPosts],
    }
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
