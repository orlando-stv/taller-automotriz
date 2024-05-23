
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
    
    a = Number(prompt("ingrese 1er valor"));
    b = Number(prompt("ingrese 2do valor"));
    if (a >= 0 && b <= 10) {
        return (a + b);
    } else {
        alert ("ingrese valor entre 0 y 10");
    }

}

const resultado = suma();
document.write("el resultado es: " + resultado);