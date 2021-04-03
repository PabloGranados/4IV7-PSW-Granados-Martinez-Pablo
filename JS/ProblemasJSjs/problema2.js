function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function interes(){

    var sueldobase = document.formulario.sueldobase.value;
    var venta1 = document.formulario.venta1.value;
    var venta2 = document.formulario.venta2.value;
    var venta3 = document.formulario.venta3.value;
    var comision = 0.1;
    var comisiontotal = (parseInt(venta1) + parseInt(venta2) + parseInt(venta3)) * comision;
    var total = parseInt(sueldobase) + parseInt(comisiontotal);

    document.formulario.sueldoti.value="$"+total;
}

function borrar(){

    document.formulario.sueldobase.value="";
    document.formulario.venta1.value="";
    document.formulario.venta2.value="";
    document.formulario.venta3.value="";
    document.formulario.comisiontotal.value="";
    document.formulario.total.value="";

}