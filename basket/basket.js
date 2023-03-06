//create basket form
document.querySelector('body')
const basketWrapper = document.createElement('div')
basketWrapper.classList.add('basket-wrapper')
mainWrapper.append(basketWrapper)

const basketBody = document.createElement('div')
basketBody.classList.add('basket-body')
basketWrapper.append(basketBody)
basketBody.innerHTML = `
<div class="basket">
            <div class="basket-header">
                <img class="basket-image" src="../assets/icons/shopping-bag.png"" alt="add-to-basket">
                <h1 class="total-items">Your basket: (0 items)</h1>
                <br>
                <h2 class="total">Total: 0 $</h2>
                </div>
                <hr>
            <div class="basket-items">
            </div>
            <div class="basket-footer">
            <a href="/delivery form/delivery.html" class="checkout-button">Checkout</a>
            </div>
        </div>
    </div>
    `
const basketItems = document.querySelector('.basket-items')
const basketTotal = document.querySelector('.basket-footer')
//Add to basket
window.addEventListener('click',function(event){
    if (event.target.classList.contains('button-add-to-basket')) {
const card = event.target.closest('.book-card-item')
const bookInfo = {
        id: card.dataset.id,
        imgSrc: card.querySelector('.book-image').getAttribute('src'),
        author: card.querySelector('.book-autor').innerText,
        title: card.querySelector('.book-title').innerText,
        price: card.querySelector('.book-price').innerText
        }
//render items in basket
const bookItemHTML = `
<div class="basket-contains" data-id = "${bookInfo.id}">
    <div><img class="add-image-to-basket" src="${bookInfo.imgSrc}" alt=" "></div>
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
event.preventDefault()
})

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
        basketEmptyBadge.classList.add('checkout-button_active')
    }else {basketEmptyBadge.classList.remove('checkout-button_active')}
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
console.log(totalAmount)
}



   /* window.addEventListener('click', function(event) {
        if (event.target.classList.contains('button-add-to-basket')) {
            addToBasket(event);
            event.preventDefault()
        }
    })

let basketArray = []

function addToBasket(event){
    let htmlTxt = ''
    let basketItem = event.target.parentElement.dataset.id
    let basketContain = document.querySelector('.basket-items')

    basketArray.push(booksCatalog[basketItem])

    let totalPrice = basketArray.reduce((total, item) => total + item.price, 0)
    let totalItems = basketArray.length

    basketArray.forEach(item => {
        htmlTxt += `
            <div><img class="add-image-to-basket" src="${item.imageLink}" alt=" "></div>
            <div>
                <h3 class="add-name-to-basket">${item.author}</h3>
                <p class="add-name-to-basket">${item.title}</p>
            </div>
            <div>
                <p class="add-price-to-basket">${item.price}$</p>
            </div>
            <div><input type="number" class="add-quantity-to-basketbasket" id="quantity" min='1' max='100' value = '1' ></div>
            <div><button class="remove-book">&times</button></div>`
    })

    let counter = basketContain.querySelector(${item.id})
    console.log(counter)
    

    basketContain.innerHTML = htmlTxt
    let basketTotal = document.querySelector('.basket-footer')
    basketTotal.innerHTML = `
        <div class="subtotal">
            Subtotal (${totalItems} items): $${totalPrice}
        </div>`
}*/
