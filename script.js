
const myLibrary = [];



// the constructor
function Book(title, author, genre){
    this.title = title;
    this.author= author;
    this.genre = genre
    this.id = crypto.randomUUID()
}

// Takes params to make a new book using the book constructor
function addBookToLibrary(title, author, genre) {

    
     myLibrary.push(new Book(title, author, genre));

}