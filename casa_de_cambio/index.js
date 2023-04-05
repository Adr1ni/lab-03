function cambioDeMoneda(){
    var monto = parseFloat(document.getElementById("monto").value)
    var moneda = document.getElementsByName("moneda");
    var text;

    for(let i=0;i<moneda.length; i++){
        if(moneda[i].checked){
            if(moneda[i].value == "dolar"){
                monto *= 3.77;
            }else{
                monto *= 4.17;
            }
            text = moneda[i].value;
        }
    }

    alert("Tu monto en " + text + " es: " + monto);

}