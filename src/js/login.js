$(document).ready(function($) {

    $('.popup-open').click(function () {
        $('.login-popup').fadeIn();
        return false;
    });

    $('.popup-close').click(function() {
        $(this).parents('.login-popup').fadeOut();
        return false;
    });

    // Закрытие по клавише Esc.
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.login-popup').fadeOut();
        }
    });

    // Клик по фону, но не по окну
    $('.login-popup').click(function(e) {
        if ($(e.target).closest('.popup').length == 0) {
            $(this).fadeOut();
        }
    });




    $('.popup-two-open').click(function () {
        $('.login-popup-two').fadeIn();
        console.log("hi");
        return false;
    });

    $('.popup-close-two').click(function() {
        $(this).parents('.login-popup-two').fadeOut();
        $(this).parents('.login-popup').fadeOut();
        return false;
    });

    // Закрытие по клавише Esc.
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.login-popup-two').fadeOut();
        }
    });
});