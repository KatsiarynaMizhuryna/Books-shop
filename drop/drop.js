window.addEventListener('dragstart', function(event) {
    if (event.target.classList.contains('book-card-item')) {
        event.target.classList.add('book-dragging');
    }
    if (event.target.classList.contains('book-image')) {
        event.target.parentElement.classList.add('book-dragging');
    }
});

window.addEventListener('dragend', function(event) {
    if (event.target.classList.contains('book-card-item')) {
        event.target.classList.remove('book-dragging');
    }
    if (event.target.classList.contains('book-image')) {
        event.target.parentElement.classList.remove('book-dragging');
    }
});

window.addEventListener('dragover', function(event) {
        event.preventDefault();
});

window.addEventListener('drop', function(event) {
    if (event.target.classList.contains('basket-wrapper') ||
        event.target.parentElement.classList.contains('basket-contains')) {
        renderCards(event)
    }
});
