
const carrinhoAbrir = document.getElementById('abrir-carrinho');
const carrinhoFechar = document.getElementById('fechar-carrinho');
const sidebar = document.getElementById('barra-lateral');
const overlay = document.getElementById('overlay');



carrinhoAbrir.addEventListener('click', () => {
  sidebar.classList.add('open');
  overlay.classList.add('show');
});

carrinhoFechar.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
});

/* COMANDO DE TROCA DE PÁGINA */

const paginaAtual =
  window.location.pathname.split("/").pop();

const links = document.querrySeletorAll(".navbar a");

links.forEach(link => {
  if (link.getAttribute("href") === paginaAtual) {
    link.classList.add("ativo");
  }
});