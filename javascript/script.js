// Elementos do DOM
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const animeItems = document.querySelectorAll('.list, .secund');
const backToTopButton = document.querySelector('.back-to-top');

// Função de pesquisa
function searchAnimes() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        // Se a pesquisa estiver vazia, mostrar todos os animes
        animeItems.forEach(item => {
            item.style.display = 'flex';
        });
        return;
    }
    
    // Filtrar os animes com base no termo de pesquisa
    animeItems.forEach(item => {
        const animeTitle = item.querySelector('.anime-title');
        if (animeTitle) {
            const title = animeTitle.textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        }
    });
}

// Event listeners
searchButton.addEventListener('click', searchAnimes);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchAnimes();
    }
});

// Voltar ao topo
backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Carrossel de imagens para o banner (opcional)
const bannerImages = [
    '../imagens/FEzQxqZXwAMnGia.jpg',
    '../imagens/bleach-color-page_8vuh.jpg',
    '../imagens/Dandadan-Segunda-Temporada-Okarun-Momo-Ayase-Vovo-Turbo-CAPA.webp',
    '../imagens/kaiju-no-8.webp',

];

let currentBannerIndex = 0;
const banner = document.querySelector('.banner');

function changeBannerImage() {
    currentBannerIndex = (currentBannerIndex + 1) % bannerImages.length;
    const newImageUrl = bannerImages[currentBannerIndex];
    banner.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${newImageUrl}')`;
}

// Mudar a imagem do banner a cada 3 segundos
setInterval(changeBannerImage, 3000);

// Lazy loading para imagens
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.src; // Carrega a imagem
                    imageObserver.unobserve(image);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback para navegadores que não suportam IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.src;
        });
    }
});