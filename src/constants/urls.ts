const baseURLJson = 'https://jsonplaceholder.typicode.com';
const baseURLCars = 'http://owu.linkpc.net/carsAPI/v1';

const users = '/users';
const comments = '/comments';
const cars = '/cars';

const urls={
    users,
    comments,
    cars:{
        base:cars,
        byId:(id:number):string => `${cars}/${id}`
    }
}

export {baseURLJson, urls,baseURLCars}