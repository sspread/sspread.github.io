
$('#home-nav-wrap').height($('#home-nav').height());
$('#home-nav').affix({
    offset: $('#home-nav').position()
});



$(document).ready(function() {
    var width = $(window).width();
    if (width <= 768) {
        $('#home-nav.affix-top #nav-row').collapse('show');
        $('#home-nav.affix #nav-row').collapse('hide');
    };
})
	$(window).bind("resize scroll ready", function() {
    var width = $(window).width();
    if (width <= 768) {
        $('#home-nav.affix-top #nav-row').collapse('show');
        $('#home-nav.affix #nav-row').collapse('hide');
    };
})

