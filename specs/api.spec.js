import config from "../framework/config";
import book from "../framework/services";

describe('На сайте bookstore.demoqa.com', () => {

    describe('метод POST /BookStore/v1/Books', () => {

        test('существует', async () => {
            //создаем книгу
            const res = await book.createBook(config.createBookData);

            //проверяем, что статус не равен 404
            expect(res.status).not.toEqual(404);

            //удаляем созданную книгу
            await book.deleteBook(config.deleteBookData);

        })

        test('возвращает статус 302', async () => {
            //создаем книгу
            const res = await book.createBook(config.createBookData);

            //проверяем, что статус равен 302
            expect(res.status).toEqual(302);

            //удаляем созданную книгу
            await book.deleteBook(config.deleteBookData);

        })

        test('создает книгу с заданным ISBN', async () => {
            //создаем книгу
            await book.createBook(config.createBookData);

            //получаем созданную книгу
            const res = await book.getBook(config.isbn);

            //проверяем по isbn, что получили именно книгу с нужным isbn
            expect(res.isbn).toEqual(config.isbn);

            //удаляем созданную книгу
            await book.deleteBook(config.deleteBookData);

        })

    })

    describe('метод DELETE /BookStore/v1/Books', () => {

        test.each (config.parametrizedTestData)
            ('не возвращает ошибки 404, 500 и 400', async (createPayload, deletePayload) => {

            //создаем книгу
            await book.createBook(createPayload);

            //удаляем созданную книгу
            const res = await book.deleteBook(deletePayload);

            //проверяем, что статус не равен 404
            expect(res.status).not.toEqual(404 || 500 || 400);


        })

    })

    describe('метод GET /BookStore/v1/Book', () => {

        test('существует', async () => {
            //создаем книгу
            await book.createBook(config.createBookData);

            //получаем созданную книгу
            const res = await book.getBook(config.isbn);

            //проверяем, что статус не равен 404
            expect(res.status).not.toEqual(404);

            //удаляем созданную книгу
            await book.deleteBook(config.deleteBookData);

        })

        test('возвращает статус 302', async () => {
            //создаем книгу
            await book.createBook(config.createBookData);

            //получаем созданную книгу
            const res = await book.getBook(config.isbn);

            //проверяем, что статус равен 302
            expect(res.status).toEqual(302);

            //удаляем созданную книгу
            await book.deleteBook(config.deleteBookData);

        })

        test('получает книгу с заданным ISBN', async () => {
            //создаем книгу
            await book.createBook(config.createBookData);

            //получаем созданную книгу
            const res = await book.getBook(config.isbn);

            //проверяем по isbn, что получили именно книгу с нужным isbn
            expect(res.isbn).toEqual(config.isbn);

            //удаляем созданную книгу
            await book.deleteBook(config.deleteBookData);

        })

    })

    describe('метод PUT /BookStore/v1/Books/{ISBN}', () => {

        test('существует', async () => {
            //создаем книгу
            await book.createBook(config.createBookData);

            //меняем созданную книгу
            const res = await book.updateBook(config.updateBookData, config.isbn);

            //проверяем, что статус не равен 404
            expect(res.status).not.toEqual(404);

            //удаляем измененную книгу
            await book.deleteBook(config.deleteChangedBookData);

        })

        test('меняет ISBN книги', async () => {
            //создаем книгу
            await book.createBook(config.createBookData);

            //меняем созданную книгу
            await book.updateBook(config.updateBookData, config.isbn);

            //получаем измененную книгу
            const res = await book.getBook(config.updateBookData.isbn);

            //проверяем, что в ответ пришел отличный от изначального ISBN
            expect(res.isbn).not.toEqual(config.isbn);

            //удаляем созданную книгу
            await book.deleteBook(config.deleteBookData);

        })

    })

})