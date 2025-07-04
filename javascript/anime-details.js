document.addEventListener('DOMContentLoaded', () => {
    // Obter o ID do anime da URL
    const urlParams = new URLSearchParams(window.location.search);
    const animeId = parseInt(urlParams.get('id'));
    
    if (!animeId) {
        showError('ID do anime não encontrado na URL');
        return;
    }
    
    // Obter os dados do anime
    const anime = getAnimeById(animeId);
    
    if (!anime) {
        showError('Anime não encontrado');
        return;
    }
    
    // Carregar os dados do anime na página
    loadAnimeDetails(anime);
    
    // Configurar as abas
    setupTabs();
    
    // Configurar botões de ação
    setupActionButtons(anime);
    
    // Carregar recomendações
    loadRecommendations(anime.id);
});

// Função para exibir mensagem de erro
function showError(message) {
    const mainContent = document.querySelector('.anime-details-content');
    mainContent.innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-circle"></i>
            <h2>Erro</h2>
            <p>${message}</p>
            <a href="index.html" class="back-button">Voltar para a página inicial</a>
        </div>
    `;
}

// Função para carregar os detalhes do anime
function loadAnimeDetails(anime) {
    // Atualizar o título da página
    document.title = `${anime.title} - Animes.online`;
    
    // Atualizar o breadcrumb
    document.getElementById('anime-title-breadcrumb').textContent = anime.title;
    
    // Carregar a imagem do poster
    const posterImg = document.getElementById('anime-poster');
    posterImg.src = anime.image;
    posterImg.alt = `Poster de ${anime.title}`;
    
    // Carregar informações básicas
    document.getElementById('anime-title').textContent = anime.title;
    document.getElementById('anime-year').textContent = `Ano: ${anime.year}`;
    document.getElementById('anime-episodes').textContent = `Episódios: ${anime.episodes}`;
    document.getElementById('anime-status').textContent = `Status: ${anime.status}`;
    document.getElementById('anime-rating').textContent = anime.rating.toFixed(1);
    document.getElementById('anime-synopsis').textContent = anime.synopsis;
    
    // Configurar as estrelas de avaliação
    setupRatingStars(anime.rating);
    
    // Carregar gêneros
    loadGenres(anime.genres);
    
    // Carregar conteúdo das abas
    loadEpisodes(anime.episodes);
    loadCharacters(anime.characters);
    loadRelatedAnimes(anime.related);
    loadComments(anime.id);
}

// Função para configurar as estrelas de avaliação
function setupRatingStars(rating) {
    const starsContainer = document.querySelector('.stars');
    starsContainer.innerHTML = '';
    
    // Calcular o número de estrelas cheias, metade e vazias
    const fullStars = Math.floor(rating / 2);
    const halfStar = rating % 2 >= 1 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    
    // Adicionar estrelas cheias
    for (let i = 0; i < fullStars; i++) {
        starsContainer.innerHTML += '<i class="fas fa-star"></i>';
    }
    
    // Adicionar meia estrela se necessário
    if (halfStar) {
        starsContainer.innerHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Adicionar estrelas vazias
    for (let i = 0; i < emptyStars; i++) {
        starsContainer.innerHTML += '<i class="far fa-star"></i>';
    }
}

// Função para carregar os gêneros
function loadGenres(genres) {
    const genresContainer = document.getElementById('anime-genres');
    genresContainer.innerHTML = '';
    
    genres.forEach(genre => {
        const genreTag = document.createElement('span');
        genreTag.className = 'genre-tag';
        genreTag.textContent = genre;
        genresContainer.appendChild(genreTag);
    });
}

// Função para carregar os episódios
function loadEpisodes(episodes) {
    const episodesList = document.getElementById('episodes-list');
    episodesList.innerHTML = '';
    
    if (episodes.length === 0) {
        episodesList.innerHTML = '<p class="no-content">Nenhum episódio disponível.</p>';
        return;
    }
    
    episodes.forEach(episode => {
        const episodeItem = document.createElement('div');
        episodeItem.className = 'episode-item';
        episodeItem.innerHTML = `
            <div class="episode-number">${episode.number}</div>
            <div class="episode-title">${episode.title}</div>
            <div class="episode-date">${episode.date}</div>
            <button class="episode-watch"><i class="fas fa-play"></i></button>
        `;
        
        // Adicionar evento de clique para assistir o episódio
        const watchButton = episodeItem.querySelector('.episode-watch');
        watchButton.addEventListener('click', () => {
            // Aqui você pode implementar a lógica para assistir o episódio
        });
        
        episodesList.appendChild(episodeItem);
    });
}

// Função para carregar os personagens
function loadCharacters(characters) {
    const charactersGrid = document.getElementById('characters-grid');
    charactersGrid.innerHTML = '';
    
    if (characters.length === 0) {
        charactersGrid.innerHTML = '<p class="no-content">Nenhum personagem disponível.</p>';
        return;
    }
    
    characters.forEach(character => {
        const characterCard = document.createElement('div');
        characterCard.className = 'character-card';
        
        // Verificar se a imagem existe, caso contrário usar uma imagem padrão
        const characterImage = character.image || '../imagens/character-placeholder.jpg';
        
        characterCard.innerHTML = `
            <img src="${characterImage}" alt="${character.name}" class="character-image" onerror="this.src='../imagens/character-placeholder.jpg'">
            <div class="character-info">
                <div class="character-name">${character.name}</div>
                <div class="character-role">${character.role}</div>
            </div>
        `;
        
        charactersGrid.appendChild(characterCard);
    });
}

// Função para carregar animes relacionados
function loadRelatedAnimes(relatedIds) {
    const relatedGrid = document.getElementById('related-anime-grid');
    relatedGrid.innerHTML = '';
    
    if (relatedIds.length === 0) {
        relatedGrid.innerHTML = '<p class="no-content">Nenhum anime relacionado disponível.</p>';
        return;
    }
    
    const relatedAnimes = getRelatedAnimes(relatedIds);
    
    relatedAnimes.forEach(anime => {
        if (!anime) return; // Pular se o anime não for encontrado
        
        const animeCard = document.createElement('div');
        animeCard.className = 'related-anime-card';
        animeCard.innerHTML = `
            <a href="anime-details.html?id=${anime.id}">
                <img src="${anime.image}" alt="${anime.title}" class="related-anime-image">
                <div class="related-anime-info">
                    <div class="related-anime-title">${anime.title}</div>
                </div>
            </a>
        `;
        
        relatedGrid.appendChild(animeCard);
    });
}

// Função para carregar comentários (simulados)
function loadComments(animeId) {
    const commentsList = document.getElementById('comments-list');
    commentsList.innerHTML = '';
    
    // Comentários simulados
    const sampleComments = [
        { user: 'AnimeLovers123', date: '2023-10-15', content: 'Este anime é incrível! A animação e a história são de primeira qualidade.' },
        { user: 'OtakuMaster', date: '2023-10-10', content: 'Gostei muito dos personagens, mas achei o ritmo um pouco lento no início.' },
        { user: 'SakuraChan', date: '2023-10-05', content: 'Meu anime favorito! Já assisti três vezes e sempre descubro algo novo.' }
    ];
    
    sampleComments.forEach(comment => {
        const commentItem = document.createElement('div');
        commentItem.className = 'comment-item';
        commentItem.innerHTML = `
            <div class="comment-header">
                <span class="comment-user">${comment.user}</span>
                <span class="comment-date">${formatDate(comment.date)}</span>
            </div>
            <div class="comment-content">${comment.content}</div>
        `;
        
        commentsList.appendChild(commentItem);
    });
    
    // Configurar o formulário de comentários
    setupCommentForm(animeId);
}

// Função para formatar a data
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
}

// Função para configurar o formulário de comentários
function setupCommentForm(animeId) {
    const commentForm = document.querySelector('.comment-form');
    const commentButton = commentForm.querySelector('button');
    const commentTextarea = commentForm.querySelector('textarea');
    
    commentButton.addEventListener('click', () => {
        const commentText = commentTextarea.value.trim();
        
        if (commentText === '') {
            alert('Por favor, escreva um comentário antes de enviar.');
            return;
        }
        
        // Verificar se o usuário está logado (simulado)
        const isLoggedIn = false; // Altere para true para simular um usuário logado
        
        if (!isLoggedIn) {
            if (confirm('Você precisa estar logado para comentar. Deseja ir para a página de login?')) {
                window.location.href = 'tela-de-login/index.html';
            }
            return;
        }
        
        // Adicionar o comentário (simulado)
        const commentsList = document.getElementById('comments-list');
        const newComment = document.createElement('div');
        newComment.className = 'comment-item';
        newComment.innerHTML = `
            <div class="comment-header">
                <span class="comment-user">Você</span>
                <span class="comment-date">${formatDate(new Date().toISOString())}</span>
            </div>
            <div class="comment-content">${commentText}</div>
        `;
        
        commentsList.insertBefore(newComment, commentsList.firstChild);
        commentTextarea.value = '';
    });
}

// Função para carregar recomendações
function loadRecommendations(animeId) {
    const recommendationsList = document.getElementById('recommendations-list');
    recommendationsList.innerHTML = '';
    
    const recommendations = getRecommendations(animeId);
    
    recommendations.forEach(anime => {
        const recommendationCard = document.createElement('div');
        recommendationCard.className = 'recommendation-card';
        recommendationCard.innerHTML = `
            <a href="anime-details.html?id=${anime.id}">
                <img src="${anime.image}" alt="${anime.title}" class="recommendation-image">
                <div class="recommendation-info">
                    <div class="recommendation-title">${anime.title}</div>
                </div>
            </a>
        `;
        
        recommendationsList.appendChild(recommendationCard);
    });
}

// Função para configurar as abas
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover a classe 'active' de todos os botões e painéis
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Adicionar a classe 'active' ao botão clicado e ao painel correspondente
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Função para configurar os botões de ação
function setupActionButtons(anime) {
    const watchButton = document.querySelector('.watch-button');
    const favoriteButton = document.querySelector('.favorite-button');
    
    // Botão de assistir
    watchButton.addEventListener('click', () => {
        // Redirecionar para o primeiro episódio ou mostrar uma mensagem
        if (anime.episodes && anime.episodes.length > 0) {
            alert(`Assistindo ${anime.title} - Episódio 1: ${anime.episodes[0].title}`);
            // Aqui você pode implementar a lógica para assistir o episódio
        } else {
            alert('Nenhum episódio disponível para este anime.');
        }
    });
    
    // Botão de favoritos
    favoriteButton.addEventListener('click', () => {
        // Verificar se o usuário está logado (simulado)
        const isLoggedIn = false; // Altere para true para simular um usuário logado
        
        if (!isLoggedIn) {
            if (confirm('Você precisa estar logado para adicionar aos favoritos. Deseja ir para a página de login?')) {
                window.location.href = 'tela-de-login/index.html';
            }
            return;
        }
        
        // Alternar o estado de favorito
        favoriteButton.classList.toggle('active');
        
        const isFavorite = favoriteButton.classList.contains('active');
        const heartIcon = favoriteButton.querySelector('i');
        
        if (isFavorite) {
            heartIcon.className = 'fas fa-heart';
            alert(`${anime.title} foi adicionado aos seus favoritos!`);
        } else {
            heartIcon.className = 'far fa-heart';
            alert(`${anime.title} foi removido dos seus favoritos.`);
        }
    });
}