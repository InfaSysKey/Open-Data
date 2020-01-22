$(function () {
    $("#example").DataTable(); //Llamamos a la funcion de una libreria externa para la creacion de la tabla
    // Cargamos el archivo en una variable
    var testDataUrl = "Datos\\DominiosEstadisticas.json"

    $("#loadData").click(function () {
        loadData(); //Llamamos a la funcion de cargar datos
    });

    function loadData() {
        //Abrimos un ajax
        $.ajax({
            type: 'GET',
            url: testDataUrl,
            contentType: "text/plain",
            dataType: 'json',
            success: function (data) {
                myJsonData = data;
                populateDataTable(myJsonData);
            },
            error: function (e) {
                console.log("Tienes un error en la respuesta del ajax...");
                console.log("error: " + JSON.stringify(e));
            }
        });
    }

    // Creacion de los datos que vamos a introducir en la tabla
    function populateDataTable(data) {
        $("#example").DataTable();
        var longitudJSON = Object.keys(data.datos).length;


        for (var i = 1; i < longitudJSON + 1; i++) {
            var dat = data.datos['dato' + i];
            // Añdir los datos del JSON
            $('#example').dataTable().fnAddData([
                dat.Fecha,
                dat.es,
                dat.com,
                dat.org,
                dat.nom,
                dat.gob,
                dat.edu,
                dat.Total
            ]);
        }
    }
});