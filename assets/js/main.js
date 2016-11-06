$(document).ready(function() {
    FastClick.attach(document.body);

    $('.tog').click(function() {
        var selected = $(this).attr('href'),
            selectedEl = $('[section-id="' + selected + '"]');
        if(!selectedEl.hasClass('active')) {
            $('.active').removeClass('active');
            selectedEl.addClass('active');
        }
        return false;
    });

    resizeHeights();
    $(window).resize(function() {
        resizeHeights();
    });

    function resizeHeights() {
        var h = $(window).height() - 170;
        $('.work-wrap, .about-wrap').height(h + 'px');
    }
});
