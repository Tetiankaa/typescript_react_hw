import {useContext} from 'react';
import {Context} from "../hoc";

const UseAppContext = () => {
    const [episode, setEpisode] = useContext(Context);
    return {
        episode,
        setEpisode
    }

};

export {UseAppContext};