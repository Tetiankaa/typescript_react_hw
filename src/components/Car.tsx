import React, {FC} from 'react';
import {ICar} from "../interfaces";
import {carService} from "../services";
import {useAppDispatch} from "../hooks";
import {carActions} from "../redux";

interface IProps {
    car: ICar
}

const Car: FC<IProps> = ({car}) => {
    const {id, brand, year, price} = car;

    const dispatch = useAppDispatch();

    const deleteCar = async (id: number) => {
        await carService.deleteById(id);
        dispatch(carActions.setTrigger())
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
            <button onClick={()=>dispatch(carActions.setCarForUpdate(car))}>update</button>
            <button onClick={() => deleteCar(id)}>delete</button>
        </div>
    );
};

export {Car};