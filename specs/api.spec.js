import config from "../framework/config";
import user from "../framework/services";

describe('На сайте bookstore.demoqa.com', () => {

    describe('метод POST /Account/v1/Authorized', () => {

        test('существует', async () => {
            //авторизуемся под некорректными логином и паролем
            const res = await user.authorized(config.credentials);
            expect(res.status).not.toEqual(400);
        })

    })

    describe('метод DELETE /Account/v1/User', () => {

        test('существует', async () => {

            //создаем пользователя, получаем его userId
            const createUserRes = await user.createUser(config.credentials);
            const userId = await createUserRes.UserId;

            //удаляем только что созданного пользователя
            const res = await user.deleteUser(userId);
            expect(res.status).not.toEqual(404);
        })

    })

    describe('метод GET /Account/v1/User', () => {

        test('существует', async () => {

            //создаем пользователя, получаем его userId
            const createUserRes = await user.createUser(config.credentials);
            const userId = await createUserRes.UserId;

            //получаем данные только что созданного пользователя
            const res = await user.deleteUser(userId);
            expect(res.status).not.toEqual(404);
        })

    })

})