function numeroAleatori(){
    var numero = parseInt(prompt("Introdueix el numero a buscar"));
    var tempsT = (Date.now() % 1000) / 1000;
    for (i=0;i<1000000;i++){
        var aleatori=Math.random()*1000000;
        if (numero=aleatori){
            alert("Ha trigat "+tempsT);
            break;
        }
    }
}
