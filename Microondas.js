console.log ("------------------- MENU -------------------")
console.log ("Opções |  Tipo de Comida | Tempo de Preparo")
console.log ("   1   |     Pipoca      |   10 segundos ")
console.log ("   2   |    Macarrão     |   8  segundos ")
console.log ("   3   |     Carne       |   15 segundos ")
console.log ("   4   |     Feijão      |   12 segundos ")
console.log ("   5   |    Brigadeiro   |   8  segundos ")
console.log ("--------------------------------------------")

function Pipoca(opcao, tempo){
    if(opcao == 1 && tempo == 10*2){
        console.log("Comida queimou!");
    } else if (opcao == 1 && tempo < 10){
        console.log("Tempo insuficiente");
    } else if (opcao == 1 && tempo == 10*3){
        console.log("Kabumm");
    } else if (opcao == 1 && tempo == 10){
        console.log("Prato pronto, bom apetite!!!");
    } else if (opcao >= 6)
        console.log("Prato inexistente");
}

function Macarrão(opcao, tempo){
    if(opcao == 2 && tempo == 8*2){
        console.log("Comida queimou!");
    } else if (opcao == 2 && tempo < 8){
        console.log("Tempo insuficiente");
    } else if (opcao == 2 && tempo == 8*3){
        console.log("Kabumm");
    } else if (opcao == 2 && tempo == 8){
        console.log("Prato pronto, bom apetite!!!");
    } else if (opcao >= 6)
        console.log("Prato inexistente");
}

function Carne(opcao, tempo){
    if(opcao == 3 && tempo == 15*2){
        console.log("Comida queimou!");
    } else if (opcao == 3 && tempo < 15){
        console.log("Tempo insuficiente");
    } else if (opcao == 3 && tempo == 15*3){
        console.log("Kabumm");
    } else if (opcao == 3 && tempo == 15){
        console.log("Prato pronto, bom apetite!!!");
    } else if (opcao >= 6)
        console.log("Prato inexistente");
}

function Feijão(opcao, tempo){
    if(opcao == 4 && tempo == 12*2){
        console.log("Comida queimou!");
    } else if (opcao == 4 && tempo < 12){
        console.log("Tempo insuficiente");
    } else if (opcao == 4 && tempo == 12*3){
        console.log("Kabumm");
    } else if (opcao == 4 && tempo == 12){
        console.log("Prato pronto, bom apetite!!!");
    } else if (opcao >= 6)
        console.log("Prato inexistente");
}

function Brigadeiro(opcao, tempo){
    if(opcao == 5 && tempo == 8*2){
        console.log("Comida queimou!");
    } else if (opcao == 5 && tempo < 8){
        console.log("Tempo insuficiente");
    } else if (opcao == 5 && tempo == 8*3){
        console.log("Kabumm");
    } else if (opcao == 5 && tempo == 8){
        console.log("Prato pronto, bom apetite!!!");
    } else if (opcao >= 6)
        console.log("Prato inexistente");
}

console.log("Opção 1 - Pipoca")
Pipoca(1,10*2)
Pipoca(1,9)
Pipoca(1,10*3)
Pipoca(1,10)
Pipoca(6,10)
console.log ("--------------------------------------------")
console.log("Opção 2 - Macarrão")
Macarrão(2,8*2)
Macarrão(2,7)
Macarrão(2,8*3)
Macarrão(2,8)
Macarrão(1,8)
console.log ("--------------------------------------------")
console.log("Opção 3 - Carne")
Carne(3,15*2)
Carne(3,7)
Carne(3,15*3)
Carne(3,15)
Carne(1,15)
console.log ("--------------------------------------------")
console.log("Opção 4 - Feijão")
Feijão(4,12*2)
Feijão(4,7)
Feijão(4,12*3)
Feijão(4,12)
Feijão(3,12)
console.log ("--------------------------------------------")
console.log("Opção 5 - Brigadeiro")
Brigadeiro(5,8*2)
Brigadeiro(5,7)
Brigadeiro(5,8*3)
Brigadeiro(5,8)
Brigadeiro(6,8)
console.log ("--------------------------------------------")