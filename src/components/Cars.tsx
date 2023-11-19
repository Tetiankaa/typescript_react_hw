import React, {useEffect} from 'react';

import {carService} from "../services";
import {useAppDispatch, useAppSelector} from "../hooks";
import {carActions} from "../redux";
import {Car} from "./Car";

const Cars = () => {
        const dispatch = useAppDispatch();
        const {cars,trigger} = useAppSelector(state=> state.cars);

    useEffect(() => {
        carService.getAll().then(({data})=>dispatch(carActions.setCars(data)))
    }, [dispatch,trigger]);

    return (
        <div>
            {cars.map(car=><Car car={car} key={car.id}/>)}
        </div>
    );
};

export {Cars};