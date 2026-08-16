let total = 0;
let precos = document.getElementById("precos");



function aumentarQuantidade(botao) {
    // Procura qual é o card mais proximo do botão que esta clicando e aumenta sua quantidade

    const card = botao.closest(".card");
    const quantidadeElement = card.querySelector(".quantidadeItens");


    let quantidade = Number(quantidadeElement.textContent);

    if (quantidade < 10) {
        quantidade++;
        quantidadeElement.textContent = quantidade;
    }
}

function diminuirQuantidade(botao) {
    // Procura qual é o card mais proximo do botão que esta clicando e diminui sua quantidade
    const card = botao.closest(".card");
    const quantidadeElement = card.querySelector(".quantidadeItens");


    let quantidade = Number(quantidadeElement.textContent);

    if (quantidade > 1) {
        quantidade--;
        quantidadeElement.textContent = quantidade;
    }

} function atualizarPreco(atualizarPrecos, botao) {
    // Procura dentro do card qual a quantidade de itens e atualiza o preço total ja na tela inicial
    const card = botao.closest(".card");
    const quantidadeElement = card.querySelector(".quantidadeItens");
    let quantidade = Number(quantidadeElement.textContent);
    const precosElement = card.querySelector(".precos");
    precosElement.innerHTML = `R$ ${(atualizarPrecos * quantidade).toFixed(2).replace(".", ",")}`;
}

function adicionarCarrinho(nome, preco, botao) {
    const carrinho = document.getElementById("itens-carrinho");

    // Procura dentro do card a quantidade de itens e o preço do produto
    const card = botao.closest(".card");
    const quantidadeElement = card.querySelector(".quantidadeItens");
    quantidade = Number(quantidadeElement.textContent);
    // ----------------------------------------------------------------------

    const produto = document.createElement("div");
    produto.classList.add("produto-carrinho");


    produto.innerHTML = `
          <h3>${nome}</h3>
        <p>R$ ${(preco * quantidade).toFixed(2).replace(".", ",")}</p>
        <p>Quantidade: ${quantidade}</p>
        `;


    carrinho.appendChild(produto);

    total += preco * quantidade;

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



