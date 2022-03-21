console.log ("------------------- MENU -------------------")
console.log ("Opções |  Tipo de Comida | Tempo de Preparo")
console.log ("   1   |     Pipoca      |   10 segundos ")
console.log ("   2   |    Macarrão     |   8  segundos ")
console.log ("   3   |     Carne       |   15 segundos ")
console.log ("   4   |     Feijão      |   12 segundos ")
console.log ("   5   |    Brigadeiro   |   8  segundos ")
console.log ("--------------------------------------------")

function microondas (opcao, tempo) {
    switch (opcao){

        case "pipoca":
            if(opcao == "pipoca" && tempo == 10*2){
                console.log("Comida queimou!");
            } else if (opcao == "pipoca" && tempo < 10){
                console.log("Tempo insuficiente");
            } else if (opcao == "pipoca" && tempo == 10*3){
                console.log("Kabumm");
            } else if (opcao == "pipoca" && tempo == 10){
                console.log("Prato pronto, bom apetite!!!");
            }
        break;

       case "macarrao":
            if(opcao == "macarrao" && tempo == 8*2){
                console.log("Comida queimou!");
            } else if (opcao == "macarrao" && tempo < 8){
                console.log("Tempo insuficiente");
            } else if (opcao == "macarrao" && tempo == 8*3){
                console.log("Kabumm");
            } else if (opcao == "macarrao" && tempo == 8){
                console.log("Prato pronto, bom apetite!!!");
            } 
        break;

        case "carne":
            if(opcao == "carne" && tempo == 15*2){
                console.log("Comida queimou!");
            } else if (opcao == "carne" && tempo < 15){
                console.log("Tempo insuficiente");
            } else if (opcao == "carne" && tempo == 15*3){
                console.log("Kabumm");
            } else if (opcao == "carne" && tempo == 15){
                console.log("Prato pronto, bom apetite!!!");
            } 
        break;

        case "feijao":
            if(opcao == "feijao" && tempo == 12*2){
                console.log("Comida queimou!");
            } else if (opcao == "feijao" && tempo < 12){
                console.log("Tempo insuficiente");
            } else if (opcao == "feijao" && tempo == 12*3){
                console.log("Kabumm");
            } else if (opcao == "feijao" && tempo == 12){
                console.log("Prato pronto, bom apetite!!!");
            } 
        break;

        case "brigadeiro":
            if(opcao == "brigadeiro" && tempo == 8*2){
                console.log("Comida queimou!");
            } else if (opcao == "brigadeiro" && tempo < 8){
                console.log("Tempo insuficiente");
            } else if (opcao == "brigadeiro" && tempo == 8*3){
                console.log("Kabumm");
            } else if (opcao == "brigadeiro" && tempo == 8){
                console.log("Prato pronto, bom apetite!!!");
            } 
        break;

            default:
                console.log("Prato inexistente")
    }
}

microondas("pipoca", 10)