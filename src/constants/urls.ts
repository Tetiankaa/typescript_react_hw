const baseURL = 'https://rickandmortyapi.com/api';

const episode = '/episode';
const character = '/character';

const urls = {
    episode,
    character:{
        byIds:(ids:string):string=>`${character}/${ids}`
    }
}

export {baseURL, urls}