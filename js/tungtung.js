
const carrinhoAbrir = document.getElementById('abrir-carrinho');
const carrinhoFechar = document.getElementById('fechar-carrinho');
const sidebar = document.getElementById('barra-lateral');


carrinhoAbrir.addEventListener('click', () => {
    sidebar.classList.add('open');

});

carrinhoFechar.addEventListener('click', () => {
    sidebar.classList.remove('open');

});


carrinhoFechar.addEventListener('click', () => {
    sidebar.classList.remove('open');

});





/* COMANDO DE TROCA DE PÁGINA */

const paginaAtual =
  window.location.pathname.split("/").pop();

const links = document.querySelectorAll(".navbar a");

links.forEach(link => {
  if (link.getAttribute("href") === paginaAtual) {
    link.classList.add("ativo");
  }
});