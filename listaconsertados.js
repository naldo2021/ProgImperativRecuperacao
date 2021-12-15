const consertos = require('./consertos');

console.log('++++++++++++  Reparos já feitos TRUE: +++++++++++++++');
consertos.forEach(produto => {
    reparoTrue(produto);
});

console.log('++++++++++++  Falta chegada das peças FALSE: +++++++++');
consertos.forEach(produto => {
    reparoFalse(produto);
});

function reparoTrue(produto) {
    if (produto.pronto == true) {
        console.log(produto.aparelho);
    }
}

function reparoFalse(produto) {
    if (produto.pronto == false) {
        console.log(produto.aparelho);
    }
}

consertos.forEach(produto => {
    consertados(produto);
});

function consertados(produto) {

    let aparelho = produto.aparelho;
    let itemConsertado = produto.itensConsertados;

    let valorSomado = 0;
    produto.valores.forEach(valor => {
        valorSomado += valor;
    });

    console.log(`Aparelho: ${aparelho}`);
    console.log('Itens Consertados:');

    percorreArray(itemConsertado);

    console.log(`Valor total dos reparos: R$ ${valorSomado},00`);

}

function percorreArray(itemConsertado) {
    itemConsertado.forEach(item => {
        console.log(`* ${item}`);
    })
}