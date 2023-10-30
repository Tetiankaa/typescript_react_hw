import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validators/userValidator";
import {IUser} from "../../interfaces/userInterface";
import {userService} from "../../services/userService";
import {ISetState} from "../../types/ISetState";

interface IProps {
    setUsers:ISetState<IUser[]>
}
const UserForm:FC<IProps> = ({setUsers}) => {
  const {register, reset,handleSubmit,formState:{errors,isValid}}
      =  useForm<IUser>({mode:'all',resolver:joiResolver(userValidator)})

   const save:SubmitHandler<IUser> = async (user)=>{
          const {data}  = await userService.create(user);
       setUsers(prevState => [...prevState,data])

      reset();
   }
    return (
        <>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <input type="text" placeholder={'phone'} {...register('phone')}/>
                <button type={"submit"} disabled={!isValid}>Save</button>
            </form>
            {errors.name && <div>{errors.name.message}</div>}
            {errors.username && <div>{errors.username.message}</div>}
            {errors.email && <div>{errors.email.message}</div>}
            {errors.phone && <div>{errors.phone.message}</div>}
        </>
    );
};

export {UserForm};