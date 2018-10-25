function numeroAleatori(){
    var numero = parseInt(prompt("Introdueix el numero a buscar2"));
    var tempsT = (Date.now() % 1000) / 1000;
    for (i=0;i<700000;i++){
        var aleatori=Math.random()*700000;
	if (i%2==0){
        if (numero=aleatori){
            alert("Ha trigat "+tempsT);
            break
        }
	}
    }
}
