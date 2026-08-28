// Variáveis

let total = 0;

let carrinho =
    JSON.parse(localStorage.getItem("carrinho")) || [];

let carrinhoAberto =
    localStorage.getItem("carrinhoAberto") === "true";


// Salvar carrinho

function salvarCarrinho() {

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

}


// Aumentar quantidade

function aumentarQuantidade(botao) {

    const card = botao.closest(".card");

    const quantidadeElement =
        card.querySelector(".quantidadeItens");

    let quantidade =
        Number(quantidadeElement.textContent);

    if (quantidade < 10) {

        quantidade++;

        quantidadeElement.textContent =
            quantidade;

    }

}


// Diminuir quantidade

function diminuirQuantidade(botao) {

    const card = botao.closest(".card");

    const quantidadeElement =
        card.querySelector(".quantidadeItens");

    let quantidade =
        Number(quantidadeElement.textContent);

    if (quantidade > 1) {

        quantidade--;

        quantidadeElement.textContent =
            quantidade;

    }

}


// Atualizar preço

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


// Adicionar ao carrinho

function adicionarCarrinho(nome, preco, botao) {

    const carrinhoElement =
        document.getElementById("itens-carrinho");

    // Procura a quantidade dentro do card
    const card = botao.closest(".card");

    const quantidadeElement =
        card.querySelector(".quantidadeItens");

    let quantidade =
        Number(quantidadeElement.textContent);

    // Procura se o item já existe
    const itemExistente = carrinho.find(
        item => item.nome === nome
    );

    // Se já existe, soma a quantidade
    if (itemExistente) {

        itemExistente.quantidade += quantidade;

    }

    // Se não existe, cria um novo
    else {

        carrinho.push({

            nome: nome,

            preco: preco,

            quantidade: quantidade

        });

    }

    // Salva o carrinho
    salvarCarrinho();

    // Atualiza o que aparece na barra
    carregarCarrinho();

}


// Carregar carrinho

function carregarCarrinho() {

    const carrinhoElement =
        document.getElementById("itens-carrinho");

    const totalElement =
        document.getElementById("total");

    // Se a página não tiver carrinho, para aqui
    if (!carrinhoElement || !totalElement) {
        return;
    }

    // Limpa a barra antes de reconstruir
    carrinhoElement.innerHTML = "";

    total = 0;

    // Percorre todos os produtos salvos
    carrinho.forEach(produto => {

        const elemento =
            document.createElement("div");

        elemento.classList.add(
            "produto-carrinho"
        );

        elemento.innerHTML = `

            <h3>${produto.nome}</h3>

            <p>
                R$ ${(produto.preco * produto.quantidade)
                    .toFixed(2)
                    .replace(".", ",")}
            </p>

            <p>
                Quantidade: ${produto.quantidade}
            </p>

        `;

        carrinhoElement.appendChild(elemento);

        // Calcula o total
        total +=
            produto.preco * produto.quantidade;

    });

    // Mostra o total
    totalElement.textContent =
        "R$ " + total.toFixed(2).replace(".", ",");

}


// Limpar carrinho

function limparCarrinho() {

    carrinho = [];

    salvarCarrinho();

    carregarCarrinho();

}


// Finalizar compra

function finalizarCompra() {
    if (carrinho.length === 0) {
        alert(
            "O carrinho está vazio. Adicione produtos antes de finalizar a compra."
        );
        return;
    }
    window.location.href =
        "finalizar.html";

}


// Quando a página carregar

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const limpar =
            document.getElementById(
                "limpar-carrinho"
            );

        const finalizar =
            document.getElementById(
                "finalizar-compra"
            );

        const abrir =
            document.getElementById(
                "abrir-carrinho"
            );

        const fechar =
            document.getElementById(
                "fechar-carrinho"
            );

        const sidebar =
            document.getElementById(
                "barra-lateral"
            );

        // Botão limpar
        if (limpar) {

            limpar.addEventListener(
                "click",
                limparCarrinho
            );

        }

        // Botão finalizar
        if (finalizar) {

            finalizar.addEventListener(
                "click",
                finalizarCompra
            );

        }

        // Botão abrir carrinho
        if (abrir && sidebar) {

            abrir.addEventListener(
                "click",
                function () {

                    sidebar.classList.add("open");

                    localStorage.setItem(
                        "carrinhoAberto",
                        "true"
                    );

                }
            );

        }

        // Botão fechar carrinho
        if (fechar && sidebar) {

            fechar.addEventListener(
                "click",
                function () {

                    sidebar.classList.remove("open");

                    localStorage.setItem(
                        "carrinhoAberto",
                        "false"
                    );

                }
            );

        }

        // Carrega os produtos salvos
        carregarCarrinho();

        // Verifica se o carrinho estava aberto
        if (
            carrinhoAberto &&
            sidebar
        ) {

            sidebar.classList.add("open");

        }

    }
);