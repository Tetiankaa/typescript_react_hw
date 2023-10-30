import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {AlbumsPage} from "./pages/AlbumsPage";
import {TodosPage} from "./pages/TodosPage";
import {CommentsPage} from "./pages/CommentsPage";
import {PostPage} from "./pages/PostPage";

const router = createBrowserRouter([
    {path:'',element:<MainLayout/>, children:[
            {index:true, element:<Navigate to={'albums'}/>},

            {path:'albums', element:<AlbumsPage/>},
            {path:'todos', element:<TodosPage/>},
            {path:'comments', element:<CommentsPage/>, children:[
                    {path:'post', element:<PostPage/>}
                ]}
        ]}
])
export {router}