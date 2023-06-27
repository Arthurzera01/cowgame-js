function setup() {
    createCanvas(650, 470);
    somDaTrilha.loop();
  }
  
  function draw() {
    background(imagemEstrada);
   mostraAtor();
    mostraCarrinhos();
    movimentaCarro();
    movimentaAtor();
    voltaCarrinhoPosicaoInicial();
    voltaVaquinhaPosicaoInicial();
    verificaColisao();
    mostraPontos();
  }