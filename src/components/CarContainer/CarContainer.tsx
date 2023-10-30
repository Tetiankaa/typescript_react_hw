import React, {useEffect, useState} from 'react';
import {ICar} from "../../interfaces/carInterface";
import {carService} from "../../services/carService";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";


const CarContainer = () => {

    const [cars, setCars] = useState<ICar[]>([]);
    const [trigger, setTrigger] = useState<boolean>(false);
    const [carForUpdate, setCarForUpdate] = useState<ICar>(null);

    useEffect(() => {
        carService.getAll().then(({data})=>setCars(data))
    }, [trigger]);
    return (
        <div>
            <CarForm carForUpdate={carForUpdate} setTrigger={setTrigger} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars} setTrigger={setTrigger} setCarForUpdate={setCarForUpdate}/>

        </div>
    );
};

export {CarContainer};