$(function() {
    var box = $('.box');
    var button = $('.open-menu, .header-menu');
    button.on('click', function(){
      box.toggleClass('active');
    });
  });
  