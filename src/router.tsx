import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./layouts";
import {EpisodesPage} from "./pages/EpisodesPage";
import {CharactersPage} from "./pages/CharactersPage";

const router = createBrowserRouter([
    {path:'', element:<MainLayout/>, children:[
            {path:'episodes', element:<EpisodesPage/>},
            {path:'characters', element:<CharactersPage/>}
        ]}
])
export {
    router
}