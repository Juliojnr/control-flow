const ageText = prompt('Digite sua idade: ');
const age = Number (ageText);

if(age > 18) {
  document.write('Então você é adulto!');
} else if(age > 12) {
  document.write('Então você é um adolescente!')
} else {
    document.write('Então você é uma criança');
}

document.write('<br>')

switch(age){
    case 16:
        document.write('Já pode votar');
        break;
    case 18:
        document.write('Já pode beber e dirigir, não ao mesmo tempo');
        break;
    case 65:
        document.write('Já pode pegar ônibus de graça');
        break;
    default:
        document.write('Se lascou');
        break;
}