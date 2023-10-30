import React, {FC} from 'react';
import {ICar} from "../../interfaces/carInterface";
import {carService} from "../../services/carService";
import {ISetState} from "../../types/ISetState";

interface IProps {
    car: ICar,
    setTrigger:ISetState<boolean>,
    setCarForUpdate:ISetState<ICar>
}

const Car: FC<IProps> = ({car,setTrigger,setCarForUpdate}) => {

    const {id, brand, price, year} = car;

    const deleteCar = async (id: number) => {
        await carService.deleteById(id);
        setTrigger(prev=>!prev);
    }
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>setCarForUpdate(car)}>update</button>
            <button onClick={() => deleteCar(id)}>delete</button>
        </div>
    );
};

export {Car};