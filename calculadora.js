// creamos las variables principales

const display = document.querySelector(".display");
const botones = document.querySelector(".botones");



const calculadora = () => {

    //hacemos una condicion de seguridad por si hay un error con los botones
    if (!botones) return

    botones.addEventListener('click', evento => {

        //cogemos el evento y el objeto target
        const t = evento.target;
        //cogemos el valor de data
        const d = t.dataset;



        //detectar si se pulso un numero
        //Hacemos una funcion para saber que numero presiono
        if (d.numero) numeros(d.numero) //funcion terminada

        //detectar si se pulso una operación matematica
        //Hacemos una funcion matematica para saber que calculo es
        if (d.operacion) operacionMatematica(t, d.operacion) // funcion terminada

        //detectar si se pulso un decimal
        //Hacemos una funcion para detectar el decimal del numero presionado
        if (d.decimal) decimal(d.decimal)

        //detectar si se pulso limpiar
        //Hacemos una funcion para marcar 0 en el display
        if (d.limpiar) limpiar(d.limpiar) //funcion terminada

        //detectar si se pulso la tecla igual
        //Hacemos una funcion que hacer la operacion y mostrar el resultado en el display
        if (d.calcular) igual(d.calcular)

        //Ejemplo
        // if (evento.target.nodeName === 'BUTTON') {
        //     evento.target.style.backgroundColor = 'tomato'
        // }

    });


}

calculadora();

var numero1, numero2, tipoOperacion;
console.log(numero1, numero2, tipoOperacion)

const numeros = numero => {
    // como no tenemos como valor inicial 0 no requiere ninguna condicion  
    display.textContent += numero
    numero1 = Number(display.textContent) //guardamos el primer numero
    console.log(numero1)
}

const operacionMatematica = (t, operacion) => {
    tipoOperacion = operacion // guardamos el tipo de operacion para obtener la igualdad mas adelante
    console.log(tipoOperacion)
    display.textContent = numero1 + t.textContent // escribimos en pantalla el valor del boton de la operacion
}

const decimal = decimal => {

}

const limpiar = limpiar => {
    display.textContent = ' '
}

const igual = (numero1, tipoOperacion, numero2, calcular) => {
    numero2 = Number(display.textContent)
    console.log(numero2)
    switch (tipoOperacion) {
        case 'add':
            display.textContent = numero1 + numero2
            break;
        case 'subtract':
            display.textContent = numero1 - numero2
            break;
        case 'multiply':
            display.textContent = numero1 * numero2
            break;
        case 'divide':
            display.textContent = numero1 / numero2
            break;
    }
}




// function suma(numero1, numero2){
// 	var numero1 = parseFloat(document.getElementById('numero1').value);
// 	var numero2 = parseFloat(document.getElementById('numero2').value);
// 	var resultado = numero1 + numero2;

// 	document.getElementById('resultado').value = resultado;
// }