// Filter listings interactively
const form = document.querySelector('.filter-form');
const listings = document.querySelectorAll('.listing-card');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const location = document.getElementById('location').value.toLowerCase();
    const priceInput = document.getElementById('price').value.replace(/[^\d]/g, '');
    const price = priceInput ? parseInt(priceInput) : null;
    const type = document.getElementById('type').value.toLowerCase();

    listings.forEach(card => {
        let show = true;

        // Location filter
        if (location && !card.querySelector('.location').textContent.toLowerCase().includes(location)) {
            show = false;
        }

        // Price filter
        if (price) {
            const cardPrice = card.querySelector('.price').textContent.replace(/[^\d]/g, '');
            if (parseInt(cardPrice) > price) show = false;
        }

        // Type filter (Fixed to look at the .type class)
        if (type) {
            const typeElement = card.querySelector('.type');
            const cardType = typeElement ? typeElement.textContent.toLowerCase() : "";
            if (!cardType.includes(type)) show = false;
        }

        card.style.display = show ? '' : 'none';
    });
});

// This runs as soon as the Listings page loads
window.addEventListener('DOMContentLoaded', () => {
    // 1. Check if there is a "query" in the URL (e.g., ?query=mabs)
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('query');

    if (searchQuery) {
        const term = searchQuery.toLowerCase();
        
        // 2. Loop through the cards and hide ones that don't match the query
        const allCards = document.querySelectorAll('.listing-card');
        
        allCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            // If the card text (name, location, or type) contains the search term
            if (text.includes(term)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }
});