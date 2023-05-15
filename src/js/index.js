// Passo 1 - Pegar no JavaScript o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// Passo 2 - Pegar no JavaScript o elemento HTML correspondente ao body
const body = document.querySelector("body");

// Passo 2 - Pegar no JavaScript o elemento HTML correspondente a imagem do botão de troca de tema
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

// Passo 3 - Identificar o clique do usuário no botão de troca de tema para adicionar ou remover a classe "modo-escuro" do body e alterar a imagem do botão para sol ou lua.
botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  body.classList.toggle("modo-escuro");

  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
  } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
  }
});
