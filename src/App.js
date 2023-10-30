import React from 'react';
import {UserContainer} from "./components/UserContainer/UserContainer";
import {CommentContainer} from "./components/CommentContainer/CommentContainer";
import {CarContainer} from "./components/CarContainer/CarContainer";

const App = () => {
    return (
        <div>
            {/*<UserContainer/>*/}
            {/*<CommentContainer/>*/}
            <CarContainer/>
        </div>
    );
};

export {App};