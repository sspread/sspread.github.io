
$('#home-nav-wrap').height($('#home-nav').height());
$('#home-nav').affix({
    offset: $('#home-nav').position()
});

// $(document).ready(function() {
//     var width = $(window).width();
//     if (width <= 768) {
    	

//         } else {
//         $('#home-nav.affix-top #nav-row').collapse('show');
//         $('#home-nav.affix #nav-row').collapse('show');


//     };
// })

$(document).ready(function() {

$(window).resize(function() {
    var width = $(window).width();
    if (width <= 768) {
    	
        $('#home-nav.affix-top #nav-row').collapse('show');
        $('#home-nav.affix #nav-row').collapse('hide');

        } else {
        $('#home-nav.affix-top #nav-row').collapse('show');
        $('#home-nav.affix #nav-row').collapse('show');


    };
})

$(window).scroll(function() {
    var width = $(window).width();
    if (width <= 768) {
    	
        $('#home-nav.affix-top #nav-row').collapse('show');
        $('#home-nav.affix #nav-row').collapse('hide');

        } else {
        $('#home-nav.affix-top #nav-row').collapse('show');
        $('#home-nav.affix #nav-row').collapse('show');


    };
})
});