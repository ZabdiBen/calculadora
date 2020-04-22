// creamos las variables principales

const displayNumeros = document.querySelector(".numeros");
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
        if (d.calcular) igual()

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

// let valor;

const numeros = numero => {

    variable = numero

    if (displayNumeros.textContent != numero) {
        displayNumeros.textContent += numero
    }
    cantidad = Number(displayNumeros.textContent) //cambiamos de un string a numero y guardamos el primer numero
    valor = cantidad
        // .toLocaleString('en'); //mostramos los numeros con coma, ya que le asignamos a como se escribieran en una cierta region
    display.textContent = valor;
}


// historia.textContent = PrimerVariable + tipo

const operacionMatematica = (t, operacion) => {
    tipo = t.textContent


    if (display.textContent = valor) {
        historia.textContent = valor + tipo // escribimos en pantalla el valor del boton de la operacion
        PrimerVariable = historia.textContent
    }

    if (historia.textContent = valor + tipo) {
        displayNumeros.textContent = ' '
        display.textContent = ' '
    }

    // if (display.textContent != variable) {
    //     historia.textContent = historia.textContent + tipo
    //     PrimerVariable = historia.textContent

    // }
    if (historia.textContent = final) { //Esto es lo mismo que decir, si hay una variable llamada final, haz esto
        historia.textContent = historia.textContent + tipo
        PrimerVariable = historia.textContent
    }


    calcular = operacion // guardamos el tipo de operacion para obtener la igualdad mas adelante
}

const decimal = decimal => {

}

const igual = () => {
    SegundaVariable = display.textContent; // Meto en una variable el numero en display

    salida = PrimerVariable += SegundaVariable; // Uno las 2 variables

    resultado = eval(salida)

    final = historia.textContent = resultado // paso el resultado al div de historia

    if (historia.textContent = resultado) {
        displayNumeros.textContent = ' '
        display.textContent = ' '
    }

}
const limpiar = () => {
    displayNumeros.textContent = ""
    display.textContent = ""
    historia.textContent = ""
}





// function suma(numero1, numero2){
// 	var numero1 = parseFloat(document.getElementById('numero1').value);
// 	var numero2 = parseFloat(document.getElementById('numero2').value);
// 	var resultado = numero1 + numero2;

// 	document.getElementById('resultado').value = resultado;
// }