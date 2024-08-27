const itensVendidos = new Map([
    { sku: 1001, quantidade: 2 },
    { sku: 1002, quantidade: 1 },
    { sku: 1003, quantidade: 5 }
]);
const estoque = new Map( [
    { sku: 1001, quantidade: 5 },
    { sku: 1002, quantidade: 2 },
    { sku: 1003, quantidade: 5 }
]);

function atualizandoEstoque(itensVendidos,estoque){
    return estoque.map(produtoEstoque => {
        let itemVendido = itensVendidos.find(item => item.sku === produtoEstoque.sku);
        if (itemVendido) {
            return {
                ...produtoEstoque,
                quantidade: produtoEstoque.quantidade - itemVendido.quantidade
            };
        }
        return produtoEstoque;
    });
}