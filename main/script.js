// Header
const header = document.createElement('header')
header.classList.add('header-style')
document.body.appendChild(header)

const image = document.createElement('img')
image.src = '../assets/icons/background-books.png'
image.classList.add('image-style')
header.append(image);

const bookstore = document.createElement('div')
bookstore.innerHTML = "The Book Store"
bookstore.classList.add('bookstore-style')
header.append(bookstore);

const search = document.createElement('div')
search.classList.add('search-style')
header.append(search)

const contacts = document.createElement('h3')
contacts.innerHTML = 'Contacts'
contacts.classList.add('contacts-style')
header.append(contacts)

const delivery = document.createElement('h3')
delivery.innerHTML = 'Delivery'
delivery.classList.add('delivery-style')
header.append(delivery)

const cart = document.createElement('img')
cart.src = '../assets/icons/image 4.png'
cart.classList.add('cart-style')
header.append(cart)

const inputSearch = document.createElement('input')
inputSearch.placeholder = "    Search ..."
inputSearch.classList.add('inputSearch-style')
search.append(inputSearch)

const buttonSearch = document.createElement('button')
buttonSearch.classList.add('buttonSearch-style')
search.append(buttonSearch)

// main

const bookCards = document.createElement('ul')
bookCards.classList.add('bookCards-style')
document.body.append(bookCards)

let booksCatalog = []

fetch("./books.json")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        booksCatalog = data.map((item, index) => {
            item.id = index;
            return item
        });
        createBookCard(booksCatalog);
    });

    function createBookCard(array) {
        array.forEach(item => {
            const bookCardItem = document.createElement('li');
            bookCardItem.classList.add('book-card-item');
            bookCardItem.draggable = true;
            bookCards.append(bookCardItem);

            const bookImage = document.createElement('img');
            bookImage.classList.add('book-image');
            bookImage.src = item.imageLink;
            bookImage.alt = " "
            bookCardItem.append(bookImage);

            const bookAuthor = document.createElement('h4');
            bookAuthor.classList.add('book-autor');
            bookAuthor.innerText = item.author;
            bookCardItem.append(bookAuthor);
            ;
            const bookTitle = document.createElement('h3');
            bookTitle.classList.add('book-title');
            bookTitle.innerText = item.title;
            bookCardItem.append(bookTitle);

            const bookPrice = document.createElement('h4')
            bookPrice.classList.add('book-price')
            bookPrice.innerText = `price: ${item.price}$`
            bookCardItem.append(bookPrice)

            const buttonDescription = document.createElement('button')
            buttonDescription.classList.add('button-description')
            buttonDescription.innerText = 'Description'
            bookCardItem.append(buttonDescription)

            
    })
}


