function Clicar() {
    var email = document.getElementById('iemail').value
    var senha = document.getElementById('isenha').value
    var resposta = document.getElementById('resposta').value

    alert(`Olá, ${email}, seja bem-vindo!`)
    alert(`Oi, ${senha},  shhiii 🤫`)

    if (email.length <= 0 || !email.includes('@')) {
    resposta.innerHTML = '<p style="color: red;">Email inválido</p>';
    return;
    }

    if (senha.length <= 0) {
        resposta.innerHTML = '<p style="color: red;">Senha deve ter pelo menos 8 caracteres</p>';
        return;
    }

    resposta.innerHTML = `<p style="color: green;">Olá <strong>${email}</strong>, seja bem-vindo!</p>`;
}
