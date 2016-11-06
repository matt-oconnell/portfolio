$(document).ready(function() {
  FastClick.attach(document.body);
  const $window = $(window);
  const emojiMap = {
    intro: 0x1F3E0,
    experiments: 0x1F52C,
    about: 0x1F47E
  };
  location.hash = String.fromCodePoint(emojiMap.intro);

  $('.navigate').click(function() {
    const selected = $(this).attr('href');
    const selectedEl = $(`[section-id="${selected}"]`);
    location.hash = String.fromCodePoint(emojiMap[selected]);

    $('.active').removeClass('active');
    selectedEl.addClass('active');

    return false;
  });

  $('.mobile-click').click(function() {
    const $this = $(this);
    const href = $this.attr('href');
    window.open(href, $this.data('name'), 'width=320, height=568');
    return false;
  });

  resizeHeights();
  $window.resize(resizeHeights);

  function resizeHeights() {
    const h = $window.height() - 170;
    $('.work-wrap, .about-wrap').height(`${h}px`);
  }
});
