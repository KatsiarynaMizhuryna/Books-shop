//create basket form
const basketWrapper = document.createElement('div')
basketWrapper.classList.add('basket-wrapper')
mainWrapper.append(basketWrapper)

const basketBody = document.createElement('div')
basketBody.classList.add('basket-body')
basketWrapper.append(basketBody)
basketBody.innerHTML = `
        <div class="basket-header">
            <img class="basket-image" src="../assets/icons/shopping-bag.png" alt="add-to-basket" draggable="false">
            <h1 class="total-items">Your basket: (0 items)</h1>
            <br>
            <h2 class="total">Total: 0 $</h2>
        </div>
        <hr>
        <div class="basket-items">
        </div>
            <div class="basket-footer">
                <a href="../order/delivery.html" class="checkout-button" draggable="false">Checkout</a>
            </div>
        </div>
    `
const basketItems = document.querySelector('.basket-items')
const basketTotal = document.querySelector('.basket-footer')
//Add to basket
window.addEventListener('click',function(event){
    if (event.target.classList.contains('button-add-to-basket')) {
        renderCards (event)
    }
    //event.preventDefault() // TODO: check if required
})

function renderCards(event) {
    if (event.type === 'click') {
        data = event.target.closest('.book-card-item');
    } else if (event.type === 'drop') {
        data = document.querySelector(`[data-id="${event.dataTransfer.getData('text')}"]`) //data = document.querySelector('.book-dragging');
    }
    const bookInfo = {
        id: data.dataset.id,
        imgSrc: data.querySelector('.book-image').getAttribute('src'),
        author: data.querySelector('.book-autor').innerText,
        title: data.querySelector('.book-title').innerText,
        price: data.querySelector('.book-price').innerText
    }
    //render items in basket
    const bookItemHTML = `
    <div class="basket-contains" data-id = "${bookInfo.id}">
        <div><img class="add-image-to-basket" src="${bookInfo.imgSrc}" alt=" " draggable="false"></div>
        <div class="basket-content">
            <div>
                <h3 class="add-name-to-basket">${bookInfo.author}</h3>
                <p class="add-name-to-basket">${bookInfo.title}</p>
            </div>
            <div>
                <p class="add-price-to-basket">${bookInfo.price}</p>
            </div>
            <div class="basket-counter">1</div>
            <div><button class="remove-book">&times</button></div>
            </div>
    </div>
     `
     //check the same goods
    const bookInBasket = basketItems.querySelector(`[data-id="${bookInfo.id}"]`)
    if (bookInBasket) {
        const counter = bookInBasket.querySelector('.basket-counter')
        counter.innerText = parseInt(++counter.innerText)
    }
    else {
        basketItems.insertAdjacentHTML("beforeend",bookItemHTML)
    }
    toggleBasketStatus()
    calkBasketPrice()
}

//remove goods
basketItems.addEventListener('click', function (event) {
    if (event.target.closest('.remove-book')) {
        event.target.closest('.basket-contains').remove()
        toggleBasketStatus()
        calkBasketPrice()
    }
})

function toggleBasketStatus () {
    const basketItems = document.querySelector('.basket-items')
    const basketEmptyBadge = document.querySelector('.checkout-button');
    //const deliveryForm = document.querySelector('#order-form');
    if (basketItems.children.length > 0) {
        basketEmptyBadge.classList.add('checkout-button-active')
    }else {
        basketEmptyBadge.classList.remove('checkout-button-active')
    }
}

// adding sum

function calkBasketPrice() {
    const basketContain = document.querySelectorAll('.basket-contains')
    const totalHeader = document.querySelector('.total')
    const totalItemsHeader = document.querySelector('.total-items')
    let totalPrice = 0
    let totalAmount = 0

    basketContain.forEach(item => {
        const priceEl = item.querySelector('.add-price-to-basket').innerText
        const amountEl = item.querySelector('.basket-counter').innerText
        const currentPrice = parseInt(priceEl.match(/\d+/)) * parseInt(amountEl)
        totalPrice += currentPrice
        totalAmount += parseInt(amountEl)

    });
    totalHeader.innerText = `Total: ${totalPrice} $`
    totalItemsHeader.innerText = `Your basket: (${totalAmount} items)`
}
