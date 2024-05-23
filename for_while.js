function miedad() {
    let edad = 0;
    let respuesta = 0;

    while (respuesta != 24) {

        respuesta = Number(prompt("que edad tengo si naci en el 2000"));

        if (respuesta === 24) {

            document.write("es correcto, tengo " + respuesta + " años");

        } 
        // else {
           // document.write(respuesta + " no es mi edad, sigue intentado");
        // }
    }
}
