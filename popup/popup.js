const popupWrapper = document.createElement('div')
      popupWrapper.classList.add('popup-close')
      document.body.append(popupWrapper)

window.addEventListener('click', function(event) {
    if (event.target.classList.contains('button-description')) {
        popupWrapper.classList.add('popup-open');
        CreatePopup(event);
        event.preventDefault()
    }
});
//open popup
function CreatePopup(event) {
    let mod = event.target.parentElement.dataset.id;
      popupWrapper.innerHTML =`
    <div class ='popup-item'>
       <h3 class = 'popup-header'>${booksCatalog[mod].title}</h3>
       <p class ='popup-text'>${booksCatalog[mod].description}</p>
       <button class="popup-button">&times<button>
    </div>`

    let closeButton = document.querySelector('.popup-button')
closeButton.addEventListener('click',closePopup)
}
window.addEventListener('click', (event) => {
    if (event.target === popupWrapper) {
      closePopup()
    }
  })

//close popup
function closePopup(event) {
    popupWrapper.classList.remove('popup-open')
    event.preventDefault()
}


