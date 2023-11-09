
function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas= document.querySelectorAll('.tecla');

  //para
 for ( let contador = 0; contador  < listaDeTeclas.length; contador++){
   
const tecla = listaDeTeclas[contador];
const instrumento =Tecla.classList[1];
const idAudio =`#som_${instrumento}`; 

    Tecla.onclick= function(){ 
      tocaSom (idAudio);
    }

    tecla.onkeydown = function (evento){

      console.log(evento)

      if ('espaço'){
      tecla.classList.add('ativa');
     }
  }
  
    tecla.onkeyup = function (){
      teclas.classList.remove('ativa');
   }

}
