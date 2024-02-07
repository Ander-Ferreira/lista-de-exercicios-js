function clean() {
  document.getElementById('resultado').innerHTML = "0"; //Aqui era a parte mais fácil, era o problema do zero ao limpar, era só adicionar o 0 onde não tinha nada kkkkkkkk.
}

function back() {
  var resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function insert(num) {
  var numero = document.getElementById('resultado').innerHTML;
  if(numero === "0") { /*Não lembro se o professor ensinou, mas isso é a comparação extrita, ou seja, 
  essa porra não vai comparar se é apenas igual a 0, como também só irá agir se for Number para não dar erro.*/
    document.getElementById('resultado').innerHTML = num;
  }
  else {
    document.getElementById('resultado').innerHTML = numero + num;
  }

  
}

function calcular() {
  var resultado = document.getElementById('resultado').innerHTML;
  if(resultado) {
    document.getElementById('resultado').innerHTML = parseFloat(eval(resultado)); //Resolvi o problema do 0 à esquerda convertendo o eval(resultado) para número flutuante com parseFloat, acho que também daria certo com parseInt, testa aew caralho eu já tô com sono.
  }
  else {
    document.getElementById('resultado').innerHTML = "Nada...";
  }
}