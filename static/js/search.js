document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('input[type="text"]');
    const gameCards = document.querySelectorAll('.game-card');

    if (!searchInput || !gameCards.length) return;

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();

        gameCards.forEach(card => {
            const title = card.querySelector('.font-medium').textContent.toLowerCase();
            const publisher = card.querySelector('.text-gray-400').textContent.toLowerCase();
            const isMatch = title.includes(searchTerm) || publisher.includes(searchTerm);

            // Use CSS classes for visibility to maintain existing styles
            if (isMatch) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});