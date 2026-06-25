const menos = document.getElementById("menos");
const mais = document.getElementById("mais");
const valor = document.getElementById("valor");
const senha = document.getElementById("senha");
const gerar = document.getElementById("gerar");

let tamanho = 12;

function gerarSenha(tamanho) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";
    let resultado = "";

    for (let i = 0; i < tamanho; i++) {
        resultado += chars[Math.floor(Math.random() * chars.length)];
    }

    return resultado;
}

menos.onclick = () => {
    if (tamanho > 1) {
        tamanho--;
        valor.textContent = tamanho;
    }
};

mais.onclick = () => {
    tamanho++;
    valor.textContent = tamanho;
};

gerar.onclick = () => {
    senha.value = gerarSenha(tamanho);
};