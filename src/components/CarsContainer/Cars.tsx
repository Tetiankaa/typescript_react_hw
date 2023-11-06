import React, {useEffect, useState} from 'react';
import {ICar} from "../../interfaces";
import {carService} from "../../services";
import {useSearchParams} from "react-router-dom";
import {INextPrev} from "../../interfaces/nextPrevInterface";
import {Car} from "./Car";

const Cars = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    const [prevNext, setPrevNext] = useState<INextPrev>({prev:null, next:null});

    const [query, setQuery] = useSearchParams({page:"1"});
    const page:string = query.get('page') || '1';

    useEffect(() => {
        carService.getAll(page).then(({data})=>{
            setCars(data.items);
            setPrevNext({prev: data.prev, next: data.next});
        })
    }, [page]);

    const prev = () =>{
        setQuery(prev=>{
            prev.set('page', `${+page - 1}`)
            return prev
        })
    }
    const next = () =>{
        setQuery(prev=>{
            prev.set('page', `${+page + 1}`)
            return prev
        })
    }

    return (
        <>
            <div>
                {cars.map(car => <Car key={car.id} car={car}/>)}
            </div>

            <div>
                <button disabled={!prevNext.prev} onClick={prev}>Prev</button>
                <button disabled={!prevNext.next} onClick={next}>Next</button>
            </div>
        </>
    );
};

export {Cars};