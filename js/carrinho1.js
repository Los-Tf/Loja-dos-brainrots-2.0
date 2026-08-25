let total = 0;


// AUMENTAR QUANTIDADE

function aumentarQuantidade(botao) {

    const card = botao.closest(".card");

    const quantidadeElement =
        card.querySelector(".quantidadeItens");

    let quantidade =
        Number(quantidadeElement.textContent);

    if (quantidade < 10) {

        quantidade++;

        quantidadeElement.textContent = quantidade;
    }
}


// DIMINUIR QUANTIDADE

function diminuirQuantidade(botao) {

    const card = botao.closest(".card");

    const quantidadeElement =
        card.querySelector(".quantidadeItens");

    let quantidade =
        Number(quantidadeElement.textContent);

    if (quantidade > 1) {

        quantidade--;

        quantidadeElement.textContent = quantidade;
    }
}


// ATUALIZAR PREÇO

function atualizarPreco(preco, botao) {

    const card = botao.closest(".card");

    const quantidadeElement =
        card.querySelector(".quantidadeItens");

    let quantidade =
        Number(quantidadeElement.textContent);

    const precosElement =
        card.querySelector(".precos");

    precosElement.innerHTML =
        `R$ ${(preco * quantidade)
        .toFixed(2)
        .replace(".", ",")}`;
}


// ADICIONAR AO CARRINHO

function adicionarCarrinho(nome, preco, botao) {

    const carrinho =
        document.getElementById("itens-carrinho");

    const card =
        botao.closest(".card");

    const quantidadeElement =
        card.querySelector(".quantidadeItens");

    let quantidade =
        Number(quantidadeElement.textContent);


    const produto =
        document.createElement("div");

    produto.classList.add("produto-carrinho");


    produto.innerHTML = `
        <h3>${nome}</h3>

        <p>
            R$ ${(preco * quantidade)
            .toFixed(2)
            .replace(".", ",")}
        </p>

        <p>
            Quantidade: ${quantidade}
        </p>
    `;


    carrinho.appendChild(produto);


    total += preco * quantidade;


    document.getElementById("total").textContent =
        "R$ " +
        total.toFixed(2).replace(".", ",");
}


// LIMPAR CARRINHO

function limparCarrinho() {

    const carrinho =
        document.getElementById("itens-carrinho");

    carrinho.innerHTML = "";


    total = 0;


    document.getElementById("total").textContent =
        "R$ 0,00";
}


// FINALIZAR COMPRA

function finalizarCompra() {

    window.location.href =
        "finalizar.html";
}


// BOTÕES DO CARRINHO

document.addEventListener("DOMContentLoaded", function () {

    const limpar =
        document.getElementById("limpar-carrinho");

    const finalizar =
        document.getElementById("finalizar-compra");


    if (limpar) {

        limpar.addEventListener(
            "click",
            limparCarrinho
        );
    }


    if (finalizar) {

        finalizar.addEventListener(
            "click",
            finalizarCompra
        );
    }

});