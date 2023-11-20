const baseURL = 'https://rickandmortyapi.com/api';

const episodes = '/episode';
const characters = '/character';

const urls = {
    episodes,
    characters:{
        byIds:(ids:string):string=>`${characters}/${ids}`
    }
}

export {urls, baseURL}