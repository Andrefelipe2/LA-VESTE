// Função para carregar e exibir o carrinho
function carregarCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const lista = document.getElementById("lista-carrinho");
  const totalSpan = document.getElementById("total");

  lista.innerHTML = "";
  let total = 0;

  carrinho.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.nome} (${item.quantidade}) - R$ ${(item.preco * item.quantidade).toFixed(2)}`;

    const btnRemover = document.createElement("button");
    btnRemover.className = "botao-remover";
    btnRemover.textContent = "−"; // usa sinal menos bonitinho

    btnRemover.style.marginLeft = "10px";
    btnRemover.onclick = () => removerItem(index);

    li.appendChild(btnRemover);
    lista.appendChild(li);

    total += item.preco * item.quantidade;
  });

  totalSpan.textContent = total.toFixed(2);
}

// Remover 1 unidade de um item
function removerItem(index) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  if (carrinho[index].quantidade > 1) {
    carrinho[index].quantidade -= 1;
  } else {
    carrinho.splice(index, 1); // Remove item se quantidade for 1
  }
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  carregarCarrinho();
}

// Limpar o carrinho completamente
function limparCarrinho() {
  localStorage.removeItem('carrinho');
  document.getElementById('lista-carrinho').innerHTML = '';
  document.getElementById('total').textContent = '0.00';
}

// Finalizar pedido com verificação
function finalizarPedido() {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  if (carrinho.length === 0) {
    alert("O carrinho está vazio.");
    return;
  }

  alert("Compra finalizada com sucesso!");
  limparCarrinho();
}

// Executar ao carregar a página
document.addEventListener("DOMContentLoaded", carregarCarrinho);
