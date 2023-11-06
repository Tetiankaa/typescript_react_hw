import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces";
import {carService} from "../../services";

const CarForm = () => {
    const {register, reset, handleSubmit}
        = useForm<ICar>();
    const save:SubmitHandler<ICar> = async (car)=>{
        await carService.create(car);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price',{valueAsNumber:true})}/>
            <input type="text" placeholder={'year'} {...register('year',{valueAsNumber:true})}/>
            <button>Save</button>
        </form>
    );
};

export {CarForm};