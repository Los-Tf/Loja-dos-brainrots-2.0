// ===============================
// CARRINHO SALVO
// ===============================

let total = 0;

let carrinho =
    JSON.parse(localStorage.getItem("carrinho")) || [];


// Verifica se o carrinho estava aberto
let carrinhoAberto =
    localStorage.getItem("carrinhoAberto") === "true";


// ===============================
// SALVAR CARRINHO
// ===============================

function salvarCarrinho() {

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

}

// AUMENTAR QUANTIDADE

// ===============================
// AUMENTAR QUANTIDADE
// ===============================

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

}



// ATUALIZAR PREÇO DO CARD

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


    const precosElement =
        card.querySelector(".precos");


    precosElement.innerHTML =
        `R$ ${(preco * quantidade)
            .toFixed(2)
            .replace(".", ",")}`;

}



// ADICIONAR AO CARRINHO

function adicionarCarrinho(nome, preco, botao) {

    let quantidade = 1;


    // Se o botão estiver em um card com quantidade
    if (botao) {

        const card =
            botao.closest(".card");


        if (card) {

            const quantidadeElement =
                card.querySelector(".quantidadeItens");


            if (quantidadeElement) {

                quantidade =
                    Number(quantidadeElement.textContent);

            }


        }

    }


    // Guarda o produto
  const itemExistente = carrinho.find(
    item => item.nome === nome
);

if (itemExistente) {

    itemExistente.quantidade += quantidade;

} else {

    carrinho.push({
        nome: nome,
        preco: preco,
        quantidade: quantidade
    });

}

salvarCarrinho();


    // Salva no navegador
    salvarCarrinho();


    // Atualiza a barra
    carregarCarrinho();

}



// MOSTRAR CARRINHO
function carregarCarrinho() {

    const carrinhoElement =
        document.getElementById("itens-carrinho");


    const totalElement =
        document.getElementById("total");


    if (!carrinhoElement || !totalElement) {
        return;
    }


    // Limpa a barra antes de reconstruir
    carrinhoElement.innerHTML = "";


    total = 0;


    // Pega cada produto salvo
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



// LIMPAR CARRINHO  
function limparCarrinho() {

    carrinho = [];

    salvarCarrinho();

    carregarCarrinho();

}


// ===============================
// FINALIZAR COMPRA
// ===============================

function finalizarCompra() {

    window.location.href =
        "finalizar.html";

}


// QUANDO A PÁGINA CARREGAR
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

        finalizar.addEventListener(
            "click",
            finalizarCompra
        );
    }

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


        // Botão abrir
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


        // Botão fechar
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


        // Verifica se estava aberto
        if (
            carrinhoAberto &&
            sidebar
        ) {

            sidebar.classList.add("open");

        }

    }
);
