// creamos las variables principales

const display = document.querySelector(".display");
const historia = document.querySelector(".historia");
const botones = document.querySelector(".botones");


/*
Tengo 2 pantallas donde muestro el resultado, display e historia
*/



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
        if (d.numero) numeros(d.numero)

        //detectar si se pulso una operación matematica
        //Hacemos una funcion matematica para saber que calculo es
        if (d.operacion) operacionMatematica(t, d.operacion)

        //detectar si se pulso un decimal
        //Hacemos una funcion para detectar el decimal del numero presionado
        if (d.decimal) decimal(d.decimal)

        //detectar si se pulso limpiar
        //Hacemos una funcion para marcar 0 en el display
        if (d.limpiar) limpiar(d.limpiar) //funcion terminada

        //detectar si se pulso la tecla igual
        //Hacemos una funcion que hacer la operacion y mostrar el resultado en el display
        if (d.calcular) igual(d.calcular)

        //detectamos si la persona quiere borrar un numero
        if (d.borrar) borrar(d.borrar)

        //Ejemplo
        // if (evento.target.nodeName === 'BUTTON') {
        //     evento.target.style.backgroundColor = 'tomato'
        // }

    });


}

calculadora();

/**
 * Me hace falta lo siguiente:
 * 1. Que diferencie entre numero y operacion
 * 2. Que cuando pulse una operacion el numero y el operador pasen al div de historia
 * 3. Que en el display coloque coma cuando sea necesario
 * 4. que la calcauladora sirva
 */


const numeros = numero => {
    // let cantidad = display.textContent += numero;

    // numerosCalculadora = () => {
    //     let n = Number(numero);
    //     let mostrar = cantidad.toLocaleString('en');
    // }

    if (display.textContent != numero) {
        display.textContent += numero
    } else if (display.textContent += numero) {
        numero1 = Number(display.textContent) //guardamos el primer numero
        let valor = numero1.toLocaleString('en');
        display.textContent = valor
    }
    // problema anterior no detectaba el valor final, por eso no agrgaba el toLocaleString
    // todavia no detecta el localestring en el mismo div si no me sirve uso otro div
}

// if (display.textContent != numero ) 
//{ display.textContent = numero }


// numerosCalculadora = () => {
//     numeros().toLocaleString('en');
// }



const operacionMatematica = (t, operacion) => {
    //lo que tengo que hacer aca el pasarlo de display a historia mas la operacion que se puso

    historia.textContent = t.textContent // escribimos en pantalla el valor del boton de la operacion
    calcular = operacion // guardamos el tipo de operacion para obtener la igualdad mas adelante
    console.log(calcular)
}

const decimal = decimal => {

}

const limpiar = limpiar => {
    display.textContent = ' '
}

const igual = (calcular, numero1, numero2) => {
    numero2 = Number(display.textContent)
    console.log(numero2)
    switch (calcular) {
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
        default:
            break;
    }
}


var numero1, numero2, calcular;



// function suma(numero1, numero2){
// 	var numero1 = parseFloat(document.getElementById('numero1').value);
// 	var numero2 = parseFloat(document.getElementById('numero2').value);
// 	var resultado = numero1 + numero2;

// 	document.getElementById('resultado').value = resultado;
// }