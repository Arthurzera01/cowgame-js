// Variáveis das imagens
let imagemEstrada;
let atorPrincipal;
let carrinho1;
let carrinho2;
let carrinho3;
let meusPontos = 0;

// Variáveis dos Sons
let somDaTrilha;
let somDosPontos;
let somDaColisao;

function preload(){
  imagemEstrada = loadImage("Imagens/estrada.png");
  atorPrincipal = loadImage("Imagens/ator-1.png");
  carrinho1 = loadImage("Imagens/carro-1.png");
  carrinho2 = loadImage("Imagens/carro-2.png");
  carrinho3 = loadImage("Imagens/carro-3.png");
  mostraCarrinho = [carrinho1, carrinho2, carrinho3, carrinho1, carrinho2, carrinho3];
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDosPontos = loadSound("sons/pontos.wav");
  somDaColisao = loadSound("sons/colidiu.mp3");
}



