function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function cedad(){

    var añoactual = document.formulario.añoa.value;
    var añoactualr = parseInt(añoactual)
    var añonacimiento = document.formulario.añon.value;
    var añonacimientor = parseInt(añonacimiento)
    var total = añoactualr - añonacimientor;

    document.formulario.edad.value = total+ "año(s)";
}

function borrar(){

    document.formulario.añoa.value="";
    document.formulario.añon.value="";
    document.formulario.edad.value="";
}