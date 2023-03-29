
const dados = require('./dados.json');

// console.log(dados)

const valores = [];

for (dado of dados) {
    valores.push(dado.valor)
}


console.log('O menor valor de faturamento ocorrido em um dia do mês foi de:' + Math.min(...valores))
console.log('O maior valor de faturamento ocorrido em um dia do mês foi de:' + Math.max(...valores))

const media = () => {
    let sum = 0;

    for(let i = 0; i < valores.length; i++) {
        sum += valores[i]
    }

    return sum / dados[dados.length - 1].dia
}

const diasSuperioresAMedia = () => {
    let dias = 0;
    for (valor of valores) {
        if (valor >= media()) {
            dias++
        }
    }
    console.log(`O número de dias com faturamentos diáros superiores à média mensal é de: ${dias} dias.`)
}

diasSuperioresAMedia()