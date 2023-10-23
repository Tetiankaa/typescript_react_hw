import React, {useEffect, useState} from 'react';
import {ILaunch} from "../../../interfaces/launchInterface";
import {launchesService} from "../../../services/launchesService";
import {Launch} from "../Launch/Launch";

const Launches = () => {
    const [launches, setLaunches] = useState<ILaunch[]>([]);

    useEffect(()=>{
        launchesService.getAll().then(({data})=>setLaunches(data.filter(launch=>launch.launch_year !== "2020")))
    },[])
    return (
        <div>
            {launches.map(launch=><Launch key={launch.flight_number} launch={launch}/>)}
        </div>
    );
};

export {Launches};