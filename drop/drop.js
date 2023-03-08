window.addEventListener('dragstart', function(event) {
    if (event.target.classList.contains('book-card-item')) {
        let dragItem = event.target;
        console.log(dragItem)
        dragItem.classList.add('book-dragging');
    }
    if (event.target.classList.contains('book-image')) {
        let dragItem = event.target.parentElement;
        console.log(dragItem)
        dragItem.classList.add('book-dragging');
    }
});

window.addEventListener('dragend', function(event) {
    if (event.target.classList.contains('book-card-item')) {
        let dragItem = event.target;
        dragItem.classList.remove('book-dragging');
    }
    if (event.target.classList.contains('book-image')) {
        let dragItem = event.target.parentElement;
        dragItem.classList.remove('book-dragging');
    }
});

window.addEventListener('dragover', function(event) {
        event.preventDefault();
});

window.addEventListener('drop', function(event) {
    if (event.target.classList.contains('basket-wrapper') ||
        event.target.classList.contains('basket-items')) {
        renderCards(event)
    }
});
