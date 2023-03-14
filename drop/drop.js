/*let cardItems = document.getElementsByClassName('book-card-item');
let bookImages = document.getElementsByClassName('book-image');


for(let i = 0; i < bookImages.length; i++){
    bookImages[i].addEventListener('dragstart', function(event) {
        event.stopImmediatePropagation();
        event.target.parentElement.classList.add('book-dragging');
        event.dataTransfer.setData('text', event.target.parentElement.dataset.id); // set card id
    });
    bookImages[i].addEventListener('dragend', function(event) {
        event.target.parentElement.classList.remove('book-dragging');
    });
}*/

window.addEventListener('dragstart', (event) => {
    if (event.target.classList.contains('book-card-item')) {
        event.target.classList.add('book-dragging');
        event.dataTransfer.setData('text', event.target.dataset.id); // set card id
    } else if (event.target.classList.contains('book-image')) {
        event.target.parentElement.classList.add('book-dragging');
        event.dataTransfer.setData('text', event.target.parentElement.dataset.id); // set card id
    }
});

window.addEventListener('dragend', (event) => {
    if (event.target.classList.contains('book-card-item')) {
        event.target.classList.remove('book-dragging');
    } else if (event.target.classList.contains('book-image')) {
        event.target.parentElement.classList.remove('book-dragging');
    }
});

basketWrapper.addEventListener('dragover', (event) => {
    event.preventDefault();
});

basketWrapper.addEventListener('drop', (event) => {
    //event.preventDefault();
    //event.stopPropagation();
    renderCards(event)
});
