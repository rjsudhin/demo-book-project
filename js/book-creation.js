const form = document.querySelector('form')
const bookInputTitle = document.querySelector('#user-book-name')
const bookInputAuthor = document.querySelector('#user-book-author')
const bookInputPages = document.querySelector('#user-book-page')
const saveBtn = document.querySelector('.save-button')

const bookContainer = document.querySelector('#book-container')

// Book Constructor
function Book(title, author, page) {
  if (!new.target) {
    throw Error('please add new keyword to call the constructor')
  } else {
    this.title = title
    this.author = author
    this.page = page
  }
}

Book.prototype.info = function() {
  console.log(`${this.title} writed ${this.author} with ${this.page} pages`)

}

// save button clicks
saveBtn.addEventListener('click', (e) => {
  console.log('button clicked')
  let inputResult = checkingInputFields()
  if (inputResult) {
    creatingNewBook()
  }
})

// creating Book 
function creatingNewBook() {
  let obj = new Book(bookInputTitle.value, bookInputAuthor.value, bookInputPages.value)
  console.log(obj)
  const book = document.createElement('div')
  let randomBookCode = gettingRandomNumber()
  book.classList.add('book')
  book.innerHTML = `
    <h3>${obj.title}</h3>
    <p>${obj.author}</p>
    <p> Total Pages : ${obj.page}</p>
    <p>Book Shelf code : ${randomBookCode}</p>
  `

  const objString = JSON.stringify(obj)
  localStorage.setItem(randomBookCode, objString)
  bookContainer.appendChild(book)
  bookInputTitle.value = ''
  bookInputAuthor.value = ''
  bookInputPages.value = ''
}


// checking the input fields are empty or not
function checkingInputFields() {
  let checked = []
  let fields = [bookInputTitle, bookInputAuthor, bookInputPages]
  fields.forEach(input => {
    if (input.value != '') {
      checked.push(input)
    }
  })
  if (checked.length >= 2) {
    return true
  } else {
    return false
  }
}

// getting a random number
function gettingRandomNumber() {
  return Math.random()
}



// form submission disable by default
form.addEventListener('submit', (e) => {
  e.preventDefault()
})