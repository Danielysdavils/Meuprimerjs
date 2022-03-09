console.log("Cuidado: Termometro não tão bom!");

//Var

var temperatura01 = Number(window.prompt("Digite sua temperatura: "));
var idade= Number(window.prompt("Digite sua idade: "));


//Programa

if(idade >= 18){
    console.log("Você tem a maioria de idade");
} else { 
    if(idade < 18){
        console.log("Voce nao tem a maioria de idade")
    }
}
if(temperatura01 > 38){
        console.log("Você precisa ir ao hospital!");
} else {
    if(temperatura01 <= 38){
        console.log("Voce está com perfeita saúde. Parabéns!")
}
}

