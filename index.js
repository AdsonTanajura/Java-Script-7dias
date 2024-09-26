const createBook = ({title, author, pages}) => {
    const book = {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
        bookChapters: {
            chap1: 'Fundamentals',
            chap2: '1st law',
        },
        printBook: () => {
            console.log('Printting....')
        }
    };
    return book;
}

const book1 = createBook({author: 'Adson', pages: 30, title: 'The lest Year'});

console.log(book1)