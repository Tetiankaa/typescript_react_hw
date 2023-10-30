import React, {FC} from 'react';
import {ICar} from "../../interfaces/carInterface";
import {Car} from "./Car";
import {ISetState} from "../../types/ISetState";

interface IProps {
    cars:ICar[],
    setTrigger:ISetState<boolean>,
    setCarForUpdate:ISetState<ICar>
}
const Cars:FC<IProps> = ({cars,setTrigger,setCarForUpdate}) => {
    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car} setTrigger={setTrigger} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export {Cars};