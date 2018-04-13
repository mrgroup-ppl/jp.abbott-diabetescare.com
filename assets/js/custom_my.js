// JavaScript Document
$('.social-view').css({
    'display': 'none'
});
$(window).load(function() {
    $('.social-view').css({
        'display': 'block'
    });
    var tHe = jQuery("#carousel-home").height() + $('.social-view').height() + 170;
    $('.social-view').css({
        'top': tHe
    });

});
