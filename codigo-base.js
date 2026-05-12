function validar(){
    var usu=document.getElementById("usuario").value;
    var password=document.getElementById("password").value;

    if(usu == "AngelesR" && password == "1234"){
        alert("Acceso permitido!. Bienvenido " + usu);
        window.location.href = "preventa.html";
    }else{
        alert("Acceso denegado!!");
    }
    }
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