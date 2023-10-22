const baseURL = 'https://rickandmortyapi.com/';

const characters = 'api/character';

const urls = {
    characters:{
        filterCharacters:(id:number[]):string =>`${characters}/${id}`,
        filterSingleCharacter:(id:number):string => `${characters}/${id}`
    }
}

export {baseURL, urls}