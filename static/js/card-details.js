import gameData from './game-data.js';

function createDetailedCard(gameId) {
    const game = gameData[gameId];
    if (!game) return '';

    return `
        <div class="game-details bg-[#252547] rounded-lg p-4 mt-4 space-y-4 hidden">
            <div class="description">
                <h4 class="text-white font-medium mb-2">Deskripsi</h4>
                <p class="text-gray-400 text-sm">${game.description}</p>
            </div>
            
            <div class="features">
                <h4 class="text-white font-medium mb-2">Fitur Utama</h4>
                <ul class="text-gray-400 text-sm space-y-1">
                    ${game.features.map(feature => `<li>• ${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="requirements">
                <h4 class="text-white font-medium mb-2">Persyaratan Sistem</h4>
                <div class="text-gray-400 text-sm space-y-1">
                    <p>OS: ${game.requirements.os}</p>
                    <p>RAM: ${game.requirements.ram}</p>
                    <p>Storage: ${game.requirements.storage}</p>
                </div>
            </div>
            
            <div class="top-up-options">
                <h4 class="text-white font-medium mb-2">Pilihan Top Up</h4>
                <div class="grid grid-cols-2 gap-2">
                    ${game.topUpOptions.map(option => `
                        <div class="bg-[#1a1a2e] p-2 rounded cursor-pointer hover:bg-[#2a2a4e] transition-colors" onclick="window.location.href = '/pembayaran.html?game=${gameId}'">
                            <div class="text-white text-sm">${option.amount}</div>
                            <div class="text-orange-500 text-sm">${option.price}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function initializeDetailedCards() {
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
        const gameId = card.dataset.gameId;
        if (!gameId) return;

        // Add details section
        const detailsContainer = document.createElement('div');
        detailsContainer.innerHTML = createDetailedCard(gameId);
        card.querySelector('.p-4').appendChild(detailsContainer.firstElementChild);

        // Add expand/collapse button
        const expandButton = document.createElement('button');
        expandButton.className = 'text-gray-400 text-sm ml-2 hover:text-white transition-colors';
        expandButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        `;

        const titleElement = card.querySelector('.text-white.font-medium');
        titleElement.parentNode.insertBefore(expandButton, titleElement.nextSibling);

        // Toggle details
        expandButton.addEventListener('click', () => {
            const details = card.querySelector('.game-details');
            const arrow = expandButton.querySelector('svg');
            
            details.classList.toggle('hidden');
            arrow.style.transform = details.classList.contains('hidden') ? '' : 'rotate(180deg)';
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeDetailedCards);