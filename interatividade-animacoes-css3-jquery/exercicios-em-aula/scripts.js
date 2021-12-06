$(document).ready(function() {

    var selector = $('.blue121221');

    let selector2 = $('.blue121221');

    const selector3 = $('.blue121221');

    // fazendo ifs com selectores, temos de usar o lenght e comparar o valor. Se for maior do que 0, é sinal que aquele elemento / selector existe no nosso DOM

    if(selector2.lenght > 0) {
        // verdadeiro
        alert('existe uma div com class .blue');
    } else {
        // falso
        alert('não existe uma div com class .blue');
    }

});

