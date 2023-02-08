import config from "../framework/config";
import book from "../framework/services";

describe('На сайте bookstore.demoqa.com', () => {

    describe('метод POST /BookStore/v1/Books', () => {

        test('не падает с ошибкой 404', async () => {
            //создаем книгу
            const res = await book.createBook(config.createBookData);

            //проверяем, что статус не равен 404
            expect(res.status).not.toEqual(404);

            //удаляем созданную книгу
            await book.deleteBook(config.deleteBookData);

        })

    })

})