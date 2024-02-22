import {FC, useRef, useState} from "react";

import {ICar} from "../../interfaces";
import emptyImage from '../../assets/no_image.jpg';
import {carService} from "../../services";
import {useAppDispatch} from "../../hooks";
import {carActions} from "../../redux";


interface IProps {
    car:ICar
}
const Car:FC<IProps> = ({car}) => {
    const {id,brand,year,price,photo} = car;
    const fileInput = useRef<HTMLInputElement>();

    const [image, setImage] = useState<string>(null);

    const dispatch = useAppDispatch();

    const addPhoto = async ():Promise<void> =>{
        const formData = new FormData();
        const file:Blob = fileInput.current.files[0];
        formData.append('photo',file);

        await carService.addPhoto(id,formData);

        setImage(URL.createObjectURL(file))
    }

    const deleteCar = async ()=>{
        await dispatch(carActions.deleteById({id}));
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
            <img
                src={photo || image || emptyImage}
                alt={brand}
                width={200}
                onClick={()=>fileInput.current.click()}
                style={{cursor:photo || image ? 'default' : 'pointer'}}
            />
            <input type="file" ref={fileInput} style={{display:"none"}} onChange={addPhoto} accept={'image/jpeg, image/png'} disabled={!!photo || !!image}/>

            <button onClick={()=>dispatch(carActions.setCarForUpdate(car))}>update</button>
            <button onClick={deleteCar}>delete</button>
        </div>
    );
};


export {Car};