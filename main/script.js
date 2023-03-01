// Header
document.querySelector('body')

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
cart.src = '../assets/icons/image 4.png'
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

setTimeout(() => {
    let mod = document.querySelectorAll('.book-card-item')
    console.log(mod)
}, 3000);

/*let mod = document.querySelector('.book-card-item')

mod.addEventListener('click',function(event) {
    if (event.target.classList.contains('button-description')) {
        showModal
    }
})
function showModal(){
    const popupWrapper = document.createElement('div')
    popupWrapper.classList.add('popup-wrapper')
    document.body.append(popupWrapper)

const popupItem = document.createElement('div')
    popupItem.classList.add('popup-item')
    popupWrapper.append(popupItem)

const popupHeader = document.createElement('h3')
    popupHeader.classList.add('popup-header')
    //popupHeader.innerText = item.title;
    popupHeader.innerText = 'booksCatalog[item].title'
    popupItem.append(popupHeader)

const popupText = document.createElement('p')
    popupText.classList.add('popup-text')
   //popupText.innerText = item.description;
    popupText.innerText =
    popupItem.append(popupText)

const popupButton = document.createElement('button')
    popupButton.classList.add('popup-button')
    popupButton.innerText = 'Close'
    popupItem.append(popupButton)

}
setTimeout(() => {
    console.log(booksCatalog)
}, 3000);*/
