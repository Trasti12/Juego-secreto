

let numSecreto = 0;
let intentos = 0; 
let numSorteados = [];
let numMaximo = 10;


function asignarTexto(elemento, texto) { 
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function intentoDeUsuario() {
    let numUsuario = parseInt(document.getElementById('valorUsuario').value); //"parseInt" para pasar el valor de "string" a Número.
    /*console.log(typeof(numUsuario));
    console.log(numSecreto); //solo para ver que funcione en el navegador
    console.log(typeof(numSecreto));
    console.log(numUsuario);*/
    //console.log(numSecreto === numUsuario); //Booleano
    if (numUsuario === numSecreto) {
        asignarTexto('p',`Acertaste intentádolo ${intentos} ${(intentos === 1) ? 'vez!' : 'veces!'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            //el usuario no cierta
            if (numUsuario > numSecreto) {
                asignarTexto('p', 'El número secreto es menor');
                } else {
                    asignarTexto('p', 'El número secreto es mayor');
    }
    intentos++;
    limpiarCaja();
    return;
}
}

function limpiarCaja () {
    document.querySelector ('#valorUsuario').value = '';
}

function generarNumAleatorio() { 
    let numGenerado = Math.floor(Math.random()*numMaximo)+1;
    if (numSorteados.length == numMaximo) {
        asignarTexto('p', "No hay más números para adivinar");
    } else {
        console.log(numGenerado);
    if (numSorteados.includes(numGenerado)) {
        return generarNumAleatorio();
    } else {
        numSorteados.push(numGenerado);
        return numGenerado;
    }
}
}


console.log(numSorteados);
//console.log(numSecreto);

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disable','true'); //no me funciona en el juego :(
}

function condicionesIniciales() {
    asignarTexto("h1",'Juego del número secreto!');
    asignarTexto("p",`Elige un número entre 1 y ${numMaximo}`);
    numSecreto = generarNumAleatorio();
    intentos = 1;
}

condicionesIniciales()