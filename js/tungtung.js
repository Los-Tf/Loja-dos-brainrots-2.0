
const carrinhoAbrir = document.getElementById('abrir-carrinho');
const carrinhoFechar = document.getElementById('fechar-carrinho');
const sidebar = document.getElementById('barra-lateral');




carrinhoAbrir.addEventListener('click', () => {
<<<<<<< Updated upstream
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
=======
    sidebar.classList.add('open');

});

carrinhoFechar.addEventListener('click', () => {
    sidebar.classList.remove('open');

});


>>>>>>> Stashed changes

/* COMANDO DE TROCA DE PÁGINA */

const paginaAtual =
  window.location.pathname.split("/").pop();

const links = document.querySelectorAll(".navbar a");

links.forEach(link => {
  if (link.getAttribute("href") === paginaAtual) {
    link.classList.add("ativo");
  }
});