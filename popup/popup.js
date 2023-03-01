const popupWrapper = document.createElement('div')
      popupWrapper.classList.add('popup-wrapper')
      document.body.append(popupWrapper)

window.addEventListener('click', function(event) {
    if (event.target.classList.contains('button-description')) {
        popupWrapper.classList.add('popup-open');
        CreatePopup(event);
    }
});
function CreatePopup(event) {
      let mod = event.target.parentElement.dataset.id;
      popupWrapper.innerHTML =`
<div class ='popup-item'>
       <h3 class = 'mpopup-header'>${booksCatalog[mod].title}</h3>
       <p class ='popup-text'>${booksCatalog[mod].description}</p>
       <button class="popup-close">&times<button>
</div>`
}
