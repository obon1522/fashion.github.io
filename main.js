jQuery(function ($) {
    var topBtn = $('.back-to-top');
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
 });
