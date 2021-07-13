let num1 = Number(prompt("Por favor, digite un número 1"));
let num2 = Number(prompt("Por favor, digite el número 2"));
let num3 = Number(prompt("Por favor, digitel el número 3"));

function suma(num1,num2,num3) {
    let result = Number(num1+num2+num3);
    return result;
}

alert(suma(num1,num2,num3));