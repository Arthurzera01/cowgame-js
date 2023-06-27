// Variáveis do Ator
let xAtor = 320;
let yAtor = 430;
let colisao = false;

function mostraAtor(){
   image(atorPrincipal, xAtor, yAtor, 35, 35);
}

function movimentaAtor(){
  if(keyIsDown("87")){
    yAtor -= 5
  }
  if(keyIsDown("83")){
    if (naoUltrapassaBorda()){
    yAtor += 5;
    }
  }
}

function voltaVaquinhaPosicaoInicial(){
  if(yAtor < -12){
    yAtor = 430;
  }
}

function mostraPontos(){
  textAlign(CENTER);
  text("Pontos:", 540, 26)
  fill(255);
  rect(587, 5, 40, 30, 20);
  textSize(25);
  fill(0);
  text(meusPontos, 607, 29);
  if (yAtor < -9){
    meusPontos += 1;
    somDosPontos.play();
  }
}

function naoUltrapassaBorda(){
    return yAtor < 430;
}