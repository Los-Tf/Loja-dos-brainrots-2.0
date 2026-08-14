
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