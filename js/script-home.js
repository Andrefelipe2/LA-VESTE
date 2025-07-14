// Adicionar produto ao carrinho (armazenado no localStorage)
function adicionarCarrinho(nome, preco) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  const itemExistente = carrinho.find(item => item.nome === nome);
  if (itemExistente) {
    itemExistente.quantidade += 1;
  } else {
    carrinho.push({ nome, preco, quantidade: 1 });
  }

  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

// Mostrar ou esconder o menu hambúrguer
function toggleMenu() {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("active");
}

// Slideshow automático no topo da página
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {
  setInterval(() => {
    slides[slideIndex].classList.remove("ativo");
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("ativo");
  }, 3000);
}
