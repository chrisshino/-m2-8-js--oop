// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
  constructor (title, genre, author, isRead=false) {
    this.title = title
    this.genre = genre
    this.author = author
    this.isRead = isRead
  }
}

book1 = new Book('Harry Potter 1', 'Fantasy', 'J.K. Rowling')
book2 = new Book('Harry Potter 1', 'Fantasy', 'J.K. Rowling', true)
book3 = new Book('Harry Potter 1', 'Fantasy', 'J.K. Rowling', false)
book4 = new Book('Harry Potter 1', 'Fantasy', 'J.K. Rowling', false)
book5 = new Book('Harry Potter 1', 'Fantasy', 'J.K. Rowling', false)


console.log(book1, book2, book3, book4, book5);
