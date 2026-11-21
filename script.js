
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        
        if (url) {
            window.open(url, '_blank');
        }
    });
});