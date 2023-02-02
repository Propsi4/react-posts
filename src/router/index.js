import Posts from "../pages/posts";
import ViewPost from "../pages/viewpost";


export const publicRoutes = [
    {index: true, element: <Posts/>},
    {path: '/viewpost', element: <ViewPost/>},
]

