const config = {
    //базовый url
    url: 'https://bookstore.demoqa.com/',

    //isbn тестовой книги
    isbn: "978-2-266-11156-0",

    //данные для входа пользователем
    credentials: {
        username: 'Yakubovich666',
        password: 'Aa123456789!'
    },

    //данные для создания книги
    createBookData: {
        userId:"eccee50f-0510-44aa-8eb0-18bca8a1b647",
        collectionOfIsbns: [
            {
              isbn: "978-2-266-11156-0"
            }
        ]
    },

    //данные для удаления книги
    deleteBookData: {
        isbn: "978-2-266-11156-0",
        userId:"eccee50f-0510-44aa-8eb0-18bca8a1b647"
    },

    /**
    * данные для параметризованного теста
    *
    * содержит три массива (для тестов трех isbn), состоящих из двух объектов:
    *    1. первый является payoald для метода create
    *    2. второй является payload для метода delete, где isbn тот же, что и в соответсвующем create payload
    */
    parametrizedTestData: [
        [
            {
                userId:"eccee50f-0510-44aa-8eb0-18bca8a1b647",
                collectionOfIsbns: [
                    {
                      isbn: "978-2-266-11156-0"
                    }
                ]
            },
            {
                isbn: "978-2-266-11156-0",
                userId:"eccee50f-0510-44aa-8eb0-18bca8a1b647"
            }
        ],
        [
            {
                userId:"eccee50f-0510-44aa-8eb0-18bca8a1b647",
                collectionOfIsbns: [
                    {
                      isbn: "978-5-699-12014-7"
                    }
                ]
            },
            {
                isbn: "978-5-699-12014-7",
                userId:"eccee50f-0510-44aa-8eb0-18bca8a1b647"
            }
        ],
        [
            {
                userId:"eccee50f-0510-44aa-8eb0-18bca8a1b647",
                collectionOfIsbns: [
                    {
                      isbn: "978-5-270-00101-8"
                    }
                ]
            },
            {
                isbn: "978-5-270-00101-8",
                userId:"eccee50f-0510-44aa-8eb0-18bca8a1b647"
            }
        ]
    ]

}

export default config