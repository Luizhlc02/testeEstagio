function calcularValorFinal(valorProduto, quantParcela, taxaJuros) {
    const jurosDecimal = taxaJuros / 100;
    const valorParcela = (valorProduto * jurosDecimal * Math.pow(1 + jurosDecimal, quantParcela)) / 
                         (Math.pow(1 + jurosDecimal, quantParcela) - 1);
    const valorFinal = valorParcela * quantParcela;

    return valorFinal.toFixed(2);
}
