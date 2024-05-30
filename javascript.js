var articulo = document.getElementById("articuloID");
var monto = document.getElementById("montoID");
var art = '';
var mont = '';
var total = 0;

var seccionTicket = document.getElementById("ticket");
var preciototal = document.getElementById("total");

function imprimir(){
    mont = parseFloat(monto.value);
    art = articulo.value;
    total = total + mont;

    var elemento = document.createElement("p");
    elemento.innerHTML = art + ".... $" + mont;

    seccionTicket.insertBefore(elemento, preciototal);
    preciototal.textContent = "Total: $" + total;

    articulo.value = '';
    monto.value = '';
}