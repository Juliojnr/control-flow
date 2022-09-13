const prompt = require ('prompt-sync')();

    const ageText = prompt ('Digite sua idade: ');
    const ageNumber = Number (ageText);

    if(ageNumber >= 10 && ageNumber <= 14){
        console.log('Categoria infantil !');
    }
    else if(ageNumber >= 15 && ageNumber <= 17){
        console.log('Categoria Juvenil !');
    }
    else if(ageNumber >= 18 && ageNumber <= 25){
        console.log('Categoria Adulto');
    }
    else{
        console.log('Número Inválido !');
    }