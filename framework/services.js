import supertest from "supertest";
import config from "../framework/config";

const {url} = config;

//контроллер book
const book = {

    createBook: (payload) => {
        return supertest(url)
            .post('/BookStore/v1/Books')
            .set('Accept', 'application/json')
            .send(payload)
    },

    deleteBook: (payload) => {
        return supertest(url)
            .delete('/BookStore/v1/Books')
            .set('Accept', 'application/json')
            .send(payload)
    },

    getBook: (payload) => {
        return supertest(url)
            .get('/BookStore/v1/Book')
            .set('Accept', 'application/json')
            .send(payload)
    }

}


export default book