$(document).ready(function() {

    // Parte 1

    // como só há uma imagem, podemos seleccionar todas
    $('img').width('300').height('100').css('border', '3px solid #000');
    $('img').attr('src', 'https://www.infoescola.com/wp-content/uploads/2011/03/facebook.jpg');

    let imgURL = $('img').attr('src');

    $('.resultado').text('' + imgURL);

    // Parte 2

    // eq de 1 porque o 0 também conta
    $('body').find('h4').eq(1).after('<div class="box"></div>');

    $('.box').css({'background': 'red','width': '200px', 'height': '200px'});

    $('.box').addClass('blue');



    // Parte 3

    $('img').before('<div class="box2"></div>');
    $('.box2').css({'width': '200px', 'height': '200px', 'background': 'yellow'});

    $('img').after('<div class="box3"></div>');
    $('.box3').css({'width': '200px', 'height': '200px', 'background': 'red'});

    $('.newLi li').eq(2).append('<li>ITEM 4</li');


    $('.newLi').find('li:nth-child(1)');

});