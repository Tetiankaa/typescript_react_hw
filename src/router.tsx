import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {PostsTitlesPage} from "./pages/PostsTitlesPage";
import {PostDetailsPage} from "./pages/PostDetailsPage";
import {userService} from "./services/userService";

const router = createBrowserRouter([
    {path:'', element:<MainLayout/>, children:[
            {index:true, element:<Navigate to={'users'}/>},
            {path:"users", element:<UsersPage/>,loader:()=>userService.getAll()},
            {path:'users/:userId', element:<UserDetailsPage/>, children:[
                    {path:'posts', element:<PostsTitlesPage/>}
                ]},
            {path:'users/:userId/posts/:postId', element:<PostDetailsPage/>}
        ]}
])

export {
    router
}