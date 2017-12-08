$(function () {
    $('.wpcf7-validation-errors .message-fixed .close').on('click', function () {
        $('.wpcf7-response-output').fadeOut('slow').addClass('wpcf7-display-none');
        var elem = $('.wpcf7-not-valid:nth(0)').attr('name');
        animateTo(elem);
    });
    $('.wpcf7-mail-sent-ok .message-fixed .close').on('click', function () {
        $('.wpcf7-response-output').fadeOut('slow').addClass('wpcf7-display-none');
        location.href=site_url;
        console.log(site_url);
    });
});

function animateTo(id) {
    var pos = $('#'+id).offset().top;
    $('body,html').animate({
        scrollTop: pos - 150
    }, 800);
}