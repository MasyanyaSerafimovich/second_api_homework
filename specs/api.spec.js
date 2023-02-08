import config from "../framework/config";
import user from "../framework/services";

describe('На сайте bookstore.demoqa.com', () => {

    describe('метод POST /Account/v1/Authorized', () => {

        test('не падает с ошибкой 404', async () => {
            //авторизуемся под некорректными логином и паролем
            const res = await user.authorized(config.credentials);

            //проверяем, что статус не равен 404
            expect(res.status).not.toEqual(404);
        })

        test('не падает с ошибкой 400', async () => {
            //авторизуемся под некорректными логином и паролем
            const res = await user.authorized(config.credentials);

            //проверяем, что статус не равен 400
            expect(res.status).not.toEqual(400);
        })

        test('не падает с ошибкой 500', async () => {
            //авторизуемся под некорректными логином и паролем
            const res = await user.authorized(config.credentials);

            //проверяем, что статус не равен 500
            expect(res.status).not.toEqual(500);
        })

        test('возвращает JSON', async () => {
            //авторизуемся под некорректными логином и паролем
            const res = await user.authorized(config.credentials);

            //проверяем, что ответ имеет тип json
            expect(res).toBe.json;
        })

    })

    describe('метод DELETE /Account/v1/User', () => {

        test('не падает с ошибкой 404', async () => {
            //создаем пользователя, получаем его userId
            const createUserRes = await user.createUser(config.credentials);
            const userId = await createUserRes.UserId;

            //удаляем только что созданного пользователя
            const res = await user.deleteUser(userId);

            //проверяем, что статус не равен 400
            expect(res.status).not.toEqual(400);
        })

        test('не падает с ошибкой 500', async () => {
            //создаем пользователя, получаем его userId
            const createUserRes = await user.createUser(config.credentials);
            const userId = await createUserRes.UserId;

            //удаляем только что созданного пользователя
            const res = await user.deleteUser(userId);

            //проверяем, что статус не равен 500
            expect(res.status).not.toEqual(500);
        })

        test('удаляет пользователя', async () => {
            //создаем пользователя, получаем его userId
            const createUserRes = await user.createUser(config.credentials);
            const userId = await createUserRes.UserId;

            //удаляем только что созданного пользователя
            await user.deleteUser(userId);

            //ищем только что удаленного пользователя
            const res = await user.getUser(userId);

            //проверяем, что статус не равен 200
            expect(res.status).not.toEqual(200);
        })

    })

    describe('метод GET /Account/v1/User', () => {

        test('не падает с ошибкой 404', async () => {
            //создаем пользователя, получаем его userId
            const createUserRes = await user.createUser(config.credentials);
            const userId = await createUserRes.UserId;

            //получаем данные только что созданного пользователя
            const res = await user.getUser(userId);

            //проверяем, что статус не равен 404
            expect(res.status).not.toEqual(404);
        })

        test('не падает с ошибкой 500', async () => {
            //создаем пользователя, получаем его userId
            const createUserRes = await user.createUser(config.credentials);
            const userId = await createUserRes.UserId;

            //получаем данные только что созданного пользователя
            const res = await user.getUser(userId);

            //проверяем, что статус не равен 500
            expect(res.status).not.toEqual(500);
        })

        test('находит пользователя', async () => {
            //создаем пользователя, получаем его userId
            const createUserRes = await user.createUser(config.credentials);
            const userId = await createUserRes.UserId;

            //получаем данные только что созданного пользователя
            const res = await user.getUser(userId);

            //проверяем, что статус равен 200
            expect(res.status).toEqual(200);
        })

    })

})