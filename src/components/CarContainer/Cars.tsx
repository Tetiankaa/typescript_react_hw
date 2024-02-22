import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {carActions} from "../../redux";
import {useSearchParams} from "react-router-dom";
import {Car} from "./Car";
import {Pagination} from "./Pagination";

const Cars = () => {
        const dispatch = useAppDispatch();
        const {cars,isLoading,error,trigger} = useAppSelector(state => state.cars);
        
        const [query,setQuery] = useSearchParams({page:'1'});
        const page = query.get('page');

    useEffect(() => {
            dispatch(carActions.getAll({page}))
    }, [trigger, page, dispatch]);

    return (
        <div>
            {isLoading && <h1>loading....</h1>}
            {error && <h1>{error}</h1>}
            {cars.map(car=><Car key={car.id} car={car}/>)}
            <Pagination setQuery={setQuery} page={page}/>
        </div>
    );
};

export {Cars};