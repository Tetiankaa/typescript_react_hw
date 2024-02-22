const baseURL = 'http://owu.linkpc.net/carsAPI/v2';

const auth = '/auth';
const users = '/users';
const cars = '/cars';

const urls = {
    cars:{
        base:cars,
        byId:(id:number):string=>`${cars}/${id}`,
        photo:(id:number):string=>`${cars}/${id}/photo`
    },
    auth:{
        register:users,
        login:auth,
        info:`${auth}/me`,
        refresh:`${auth}/refresh`
    }
}

export {
    baseURL, urls
}
