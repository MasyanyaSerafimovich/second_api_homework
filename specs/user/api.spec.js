import supertest from "supertest";

import config from "../config";
import user from "../helper/user";

describe('В разделе Authorization and authentication', () => {
    describe('Метод POST /api/v1/login', () => {

        test('Существует', async () => {
            const res = await user.login(config.credantiols_valid);

            expect(res.status).not.toEqual(404);
        })

        test('(200) Получает токен при введении правильных логина и пароля', async () => {
            const res = await user.login(config.credantiols_valid);

            expect(res.status).toEqual(200);
            expect(typeof res.body.accessToken).toEqual('string')
        })

        test('(403) Авторизация должна возвращать статус с кодом ошибки если логин неверный', async () => {
            const res = await user.login(config.credantiols_invalid_username);

    
            expect(res.status).toEqual(403);
            expect(res.body.message).toEqual("Неверный логин или пароль")
        })

        test('(403) Авторизация должна возвращать статус с кодом ошибки если пароль неверный', async () => {
            const res = await user.login(config.credantiols_invalid_password);


            expect(res.status).toEqual(403);
            expect(res.body.message).toEqual("Неверный логин или пароль")
        })

    })

})