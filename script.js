document.getElementById('createAccountForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name && email && password) {
        alert('Conta criada com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
