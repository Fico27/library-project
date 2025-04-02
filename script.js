// import { showTitleError } from "./formValidator";

const book1 = {
  title: "The Name of the Wind",
  author: "Patrick RothFuss",
  genre: "Fantasy",
  pages: 929,
  id: crypto.randomUUID(),
};

const book2 = {
  title: "Doors of Stone",
  author: "Patrick RothFuss",
  genre: "Fantasy",
  pages: 1000,
  id: crypto.randomUUID(),
};

const book3 = {
  title: "A Silent Regard to Slow Things",
  author: "Patrick RothFuss",
  genre: "Fantasy",
  pages: 229,
  id: crypto.randomUUID(),
};

// Test to create new bookcard ---- Works
const bookDisplay = document.querySelector(".bookdisplay");
const addBookButton = document.querySelector(".calltoform");
let form = document.querySelector("form");
let formDiv = document.querySelector(".formcontainer");
let myLibrary = [book1, book2, book3];

function resetDisplay() {
  while (bookDisplay.firstChild) {
    bookDisplay.removeChild(bookDisplay.lastChild);
  }
}

function showBookForm() {
  if (formDiv.style.display === "none") {
    formDiv.style.display = "block";
    addBookButton.innerHTML = "Close Form";
  } else {
    formDiv.style.display = "none";
    addBookButton.innerHTML = "Add Book";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const addBookTitle = document.querySelector("#title");
  const addBookAuthor = document.querySelector("#author");
  const addBookPages = document.querySelector("#pages");
  const addBookGenre = document.querySelector("#genre");

  // if the email field is invalid
  if (!titleInput.validity.valid) {
    // display an appropriate error message
    showTitleError();
    // prevent form submission
    return;
  }
  if (!authorInput.validity.valid) {
    // display an appropriate error message
    showAuthorError();
    // prevent form submission
    return;
  }
  if (!pagesInput.validity.valid) {
    // display an appropriate error message
    showPagesError();
    // prevent form submission
    return;
  }

  addBookToLibrary(
    addBookTitle.value,
    addBookAuthor.value,
    addBookGenre.value,
    addBookPages.value
  );

  resetDisplay();
  loadBooks();
  form.reset();
});

// the constructor

class Book {
  constructor(title, author, genre, pages) {
    (this.title = title),
      (this.author = author),
      (this.genre = genre),
      (this.pages = pages),
      (this.id = crypto.randomUUID());
  }
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

    const createTitle = document.createElement("h3");
    createTitle.innerHTML = `<strong>Title:</strong> ${book.title}`;
    const createAuthor = document.createElement("p");
    createAuthor.innerHTML = `<strong>Author:</strong> ${book.author}`;
    const createpages = document.createElement("p");
    createpages.innerHTML = `<strong>Pages:</strong> ${book.pages}`;
    const createGenre = document.createElement("p");
    createGenre.innerHTML = `<strong>Genre:</strong> ${book.genre}`;
    const createHaveRead = document.createElement("p");
    createHaveRead.innerHTML = `<strong>Have read?:</strong> Not Yet!`;

    //buttons
    const createReadButton = document.createElement("button");
    createReadButton.innerHTML = "Toggle Read Status";
    createReadButton.className = "haveReadButton";
    const createRemoveButton = document.createElement("button");
    createRemoveButton.innerHTML = "Remove";
    createRemoveButton.className = "removeButton";

    //Removes each book
    createRemoveButton.addEventListener("click", () => {
      myLibrary = myLibrary.filter((b) => b.id !== book.id);
      bookDisplay.removeChild(createBookCard);
    });

    // Toogles the have read paragraph
    createReadButton.addEventListener("click", () => {
      if (
        createHaveRead.innerHTML === `<strong>Have read?:</strong> Not Yet!`
      ) {
        createHaveRead.innerHTML = `<strong>Have read?:</strong> Yes!`;
      } else {
        createHaveRead.innerHTML = `<strong>Have read?:</strong> Not Yet!`;
      }
    });

    createBookCard.appendChild(createTitle);
    createBookCard.appendChild(createAuthor);
    createBookCard.appendChild(createpages);
    createBookCard.appendChild(createGenre);
    createBookCard.appendChild(createHaveRead);
    createBookCard.appendChild(createReadButton);
    createBookCard.appendChild(createRemoveButton);
  });
}

const theform = document.querySelector("#the-form");

const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const genreInput = document.querySelector("#genre");

//Spans
const titleInput = document.querySelector("#title");
const titleError = document.querySelector("#titleError");
const authorError = document.querySelector("#authorError");
const pagesError = document.querySelector("#pagesError");

titleInput.addEventListener("input", (event) => {
  if (titleInput.validity.valid) {
    titleError.textContent = "";
    titleError.className = "error";
  } else {
    showTitleError();
  }
});

authorInput.addEventListener("input", (event) => {
  if (authorInput.validity.valid) {
    authorError.textContent = "";
    authorError.className = "error";
  } else {
    showAuthorError();
  }
});

pagesInput.addEventListener("input", (event) => {
  if (pagesInput.validity.valid) {
    pagesError.textContent = "";
    pagesError.className = "error";
  } else {
    showPagesError();
  }
});

// theform.addEventListener("submit", (event) => {

// });

// Need to make title span for error
// Need to make Author span for error
// Pages span for error

function showTitleError() {
  if (titleInput.validity.valueMissing) {
    titleError.textContent = "You need to enter an book Title!";
  } else if (titleInput.validity.tooShort) {
    titleError.textContent = "Title name is too short!";
  } else if (titleInput.validity.tooLong) {
    titleError.textContent = "Title name is too long!";
  }
  titleError.className = "error active";
}

function showAuthorError() {
  if (authorInput.validity.valueMissing) {
    authorError.textContent = "You need to enter an Author Name!";
  } else if (authorInput.validity.tooShort) {
    authorError.textContent = "Author name is too short!";
  } else if (titleInput.validity.tooLong) {
    authorError.textContent = "Author name is too long!";
  }
  authorError.className = "error active";
}

function showPagesError() {
  if (pagesInput.validity.valueMissing) {
    pagesError.textContent = "You need to enter a page amount!";
  } else if (pagesInput.validity.rangeUnderflow) {
    pagesError.textContent = "Is this even a book?";
  } else if (pagesInput.validity.rangeOverflow) {
    pagesError.textContent = "Wayyy too many pages";
  }
  pagesError.className = "error active";
}
