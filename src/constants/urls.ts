const baseJSON = 'https://jsonplaceholder.typicode.com';
const baseSpaceX = 'https://api.spacexdata.com/v3/';

const posts = '/posts';
const launches = '/launches/';

const urls={
    posts:{
        base:posts,
        byId:(id:number):string=> `${posts}/${id}`
    },
    launches
}

export {baseJSON,baseSpaceX, urls}