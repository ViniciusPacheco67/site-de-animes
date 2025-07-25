// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    const animeId = getAnimeIdFromUrl(); // Pega o ID do anime pela URL

    if (!animeId) return showError('ID do anime não encontrado na URL'); // Se não tiver ID, mostra erro

    const anime = getAnimeById(animeId); // Busca o anime com base no ID
    if (!anime) return showError('Anime não encontrado'); // Se não encontrar o anime, mostra erro

    renderAnime(anime); // Renderiza todas as informações do anime na tela
});

// Pega o ID do anime da URL (?id=1)
function getAnimeIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    return params.has('id') && !isNaN(id) ? id : null;
}

// Busca o anime na lista de dados com base no ID
function getAnimeById(id) {
    return animeData.find(anime => anime.id === id);
}

// Retorna os animes relacionados a partir de uma lista de IDs
function getRelatedAnimes(ids) {
    return (Array.isArray(ids) ? ids : [])
        .map(getAnimeById)
        .filter(Boolean); // Remove valores nulos ou inválidos
}

// Gera recomendações aleatórias de animes, excluindo o atual e os relacionados
function getRecommendations(currentId, limit = 6) {
    const current = getAnimeById(currentId);
    const exclude = [currentId, ...(current?.related || [])];

    return animeData
        .filter(anime => !exclude.includes(anime.id))
        .sort(() => Math.random() - 0.5) // Embaralha a lista
        .slice(0, limit); // Limita a quantidade
}

// Mostra uma mensagem de erro na tela
function showError(msg) {
    document.querySelector('.anime-details-content').innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-circle"></i>
            <h2>Erro</h2>
            <p>${msg}</p>
            <a href="index.html" class="back-button">Voltar para a página inicial</a>
        </div>
    `;
}

// Exibe as informações do anime na página
function renderAnime(anime) {
    document.title = `${anime.title} - Animes.Dragons`;
    document.getElementById('anime-title-breadcrumb').textContent = anime.title;
    document.getElementById('anime-poster').src = anime.image;
    document.getElementById('anime-poster').alt = `Poster de ${anime.title}`;

    setText('anime-title', anime.title);
    setText('anime-year', `Ano: ${anime.year}`);
    setText('anime-episodes', `Episódios: ${anime.episodes?.length || 0}`);
    setText('anime-status', `Status: ${anime.status}`);
    setText('anime-rating', anime.rating.toFixed(1));
    setText('anime-synopsis', anime.synopsis);

    setupRatingStars(anime.rating);
    renderGenres(anime.genres);
    renderEpisodes(anime.episodes);
    renderCharacters(anime.characters);
    renderRelatedAnimes(anime.related);
    renderComments(anime.id);
    setupTabs();
    setupActionButtons(anime);
    renderRecommendations(anime.id);
}

// Define texto em um elemento pelo ID
function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

// Exibe as estrelas de avaliação baseadas na nota (0 a 10 convertido em 5 estrelas)
function setupRatingStars(rating) {
    const el = document.querySelector('.stars');
    if (!el) return;

    el.innerHTML = '';
    const full = Math.floor(rating / 2); // Estrelas cheias
    const half = rating % 2 >= 1 ? 1 : 0; // Meia estrela
    const empty = 5 - full - half; // Estrelas vazias

    el.innerHTML += '<i class="fas fa-star"></i>'.repeat(full);
    if (half) el.innerHTML += '<i class="fas fa-star-half-alt"></i>';
    el.innerHTML += '<i class="far fa-star"></i>'.repeat(empty);
}

// Mostra os gêneros como etiquetas
function renderGenres(genres) {
    const container = document.getElementById('anime-genres');
    if (!container) return;
    container.innerHTML = '';

    genres.forEach(g => {
        const span = document.createElement('span');
        span.className = 'genre-tag';
        span.textContent = g;
        container.appendChild(span);
    });
}

// Renderiza a lista de episódios
function renderEpisodes(episodes = []) {
    const container = document.getElementById('episodes-list');
    if (!container) return;

    container.innerHTML = episodes.length
        ? ''
        : '<p class="no-content">Nenhum episódio disponível.</p>';

    episodes.forEach(({ number, title, date }) => {
        const el = document.createElement('div');
        el.className = 'episode-item';
        el.innerHTML = `
            <div class="episode-number">${number}</div>
            <div class="episode-title">${title}</div>
            <div class="episode-date">${date}</div>
            <button class="episode-watch"><i class="fas fa-play"></i></button>
        `;
        el.querySelector('.episode-watch').onclick = () => {
            alert(`Assistindo episódio ${number}: ${title}`);
        };
        container.appendChild(el);
    });
}

// Renderiza os personagens do anime
function renderCharacters(characters = []) {
    const grid = document.getElementById('characters-grid');
    if (!grid) return;

    grid.innerHTML = characters.length
        ? ''
        : '<p class="no-content">Nenhum personagem disponível.</p>';

    characters.forEach(({ name, role, image }) => {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.innerHTML = `
            <img src="${image || '../imagens/character-placeholder.jpg'}" alt="${name}" class="character-image"
                onerror="this.src='../imagens/character-placeholder.jpg'">
            <div class="character-info">
                <div class="character-name">${name}</div>
                <div class="character-role">${role}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Renderiza os animes relacionados
function renderRelatedAnimes(ids = []) {
    const grid = document.getElementById('related-anime-grid');
    if (!grid) return;

    const related = getRelatedAnimes(ids);
    grid.innerHTML = related.length
        ? ''
        : '<p class="no-content">Nenhum anime relacionado disponível.</p>';

    related.forEach(anime => {
        const el = document.createElement('div');
        el.className = 'related-anime-card';
        el.innerHTML = `
            <a href="anime-details.html?id=${anime.id}">
                <img src="${anime.image}" alt="${anime.title}" onerror="this.src='imagens/placeholder.jpg'">
                <div class="related-anime-title">${anime.title}</div>
            </a>
        `;
        grid.appendChild(el);
    });
}

// Renderiza os comentários e ativa o formulário
function renderComments(animeId) {
    const container = document.getElementById('comments-list');
    if (!container) return;

    const comments = [
        { user: 'AnimeLovers123', date: '2023-10-15', content: 'Este anime é incrível!' },
        { user: 'OtakuMaster', date: '2023-10-10', content: 'Ritmo lento no começo, mas depois melhora.' },
        { user: 'SakuraChan', date: '2023-10-05', content: 'Assisti amo demais.' }
    ];

    container.innerHTML = '';
    comments.forEach(({ user, date, content }) => {
        container.innerHTML += `
            <div class="comment-item">
                <div class="comment-header">
                    <span class="comment-user">${user}</span>
                    <span class="comment-date">${formatDate(date)}</span>
                </div>
                <div class="comment-content">${content}</div>
            </div>
        `;
    });

    setupCommentForm(animeId); // Ativa o formulário de comentários
}

// Ativa o envio de comentários
function setupCommentForm(animeId) {
    const form = document.querySelector('.comment-form');
    if (!form) return;

    const button = form.querySelector('button');
    const textarea = form.querySelector('textarea');

    button.onclick = () => {
        const text = textarea.value.trim();
        if (!text) return alert('Escreva um comentário.');

        const isLoggedIn = true; // Aqui simula login
        if (!isLoggedIn) {
            if (confirm('Você precisa estar logado para comentar. Deseja ir para a página de login?')) {
                return (window.location.href = 'tela-de-login/index.html');
            }
            return;
        }

        const container = document.getElementById('comments-list');
        const now = formatDate(new Date().toISOString());

        container.insertAdjacentHTML('afterbegin', `
            <div class="comment-item">
                <div class="comment-header">
                    <span class="comment-user">Você</span>
                    <span class="comment-date">${now}</span>
                </div>
                <div class="comment-content">${text}</div>
            </div>
        `);
        textarea.value = ''; // Limpa o campo após comentar
    };
}

// Formata datas para o padrão brasileiro (ex: 10 de julho de 2025)
function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('pt-BR', {
        year: 'numeric', month: 'long', day: 'numeric'
    });
}

