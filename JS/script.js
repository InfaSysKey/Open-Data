//Loader page
$(window).load(function() {
    $(".cargador").fadeOut("slow");
});

/*
    Funcion enlazada al menu de la parte suprior, que dependiendo en que <li> del menu que pinchemos
    las secciones de los demas menus se pondran con un "display = none" y la que pinchemos se pondra
    con uns "display = block" para que se muestre
*/
function seccion_hide_show() {
    var tabla = document.getElementById("tablaQuery");
    var inicio = document.getElementById("inicio");
    var mapa = document.getElementById("mapa");
    var tabla2 = document.getElementById("tablaNormal");

    var seccion1 = document.getElementById("sec-bienvenidas");
    var seccion2 = document.getElementById("sec-mapa");
    var seccion3 = document.getElementById("sec-tabla");
    var seccion4 = document.getElementById("sec-tabla2");
    tabla2.addEventListener("click", function (){
        seccion4.style.display = "flex";
        seccion2.style.display = "none";
        seccion1.style.display = "none";
        seccion3.style.display = "none";
    });
    tabla.addEventListener("click", function (){
        seccion2.style.display = "none";
        seccion1.style.display = "none";
        seccion4.style.display = "none";
        seccion3.style.display = "block";
    });

    inicio.addEventListener("click", function (){
        seccion2.style.display = "none";
        seccion3.style.display = "none";
        seccion4.style.display = "none";
        seccion1.style.display = "block";
    });

    mapa.addEventListener("click", function (){
        seccion1.style.display = "none";
        seccion3.style.display = "none";
        seccion4.style.display = "none";
        seccion2.style.display = "block";
    });
}
seccion_hide_show();