// Header
const header = document.createElement('header')
header.classList.add('header-style')
document.body.appendChild(header)

const image = document.createElement('img')
image.src = '../assets/icons/header.png'
image.classList.add('header-image')
header.append(image);

const bookstore = document.createElement('div')
bookstore.innerText = "The Book Store"
bookstore.classList.add('header-bookstore')
header.append(bookstore);

const search = document.createElement('div')
search.classList.add('header-search')
header.append(search)

const contacts = document.createElement('h3')
contacts.innerText = 'Contacts'
contacts.classList.add('contacts-link')
header.append(contacts)

const delivery = document.createElement('h3')
delivery.innerText = 'Delivery'
delivery.classList.add('delivery-link')
header.append(delivery)

const cart = document.createElement('img')
cart.src = '../assets/icons/add-to-basket.png'
cart.classList.add('cart-link')
header.append(cart)

const inputSearch = document.createElement('input')
inputSearch.placeholder = "    Search ..."
inputSearch.classList.add('input-search')
search.append(inputSearch)

const buttonSearch = document.createElement('button')
buttonSearch.classList.add('header-button-search')
search.append(buttonSearch)

// main

document.querySelector('body')
const mainWrapper = document.createElement('div')
mainWrapper.classList.add('main-wrapper')
document.body.append(mainWrapper)

const catalog = document.createElement('div')
catalog.classList.add('catalog')
mainWrapper.append(catalog)


const bookCards = document.createElement('ul')
bookCards.classList.add('bookCards-style')
catalog.append(bookCards)

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
        bookCardItem.setAttribute('data-id', item.id); // assigne book id to "li" element
        bookCards.append(bookCardItem);

        const bookImage = document.createElement('img');
        bookImage.classList.add('book-image');
        bookImage.src = item.imageLink;
        bookImage.alt = " "
        bookCardItem.append(bookImage);

        const underline = document.createElement('hr')
        underline.classList.add('book-underline');
        bookCardItem.append(underline);

        const bookAuthor = document.createElement('h4');
        bookAuthor.classList.add('book-autor');
        bookAuthor.innerText = item.author;
        bookCardItem.append(bookAuthor);

        const bookTitle = document.createElement('h3');
        bookTitle.classList.add('book-title');
        bookTitle.innerText = item.title;
        bookCardItem.append(bookTitle);

        const buttonDescription = document.createElement('button')
        buttonDescription.classList.add('button-description')
        buttonDescription.innerText = 'Show more'
        bookCardItem.append(buttonDescription)

        const bookPrice = document.createElement('h4')
        bookPrice.classList.add('book-price')
        bookPrice.innerText = `Price: ${item.price}$`
        bookCardItem.append(bookPrice)

        const buttonAddToBasket = document.createElement('button')
        buttonAddToBasket.classList.add('button-add-to-basket')
        buttonAddToBasket.innerText = 'Add to basket'
        bookCardItem.append(buttonAddToBasket)
    })
}

