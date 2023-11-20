import css from './Header.module.css';
import {useAppSelector} from "../../hooks";
const Header = () => {
    const {currentEpisode} = useAppSelector(state => state.episodes);

    return (
        <div className={css.Header}>
            {currentEpisode
                ? <h1>{currentEpisode}</h1>
                : <h1>Rick & Morty</h1>
            }
        </div>
    );
};

export {Header};