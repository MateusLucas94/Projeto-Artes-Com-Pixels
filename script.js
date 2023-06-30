function gerarTabela(){
    const paiDasDivs = document.getElementById ('pixel-board');
    for ( let index = 1; index <= 5; index += 1 ){
      let novaLinha = document.createElement ('div')
      paiDasDivs.appendChild(novaLinha)
      novaLinha.className = "tr"

      for (let quad = 1; quad <= 5; quad += 1 ){
        let novoQuadrado = document.createElement('div')
        novaLinha.appendChild(novoQuadrado)
        novoQuadrado.className = "pixel"
      }
    }
}
gerarTabela()

  function tirarSelected() {
    const colorSelected = document.querySelector('.selected');
    colorSelected.classList.remove('selected');
  }

  function seletorDeCor() {
    const selecaoDeCor = document.querySelector('#color-palette');
  
    selecaoDeCor.addEventListener('click', (e) => {
      tirarSelected();
      e.target.classList.add('selected');
    });
  }
  seletorDeCor();

  function colorir() {
    const pintarQuadrados = document.getElementById('pixel-board');
  
    pintarQuadrados.addEventListener('click', (e) => {
      e.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
    });
  }
 colorir();

 function limparTabela() {
    const limparTudo = document.getElementById('clear-board');
  
    limparTudo.addEventListener('click', () => {
      const pixels = document.querySelectorAll('.pixel');
      for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].style.backgroundColor = 'white';
      }
    });
  }
  limparTabela();