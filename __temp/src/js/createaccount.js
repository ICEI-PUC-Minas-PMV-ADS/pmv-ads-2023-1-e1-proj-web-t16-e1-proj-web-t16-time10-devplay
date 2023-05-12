const formulario = document.querySelector("[cadastro-form]");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "senha": e.target.elements["senha"].value,
        "confirmarsenha": e.target.elements["confirmarsenha"].value,
    }

    localStorage.setItem("cadastro", JSON.stringify(listaRespostas));

    // Adicionar encaminhamento para página de login
    //window.location.href = './home';
})