// Renderiza as recomendações de animes
function renderRecommendations(animeId) {
    const list = document.getElementById('recommendations-list');
    if (!list) return;

    const recs = getRecommendations(animeId);
    list.innerHTML = '';

    recs.forEach(anime => {
        list.innerHTML += `
            <div class="recommendation-card">
                <a href="anime-details.html?id=${anime.id}">
                    <img src="${anime.image}" alt="${anime.title}" class="recommendation-image">
                    <div class="recommendation-info">
                        <div class="recommendation-title">${anime.title}</div>
                    </div>
                </a>
            </div>
        `;
    });
}

// Configura o funcionamento das abas de conteúdo
function setupTabs() {
    const buttons = document.querySelectorAll('.tab-button');
    const panes = document.querySelectorAll('.tab-pane');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(btn.dataset.tab).classList.add('active');
        });
    });
}

// Configura os botões de ação: Assistir e Favoritar
function setupActionButtons(anime) {
    const watchBtn = document.querySelector('.watch-button');
    const favBtn = document.querySelector('.favorite-button');

    watchBtn.onclick = () => {
        const ep = anime.episodes?.[0];
        alert(ep ? `Assistindo ${anime.title} - Episódio 1: ${ep.title}` : 'Nenhum episódio disponível.');
    };

    favBtn.onclick = () => {
        const isLoggedIn = true;
        if (!isLoggedIn) {
            if (confirm('Você precisa estar logado para adicionar aos favoritos. Ir para login?')) {
                return (window.location.href = 'tela-de-login/index.html');
            }
            return;
        }

        favBtn.classList.toggle('active');
        const fav = favBtn.classList.contains('active');
        favBtn.querySelector('i').className = fav ? 'fas fa-heart' : 'far fa-heart';
        alert(`${anime.title} ${fav ? 'adicionado aos' : 'removido dos'} favoritos!`);
    };
}
