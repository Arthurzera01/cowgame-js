// Lista de variáveis do carro
let xCarros = [700, 700, 700, 700, 700, 700];
let yCarros = [45, 112, 175, 245, 310, 370];
let velocidadeCarros = [2.5, 3, 3.5, 5, 3.8, 2.8];
let larguraCarrinho = 60;
let alturaCarrinho = 50;
let larguraColisaoCarrinho = 38;
let alturaColisaoCarrinho = 35;

function mostraCarrinhos(){
  for (let i = 0; i < mostraCarrinho.length; i = i + 1){
    image(mostraCarrinho[i], xCarros[i], yCarros[i], larguraCarrinho, alturaCarrinho);
  }
}

function movimentaCarro(){
  for (let i = 0; i < mostraCarrinho.length; i = i + 1){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaCarrinhoPosicaoInicial(){
  for (let i = 0; i < mostraCarrinho.length; i = i + 1){
     if(passouTodaTela(xCarros[i])){
       xCarros[i] = 700;
     }
  }
}

function passouTodaTela(xCarros){
  return xCarros < -50;
}

function verificaColisao(){
  for (let i = 0; i < mostraCarrinho.length; i = i + 1){
  colisao = collideRectCircle(xCarros[i], yCarros[i], larguraColisaoCarrinho, alturaColisaoCarrinho, xAtor, yAtor, 35);
   if (colisao){
     yAtor = 430;
     somDaColisao.play();
     if(meusPontos > 0){
     meusPontos -= 1;
     }
   }
  }
}
