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
const addBookButton = document.querySelector(".calltoform")
let form = document.querySelector("form");
let formDiv = document.querySelector(".formcontainer");
const myLibrary = [book1, book2, book3, book1, book2, book3,book1, book2, book3, book1, book2, book3];



function showBookForm(){
    if (formDiv.style.display === "none"){
        formDiv.style.display = "block";
    } else {
        formDiv.style.display = "none";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const addBookTitle = document.querySelector("#title");
    const addBookAuthor = document.querySelector("#author");
    const addBookPages = document.querySelector("#pages");
    const addBookGenre = document.querySelector("#genre");

    addBookToLibrary(addBookTitle.value, addBookAuthor.value, addBookGenre.value, addBookPages.value);
    loadBooks();
    form.reset()
})


// the constructor
function Book(title, author, genre, pages) {
    this.title = title,
        this.author = author,
        this.genre = genre,
        this.pages = pages,
        this.id = crypto.randomUUID();
}

// Takes params to make a new book using the book constructor
function addBookToLibrary(title, author, genre, pages) {


    myLibrary.push(new Book(title, author, genre, pages));

}


// Gets called on body load
function loadBooks() {
    myLibrary.map((book) => {

        // Creates the book card
        const createBookCard = document.createElement("div");
        createBookCard.className = "bookcard";
        bookDisplay.appendChild(createBookCard);
        
        // populates the informatino onto each card.

        const createTitle = document.createElement("h3")
        createTitle.innerHTML= book.title
        const createAuthor = document.createElement("p")
        createAuthor.innerHTML= book.author
        const createpages = document.createElement("p")
        createpages.innerHTML= book.pages
        const createGenre = document.createElement("p")
        createGenre.innerHTML= book.genre

        createBookCard.appendChild(createTitle)
        createBookCard.appendChild(createAuthor)
        createBookCard.appendChild(createpages)
        createBookCard.appendChild(createGenre)

    })
}


