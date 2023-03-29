
/* 

o array "fibonacci" armazena os números da fibonacci com um certo limite.
um for loop é inicado com o limite sendo o parametro num inserido pelo usúario
é somado 2 ao parametro para o loop iniciar com no minimo dois valores da fibonacci,
como função o código avalia se fibonacci.length é maio que 1, se verdadeiro, o valor segue o mesmo do index, se falso, o valor é definido pelos ultimos dois números do array "fibonacci", e adicionado ao array

por final o código avalia se o numero escolhido pelo usúario está incluido na 
fibonacci ou, não

*/


let fibonacci = [];

const defineFibonacci = (num) => {
    for (let i = 0; i < num + 2; i++) {
        fibonacci[i] = fibonacci.length > 1 ? fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2] : i
    }
    if (fibonacci.includes(num)) {
        console.log(`O número ${num}, pertence a fobonacci.`)
    }
    else {
        console.log(`O número ${num}, não pertence a fobonacci.`)
    }
    console.log(fibonacci)
}

defineFibonacci(0)