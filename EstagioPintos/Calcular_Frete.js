// Tabela de preços
const tabelaPrecos = {
    '0-1,0-5': 10.0,    // Até 1 kg e até 5 km: R$ 10.00
    '0-1,6-10': 15.0,   // Até 1 kg e 6-10 km: R$ 15.00
    '1-5,0-5': 20.0,    // 1-5 kg e até 5 km: R$ 20.00
    '1-5,6-10': 25.0,   // 1-5 kg e 6-10 km: R$ 25.00
    '5-10,0-5': 30.0,   // 5-10 kg e até 5 km: R$ 30.00
    '5-10,6-10': 35.0   // 5-10 kg e 6-10 km: R$ 35.00
};

function calcularFrete(pesoPedido, distanciaEntrega,tabelaPrecos){
    var valorFrete = 0;   
    if (pesoPedido <= 1) {
            if(distanciaEntrega<=5){
                 valorFrete = 10;
            }
            else if(distanciaEntrega <=10){
                 valorFrete = 15;
            }
       }
       if(pesoPedido <=5){
            if (distanciaEntrega<=5){
                 valorFrete = 20;
            }
            else if(distanciaEntrega >= 6){
                 valorFrete = 25;
            }
        if(pesoPedido <=10){
            if(distanciaEntrega<=5){
                 valorFrete = 30;
            }
            else if( distanciaEntrega <=10){
                valorFrete = 35;
            }
        }
       } 
       return valorFrete;
    }
