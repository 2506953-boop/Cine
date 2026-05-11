function calcular(){
    var cant=parseInt(document.getElementById("cantidad").value);
    var precio=parseInt(document.getElementById("precio_ticket").value);
    var pochoclos=document.getElementById("extra-pochoclos").checked;
    var posters=document.getElementById("extra-posters").checked;
    var total;

    total = cant * precio;

    if(pochoclos){
        total = total + 1000;
    }

    if(posters){
        total = total + 500;
    }

    if(total>0){
        document.getElementById("resultado2").textContent = "El total a pagar es: $" + total;
    } else{
        alert("Por favor, ingrese una cantidad valida.");
    }
}

function limpiar(){
    document.getElementById("cantidad").value = "";
    document.getElementById("resultado2").textContent = "";
}