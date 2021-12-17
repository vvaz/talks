$(document).ready(function() {
    $('.btnHamburger').on('click', function() {
        $('.menu').addClass('active');
    });

    $('.btnClose').on('click', function() {
        $('.menu').removeClass('active');
    });
    
});