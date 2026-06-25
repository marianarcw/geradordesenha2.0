const diminuir = document.getElementById("diminuir");
const aumentar = document.getElementById("aumentar");
const valorSenha = document.getElementById("valor-senha");
const campoSenha = document.getElementById("campo-senha");

let quantidade = 12;

function gerarSenha(tamanho) {
    const caracteres =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

    let senha = "";

    for (let i = 0; i < tamanho; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }

    return senha;
}

function atualizarSenha() {
    valorSenha.textContent = quantidade;
    campoSenha.value = gerarSenha(quantidade);
}

diminuir.addEventListener("click", () => {
    if (quantidade > 1) {
        quantidade--;
        atualizarSenha();
    }
});

aumentar.addEventListener("click", () => {
    quantidade++;
    atualizarSenha();
});

atualizarSenha();