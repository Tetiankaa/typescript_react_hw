import {Characters} from "../components";
import {useAppSelector} from "../hooks";

const CharactersPage = () => {
        const {error} = useAppSelector(state => state.characters);
    return (
        <div>
            {error && <h1>{JSON.stringify(error)}</h1>}
            <Characters/>
        </div>
    );
};

export {CharactersPage};