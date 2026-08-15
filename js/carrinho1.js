let total = 0;

function adicionarCarrinho(nome, preco) {
    const carrinho = document.getElementById("itens-carrinho");

    const produto = document.createElement("div");
    produto.classList.add("produto-carrinho");

    produto.innerHTML = `
        <h3>${nome}</h3>
        <p>R$ ${preco.toFixed(2).replace(".", ",")}</p>
    `;

    carrinho.appendChild(produto);

    total += preco;

    document.getElementById("total").textContent =
        "R$ " + total.toFixed(2).replace(".", ",");
}

function limparCarrinho() {
    const carrinho = document.getElementById("itens-carrinho");

    carrinho.innerHTML = "";

    total = 0;

    document.getElementById("total").textContent = "R$ 0,00";
}

function finalizarCompra() {
    window.location.href = "finalizar.html";
}

document.addEventListener("DOMContentLoaded", function () {

    const limpar = document.getElementById("limpar-carrinho");
    const finalizar = document.getElementById("finalizar-compra");

    if (limpar) {
        limpar.addEventListener("click", limparCarrinho);
    }

    if (finalizar) {
        finalizar.addEventListener("click", finalizarCompra);
    }

});