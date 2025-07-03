document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('iemail');
    const senhaInput = document.getElementById('isenha');
    const respostaDiv = document.getElementById('resposta');

    // Função para validar email
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Função para mostrar mensagem
    function mostrarMensagem(mensagem, tipo) {
        respostaDiv.innerHTML = `<p class="${tipo}">${mensagem}</p>`;
        respostaDiv.style.display = 'block';
        
        // Esconder a mensagem após 5 segundos
        setTimeout(() => {
            respostaDiv.style.display = 'none';
        }, 5000);
    }

    // Event listener para o formulário
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        const senha = senhaInput.value.trim();
        
        // Validar email
        if (!validarEmail(email)) {
            mostrarMensagem('Por favor, insira um email válido.', 'erro');
            emailInput.focus();
            return;
        }
        
        // Validar senha
        if (senha.length < 8) {
            mostrarMensagem('A senha deve ter pelo menos 8 caracteres.', 'erro');
            senhaInput.focus();
            return;
        }
        
        // Simulação de login bem-sucedido
        // Em um ambiente real, isso seria uma chamada de API para autenticação
        mostrarMensagem(`Olá, ${email.split('@')[0]}! Login realizado com sucesso.`, 'sucesso');
        
        // Limpar campos após login bem-sucedido
        emailInput.value = '';
        senhaInput.value = '';
        
        // Redirecionar após 2 segundos (simulação)
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 2000);
    });

    // Efeito visual nos campos de entrada
    const campos = document.querySelectorAll('.campo input');
    campos.forEach(campo => {
        campo.addEventListener('focus', () => {
            campo.parentElement.classList.add('campo-ativo');
        });
        
        campo.addEventListener('blur', () => {
            if (campo.value.trim() === '') {
                campo.parentElement.classList.remove('campo-ativo');
            }
        });
    });
});