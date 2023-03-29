

const faturamentos = [
    {
        estado: 'SP',
        faturamento: 67836.43, 
    },
    {
        estado: 'RJ',
        faturamento: 36678.66, 
    },
    {
        estado: 'MG',
        faturamento: 29229.88, 
    },
    {
        estado: 'ES',
        faturamento: 27165.48, 
    },
    {
        estado: 'outros',
        faturamento: 19849.53, 
    },
]


let faturamentoTotal = 0;

for (let i = 0; i < faturamentos.length - 1; i++) {
    faturamentoTotal += faturamentos[i].faturamento;
}


const valores = () => {
    console.log(faturamentoTotal)
    for(let faturamento of faturamentos) {
        console.log(`${faturamento.estado}: ${(faturamento.faturamento * 100 / faturamentoTotal).toFixed(2)}%`)
    }
}

valores()