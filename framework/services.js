import supertest from "supertest";
import config from "../framework/config";

const {url} = config;

//контроллер user
const user = {

    authorized: (payload) => {
        return supertest(url)
            .post('/Account/v1/Authorized')
            .set('Accept', 'application/json')
            .send(payload)
    },

    createUser: (payload) => {
        return supertest(url)
            .post('/Account/v1/User')
            .set('Accept', 'application/json')
            .send(payload)
    },

    deleteUser: (payload) => {
        return supertest(url)
            .delete('/Account/v1/User')
            .set('Accept', 'application/json')
            .send(payload)
    },

    getUser: (payload) => {
        return supertest(url)
            .get('/Account/v1/User')
            .set('Accept', 'application/json')
            .send(payload)
    }

}


export default user