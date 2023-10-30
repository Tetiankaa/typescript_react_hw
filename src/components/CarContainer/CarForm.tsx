import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator";
import {ICar} from "../../interfaces/carInterface";
import {carService} from "../../services/carService";
import {ISetState} from "../../types/ISetState";

interface IProps {
    carForUpdate:ICar,
    setTrigger:ISetState<boolean>,
    setCarForUpdate:ISetState<ICar>
}
const CarForm:FC<IProps> = ({carForUpdate,setTrigger,setCarForUpdate}) => {
    const {register,reset,handleSubmit,setValue,formState:{errors, isValid}} = useForm<ICar>({mode:"all", resolver:joiResolver(carValidator)})

    const save:SubmitHandler<ICar> = async (car:ICar) =>{
        if (carForUpdate){
            await carService.update(carForUpdate.id, car);
            setCarForUpdate(null);
        }else {
            await carService.create(car);
        }
        setTrigger(prevState => !prevState);
        reset();
    }

    useEffect(() => {
        if (carForUpdate){
            setValue('brand',carForUpdate.brand,{shouldValidate:true})
            setValue('price',carForUpdate.price,{shouldValidate:true})
            setValue('year',carForUpdate.year,{shouldValidate:true})
        }
    }, [carForUpdate,setValue]);

    return (
        <>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                <button type={"submit"} disabled={!isValid}>save</button>
            </form>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </>
    );
};

export {CarForm};