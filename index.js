const bt = document.querySelector("button");

const inputNome = document.querySelector("input[name=nome]")
function criarUsuario(user) {
    fetch("http://localhost:3000/users", {
    "method": "POST",
    body: JSON.stringify(user)
    })    
}

bt.addEventListener("click", () => {
    console.log("enviado")
    const novoUsuario = {
    nome: inputNome.value,
    tipo: 2,
    email: "admin@email.com",
    senha: "456"
}
    criarUsuario(novoUsuario)
})  
