const book1 = {
    title: "The Name of the Wind",
    author: "Patrick RothFuss",
    genre: "Fantasy",
    pages: 929, 
    id: crypto.randomUUID()
}


const book2 = {
    title: "Doors of Stone",
    author: "Patrick RothFuss",
    genre: "Fantasy",
    pages: 1000, 
    id: crypto.randomUUID()
}


const book3 = {
    title: "A Silent Regard to Slow Things",
    author: "Patrick RothFuss",
    genre: "Fantasy",
    pages: 229, 
    id: crypto.randomUUID()
}


// Test to create new bookcard ---- Works
const bookDisplay = document.querySelector(".bookdisplay");
// const createBookCard = document.createElement("div");
// createBookCard.className = "bookcard";
// bookDisplay.appendChild(createBookCard);

const myLibrary = [book1,book2, book3];




// the constructor
function Book(title, author, genre, pages){
    this.title = title,
    this.author= author,
    this.genre = genre,
    this.pages = pages,
    this.id = crypto.randomUUID();
}

// Takes params to make a new book using the book constructor
function addBookToLibrary(title, author, genre, pages) {

    
     myLibrary.push(new Book(title, author, genre, pages));

}

function loadBooks(){
    const loadingBooks = myLibrary.map((book) => {

    })
}


