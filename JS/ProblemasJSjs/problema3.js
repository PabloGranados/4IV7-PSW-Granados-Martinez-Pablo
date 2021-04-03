function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function descuento(){

    var costosd = document.formulario.tcsd.value;
    var costosdr = parseInt(costosd)
    var descuento = costosdr * 0.15;
    var total = costosdr - descuento;

    document.formulario.costocd.value="$"+total;
}

function borrar(){

    document.formulario.tcsd.value="";
    document.formulario.costocd.value="";

}