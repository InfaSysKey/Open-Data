var arrayMapa = []; //Array donde estan las comunidades y sus dominios
var datosRecibidos;

var ajax = new XMLHttpRequest();
ajax.open("GET", "Datos\\DatosMapa.json", true);
ajax.send();

// Cuando cargue la pagina ejecuta la funcion de parsear los datos JSON y los introduce en un array
ajax.addEventListener("load", function () {
    datosRecibidos = JSON.parse(ajax.responseText);
    arrayMapa = datosRecibidos; //Aqui metemos los datos recogidos en el array

    //Introducimos las unidades de los dominios en el array
    var dominios_array = arrayMapa.map(function (item) {
        return item.Dominios;
    });

    //Sacamos el mayor valor
    var mayorValor = Math.max.apply(Math, dominios_array);

    /*
        Funciona para la trabajar con el mapa (SVG)
        Un for para introducir un color + su opacidad
        Mouseover -> creando un div con los dataos de la region
        Mouseleave -> para quitarlo cuando no este el puntero pasando por la region
        Mousemove -> activa un dispositivo señalador, en este caso el mouse para mostrar el elemento sobre el
    */
    $(function () {
        for (i = 0; i < arrayMapa.length; i++) {
            $('#' + arrayMapa[i].Comunidad).css({
                'fill': 'rgba(0, 0, 0,' +
                    arrayMapa[i].Dominios / mayorValor + ')'
            }).data('region', arrayMapa[i]);
        }
        $('.map g').mouseover(function (e) {
            var informacion_data = $(this).data('region');
            $('<div class="info_panel">' +
                informacion_data.Comunidad +
                '<br>' +
                'Dominios: ' +
                informacion_data.Dominios.toLocaleString("es-ES") +
                '</div>').appendTo('body');
        }).mouseleave(function () {
            $('.info_panel').remove();
        }).mousemove(function (e) {
            var mouseX = e.pageX, // X cordenadas del raton
                mouseY = e.pageY; // Y cordenadas del raton

            $('.info_panel').css({
                top: mouseY - 50,
                left: mouseX - ($('.info_panel').width() / 2)
            });
        });
    });
});