import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {ICar} from "../../interfaces";
import {carValidator} from "../../validators";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {carActions} from "../../redux";
import {useEffect} from "react";

const CarForm = () => {
    const {register,handleSubmit,reset,setValue, formState:{errors, isValid}} = useForm<ICar>({mode:"onBlur", resolver:joiResolver(carValidator)});
    const {carForUpdate} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (carForUpdate){
            setValue('brand',carForUpdate.brand,{shouldValidate:true})
            setValue('price',carForUpdate.price,{shouldValidate:true})
            setValue('year',carForUpdate.year,{shouldValidate:true})
        }
    }, [carForUpdate,setValue]);
    const updateCar = async (car:ICar)=>{
        await dispatch(carActions.updateById({id:carForUpdate.id, car}));
        dispatch(carActions.setCarForUpdate(null));
        reset();
    }

    const createCar = async (car:ICar)=>{
        await dispatch(carActions.create({car}));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? updateCar : createCar)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <p>{errors.brand.message}</p>}
            <input type="text" placeholder={'price'} {...register('price',{valueAsNumber:true})}/>
            {errors.price && <p>{errors.price.message}</p>}
            <input type="text" placeholder={'year'} {...register('year',{valueAsNumber:true})}/>
            {errors.year && <p>{errors.year.message}</p>}
            <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Create'}</button>
        </form>
    );
};

export {CarForm};