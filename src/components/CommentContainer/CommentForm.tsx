import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IComment} from "../../interfaces/commentInterface";
import {commentService} from "../../services/commentService";
import {ISetState} from "../../types/ISetState";
import {joiResolver} from "@hookform/resolvers/joi";
import {commentValidator} from "../../validators/commentValidator";

interface IProps{
    setComments:ISetState<IComment[]>
}
const CommentForm:FC<IProps> = ({setComments}) => {
    const {register,reset,handleSubmit,formState:{errors, isValid}}
        = useForm<IComment>({mode:"all",resolver:joiResolver(commentValidator)});

    const save:SubmitHandler<IComment>= async (comment)=>{
        const {data} = await commentService.create(comment);
        setComments(prev=>[...prev, data]);
        reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'post ID'} {...register('postId', {valueAsNumber: true})}/>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <input type="text" placeholder={'body'} {...register('body')}/>
                <button type={"submit"} disabled={!isValid}>save</button>
            </form>
            {errors.postId && <div>{errors.postId.message}</div>}
            {errors.name && <div>{errors.name.message}</div>}
            {errors.email && <div>{errors.email.message}</div>}
            {errors.body && <div>{errors.body.message}</div>}
        </>
    );
};

export {CommentForm};