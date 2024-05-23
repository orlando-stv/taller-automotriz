
/* function solicitarnumero () {
    const numero = prompt("ingreso un numero")
    return Number(numero);
}

function sumar2 () {
    const numero1 = solicitarnumero();
    const numero2 = solicitarnumero();
   

return numero1 +   numero2;
}

const resultado2 = sumar2();
console.log("Resultado: " + resultado2); */

function suma() {
    
    a = Number(prompt("ingrese 1er valor del 0 al 10"));
    b = Number(prompt("ingrese 2do valor del 0 al 10"));
    if (a >= 0 && b <= 10) {
        return (a + b);
    } else {
        alert ("valores incorrectos");
    }

}

const resultado = suma();
document.write("el resultado es: " + resultado);