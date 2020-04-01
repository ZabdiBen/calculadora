
// creamos las variables principales

const display = document.querySelector(".display");
const botones = document.querySelector(".botones");



const calculadora = () => {
  
    //hacemos una condicion de seguridad por si hay un error con los botones
    if(!botones) return
    
    botones.addEventListener('click', evento => {
      
    //cogemos el evento y el objeto target
    const t = evento.target;
    //cogemos el valor de data
    const d = t.dataset; 
    
    //detectar si se pulso un numero
    if(d.numero) console.log('numero')
    //detectar si se pulso una operación matematica
    if(d.operacion) console.log('operacion')
    //detectar si se pulso un decimal
    if(d.decimal) console.log('decimal')
    //detectar si se pulso limpiar
    if(d.limpiar) console.log('limpiar')
    //detectar si se pulso la tecla igual
    if(d.calcular) console.log('igual')
    
    
      
    // if (evento.target.nodeName === 'BUTTON') {
    //   evento.target.style.backgroundColor = 'tomato'
    // }
     
    });


}

calculadora();






// function suma(numero1, numero2){
// 	var numero1 = parseFloat(document.getElementById('numero1').value);
// 	var numero2 = parseFloat(document.getElementById('numero2').value);
// 	var resultado = numero1 + numero2;

// 	document.getElementById('resultado').value = resultado;
// }
