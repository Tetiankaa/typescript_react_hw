import {FC} from "react";

import {useAppSelector} from "../../hooks";

interface IProps {
    setQuery:Function,
    page:string
}
const Pagination:FC<IProps> = ({setQuery,page}) => {
    const {nextPage,prevPage} = useAppSelector(state => state.cars)
    const previousPage = () => {
        setQuery((prev: { set: (arg0: string, arg1: string) => void}) => {
            prev.set('page', `${+page - 1}`);
            return prev;
        })

    }

    const next = () => {
        setQuery((prev: { set: (arg0: string, arg1: string) => void }) => {
            prev.set('page', `${+page + 1}`);
            return prev;
        })
    }
    return (
        <div>
            <button onClick={previousPage} disabled={!prevPage}>Prev</button>
            <button onClick={next} disabled={!nextPage}>Next</button>
        </div>
    );
};

export {Pagination};