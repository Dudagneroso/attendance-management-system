document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Lógica de autenticação (substitua por sua própria lógica de autenticação)
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Simulação de autenticação (verifique se as credenciais correspondem)
    if (email === 'aa' && password === 'aa') {
        // Redirecione para a página de presenças
        window.location.href = 'presencas.html';
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
});