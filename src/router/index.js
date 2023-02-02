import Posts from "../pages/posts";
import ViewPost from "../pages/viewpost";


export const publicRoutes = [
    {path: '/', element: <Posts/>},
    {path: '/viewpost', element: <ViewPost/>},
]

