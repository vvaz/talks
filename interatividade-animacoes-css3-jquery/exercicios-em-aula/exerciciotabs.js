$(document).ready(function() {
    $('.tOne').addClass('tActive');
    $('.cOne').addClass('cActive');

    $('.tOne').on('click', function() {
        $('.tOne').addClass('tActive');
        $('.cOne').addClass('cActive');
        $('.tTwo').removeClass('tActive');
        $('.tThree').removeClass('tActive');
        $('.cTwo').removeClass('cActive');
        $('.cThree').removeClass('cActive');
    });
    $('.tTwo').on('click', function() {
        $('.tTwo').addClass('tActive');
        $('.cTwo').addClass('cActive');
        $('.tTwo').siblings().removeClass('tActive');
        $('.cTwo').siblings().removeClass('cActive');

    });
    $('.tThree').on('click', function() {
        $('.tThree').addClass('tActive').siblings().removeClass('tActive');
        $('.cThree').addClass('cActive').siblings().removeClass('cActive');
    });
});