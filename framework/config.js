const config = {
    //базовый url
    url: 'https://bookstore.demoqa.com/',

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
      }

}

export default config