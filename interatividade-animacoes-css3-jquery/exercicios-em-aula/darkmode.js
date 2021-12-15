$(document).ready(function() {

    //adiciono uma class white para definir estilos standard
    $('body').addClass('white');

    //clico no botão e faz uma função:
    $('button').click(function(){

        //se o body tiver a class white:
        if($('body').hasClass('white')) {
            // alert('tem white');
            //se white
            $('body').removeClass('white');
            $('body').addClass('black');
            $('button').css({'background': '#fff', 'color' : '#000', 'transition': 'all 1s'});
        } else {
            // se não tiver white:
            //alert('tem black');
            $('body').removeClass('black');
            $('body').addClass('white');
            $('button').css({'background': '#000', 'color' : '#fff', 'transition': 'all 1s'});
        }
    });
});