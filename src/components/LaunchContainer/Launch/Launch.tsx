import React, {FC} from 'react';
import {ILaunch} from "../../../interfaces/launchInterface";
interface IProps{
    launch:ILaunch
}
const Launch:FC<IProps> = ({launch}) => {
    const {launch_year,mission_name,links:{mission_patch_small}} = launch;
    return (
        <div>
            <h3>{launch_year}</h3>
           <p>{mission_name}</p>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export {Launch};