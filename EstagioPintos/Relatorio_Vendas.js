const vendas = [
    { sku: 1001, quantidade: 2, valorTotal: 50.00, data: '2021-01-01' },
    { sku: 1002, quantidade: 1, valorTotal: 20.00, data: '2021-01-01' },
    { sku: 1003, quantidade: 5, valorTotal: 100.00, data: '2021-01-02' },
    { sku: 1001, quantidade: 1, valorTotal: 25.00, data: '2021-01-02' }
];

function relatorioVendas(vendas, dataInicial, dataFinal) {
    const inicio = new Date(dataInicial);
    const fim = new Date(dataFinal);
    const vendasFiltradas = vendas.filter(venda => {
        const dataVenda = new Date(venda.data);
        return dataVenda >= inicio && dataVenda <= fim;
    });
    const totalPorSKU = vendasFiltradas.reduce((relatorio, venda) => {
        if (!relatorio[venda.sku]) {
            relatorio[venda.sku] = {
                quantidadeTotal: 0,
                valorTotal: 0
            };
        }
        relatorio[venda.sku].quantidadeTotal += venda.quantidade;
        relatorio[venda.sku].valorTotal += venda.valorTotal;
        return relatorio;
    }, {});
    const valorTotalVendido = vendasFiltradas.reduce((soma, venda) => {
        return soma + venda.valorTotal;
    }, 0);
    return {
        totalPorSKU,
        valorTotalVendido
    };
}
