import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout";
import { publicRoutes } from "../router";
import ErrorPage from "../pages/errorpage";
const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            ...publicRoutes
        ]
    }]
)

export default router