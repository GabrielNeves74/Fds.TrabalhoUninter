const botao = document.getElementById("botao");

botao.addEventListener("click", function() {
  const mensagem = document.createElement("p");
  mensagem.textContent = "Seja Bem Vindo(a)!";

  botao.parentNode.insertBefore(mensagem, botao.nextSibling);

  setTimeout(() => {
    mensagem.remove();}, 7000);
});