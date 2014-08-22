
$('#home-nav-wrap').height($('#home-nav').height());
$('#home-nav').affix({
    offset: $('#home-nav').position()
});

$(window).bind("resize scroll", function() {
    var width = $(window).width();
    if (width <= 768) {
        $('#home-nav.affix-top #nav-row').collapse('show');
        $('#home-nav.affix #nav-row').collapse('hide');
    };
});
