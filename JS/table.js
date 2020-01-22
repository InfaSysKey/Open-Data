function mostrarDatos() {
    var ajax;
    var arrayDatos = []; //Array donde introduciremos las datos del archivo JSON

    var ajax = new XMLHttpRequest();

    ajax.open("GET", "DominiosEstadisticas2.json", true);
    ajax.send();

    ajax.addEventListener("load", function () {
        datosRecibidos = JSON.parse(ajax.responseText);
        arrayDatos = datosRecibidos;
        crearTabla(arrayDatos); //Llamamos la funcion de crear tabla, pasandole un array de datos
    });
}
mostrarDatos();

function crearTabla(arrayJson) {
    var columna = []; //Creamos un array donde meteremos las columnas
    var tr;
    /*En este primer for con una condicion IF meteremos los campos de informacion (tbody > th)
    */
    for (let i = 0; i < arrayJson.length; i++) {
        for (let key in arrayJson[i]) {
            if (columna.indexOf(key) == -1) {
                columna.push(key);
            }
        }
    }
    //Creamos la tabla
    var table = document.createElement("table");
    //Introducimos un tr
    tr = table.insertRow(-1);

    /*
        En este segundo for ya introducimos la informacion sacada en el anterior for,
        y vamos introduciendolo en la tabla (th format)
    */
    for (let e = 0; e < columna.length; e++) {
        var th = document.createElement("th");
        th.innerHTML = columna[e];
        tr.appendChild(th);
    }

    /*
        En este for introducimos los datos restantes
    */
    for (let a = 0; a < arrayJson.length; a++) {
        tr = table.insertRow(-1);
        for (let j = 0; j < columna.length; j++) {
            var tableCell = tr.insertCell(-1);
            tableCell.innerHTML = arrayJson[a][columna[j]];
        }
    }
    //Se lo pasamos el DIV que este dentro de la seccion (sec-tabla2)
    var divContainer = document.getElementById("verDatos");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);

}