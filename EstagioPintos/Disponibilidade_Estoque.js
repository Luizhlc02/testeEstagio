function verficarDisponibilidade (skuDesejado){
    const produtos = [
        { sku: 1001, nome: 'Camiseta', quantidade: 5 },
        { sku: 1002, nome: 'Calça', quantidade: 10 },
        { sku: 1003, nome: 'Vestido', quantidade: 3 }
    ];

    for(var i = 0; i < produtos;i++){
        if (produtos.sku == skuDesejado) {
            if(produtos.quantidade >= 1 ) {
                return true
            }
            else{
                return false
            }
        }
        else{
            console.log("Não encontramos o Sku desejado")
        }
    };
    
}