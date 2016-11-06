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

    $('.mobile-click').click(function() {
        var href = $(this).attr('href');
        window.open(href, $(this).data('name'), 'width=320, height=568');
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
