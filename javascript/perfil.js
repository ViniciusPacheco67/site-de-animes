document.addEventListener("DOMContentLoaded", () => {
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const avatar = document.getElementById("avatar");
  const animeCards = document.getElementById("anime-cards");

  // Carregar do localStorage
  const savedNome = localStorage.getItem("nome");
  const savedEmail = localStorage.getItem("email");
  const savedAvatar = localStorage.getItem("avatar");
  const savedAnimes = JSON.parse(localStorage.getItem("animes")) || [];

  if (savedNome) nome.value = savedNome;
  if (savedEmail) email.value = savedEmail;
  if (savedAvatar) avatar.src = savedAvatar;
  savedAnimes.forEach(anime => criarCardAnime(anime));
});

// Salvar perfil no localStorage
function salvarPerfil() {
  localStorage.setItem("nome", document.getElementById("nome").value);
  localStorage.setItem("email", document.getElementById("email").value);
  localStorage.setItem("avatar", document.getElementById("avatar").src);
  alert("Perfil salvo com sucesso!");
}

// Adicionar anime
function adicionarAnime() {
  const animeInput = document.getElementById("novoAnime");
  const nomeAnime = animeInput.value.trim();
  if (nomeAnime === "") return;

  criarCardAnime(nomeAnime);

  const animes = JSON.parse(localStorage.getItem("animes")) || [];
  animes.push(nomeAnime);
  localStorage.setItem("animes", JSON.stringify(animes));

  animeInput.value = "";
}

function criarCardAnime(nomeAnime) {
  const card = document.createElement("div");
  card.className = "anime-card";
  card.innerHTML = `
    ${nomeAnime}
    <button onclick="removerAnime(this, '${nomeAnime}')">&times;</button>
  `;
  document.getElementById("anime-cards").appendChild(card);
}

function removerAnime(btn, nomeAnime) {
  btn.parentElement.remove();
  let animes = JSON.parse(localStorage.getItem("animes")) || [];
  animes = animes.filter(anime => anime !== nomeAnime);
  localStorage.setItem("animes", JSON.stringify(animes));
}

// Upload de avatar
document.getElementById("uploadAvatar").addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("avatar").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Limpar perfil
function limparPerfil() {
  localStorage.clear();
  location.reload();
}

