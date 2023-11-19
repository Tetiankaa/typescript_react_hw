import React, {useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../hooks";
import {ICar} from "../interfaces";
import {carService} from "../services";
import {carActions} from "../redux";

const CarForm = () => {
    const {register, reset, setValue, handleSubmit} = useForm();

    const {carForUpdate} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue]);

    const update: SubmitHandler<ICar> = async (car) => {
        await carService.updateById(carForUpdate.id, car);
        dispatch(carActions.setCarForUpdate(null))
        dispatch(carActions.setTrigger());
        reset();

    }

    const save: SubmitHandler<ICar> = async (car) => {
        await carService.create(car);
        dispatch(carActions.setTrigger());
        reset();
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            <button>{carForUpdate ? 'update' : 'save'}</button>
        </form>
    );
};

export {CarForm};