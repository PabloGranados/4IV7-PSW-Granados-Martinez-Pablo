function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function porcentaje(){

    var nhombres = document.formulario.totalh.value;
    var nhombresr = parseInt(nhombres)
    var nmujeres = document.formulario.totalm.value;
    var nmujeresr = parseInt(nmujeres)
    var total = nhombresr + nmujeresr;
    var porcentajeh = (nhombresr / total) * 100;
    var porcentajem = (nmujeresr / total) * 100;

    document.formulario.porcentajeth.value = porcentajeh+"%";
    document.formulario.porcentajetm.value = porcentajem+"%";
}

function borrar(){

    document.formulario.totalh.value="";
    document.formulario.totalm.value="";
    document.formulario.porcentajeth.value="";
    document.formulario.porcentajetm.value="";

}