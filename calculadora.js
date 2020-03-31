
// creamos las variables principales

const display = document.querySelector(".display");
const botones = document.querySelector(".botones");



//const calculadora = () => {
  
    
    botones.addEventListener('click', evento => {
      
     if (evento.target.nodeName === 'BUTTON') {
       evento.target.style.backgroundColor = 'tomato'
     }
     
    });


//}


// ejemplo de calculadora




// function suma(numero1, numero2){
// 	var numero1 = parseFloat(document.getElementById('numero1').value);
// 	var numero2 = parseFloat(document.getElementById('numero2').value);
// 	var resultado = numero1 + numero2;

// 	document.getElementById('resultado').value = resultado;
// }