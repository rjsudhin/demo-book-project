const form = document.querySelector('form')
const bookInputTitle = document.querySelector('#user-book-name')
const bookInputAuthor = document.querySelector('#user-book-author')
const bookInputPages = document.querySelector('#user-book-page')
const saveBtn = document.querySelector('.save-button')

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
  book.classList.add('book')
  book.innerHTML = `
    <h3>${obj.title}</h3>
    <p>${obj.author}</p>
    <p>${obj.page}</p>
  `
  document.body.appendChild(book)
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



// form submission disable by default
form.addEventListener('submit', (e) => {
  e.preventDefault()
})