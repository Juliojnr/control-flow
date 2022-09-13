const prompt = require ('prompt-sync')();

    const anyNumberText = prompt ('Digite um número: ');
    const anyNumber = Number (anyNumberText)

    if(anyNumber % 2 == 0){
        const raiz = Math.sqrt (anyNumber)
        console.log(`Número digitado foi: ${anyNumber} e raiz quadrada é: ${raiz}`)
    }
    else if(anyNumber % 2 == 1){
        const elevado = Math.pow (anyNumber, 2);
        console.log(`Número digitado foi: ${anyNumber} e elevado ao quadrado é: ${elevado}`);
    }