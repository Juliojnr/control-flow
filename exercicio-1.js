const prompt = require ('prompt-sync')();

    const intText1 = prompt ('Informe o primeiro número inteiro: ');
    const intNumber1 = Number (intText1);

    const intText2 = prompt ('Informe o segundo número inteiro: ');
    const intNumber2 = Number (intText2);

    const intText3 = prompt ('Informe o terceiro número inteiro: ');
    const intNumber3 = Number (intText3);

    if(intNumber1 > intNumber2 && intNumber1 > intNumber3){
        console.log(`Maior número: ${intNumber1}`);
    }
    else if(intNumber2 > intNumber1 && intNumber2 > intNumber3){
        console.log(`Maior número: ${intNumber2}`);
    }
    else {
        console.log(`Maior número: ${intNumber3}`);
    }

