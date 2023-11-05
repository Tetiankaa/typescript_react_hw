const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';
const posts = '/posts';
const comments = '/comments';

const urls = {
    users:{
        base:users,
        byId:(id:string):string=>`${users}/${id}`
    },
    posts:{
        base:posts,
        byId:(id:string):string=>`${posts}/${id}`
    },
    comments
}

export {baseURL, urls}