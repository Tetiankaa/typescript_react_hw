import React from 'react';
import {ISimpson} from "../../../interfaces/simpsonInterface";
import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {
    const simpsons:ISimpson[] = [
        {
            id: 1,
            name: "Homer Simpson",
            gender: "male",
            img: "https://static.miraheze.org/loathsomecharacterswiki/thumb/7/70/Screenshot_2021-03-23_7.33.58_AM.png/300px-Screenshot_2021-03-23_7.33.58_AM.png"
        },
        {
            id: 2,
            name: "Marge Simpson",
            gender: "female",
            img: "https://static.wikia.nocookie.net/simpsons-world/images/0/0b/Marge_Simpson.png"
        },
        {
            id: 3,
            name: "Bart Simpson",
            gender: "male",
            img: "https://static.wikia.nocookie.net/simpsons/images/4/46/Bart_daredevil_Tapped_Out.png"
        },
        {
            id: 4,
            name: "Lisa Simpson",
            gender: "female",
            img: "https://static.wikia.nocookie.net/simpsons/images/0/06/Snow_Day_Lisa.png"
        },
        {
            id: 5,
            name: "Maggie Simpson",
            gender: "female",
            img: "https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png"
        }
    ]
    return (
        <div>
            {simpsons.map(simpson=><Simpson key={simpson.id} simpson={simpson}/>)}
        </div>
    );
};

export {Simpsons};