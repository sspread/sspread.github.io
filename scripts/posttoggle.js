// $(function () {
//    $("img").not(":visible").each(function () {
//        $(this).data("src", this.src);
//        this.src = "";
//    });

//    var reveal = function (selector) {
//        var img = $(selector);
//        img[0].src = img.data("src");
//    }
// });

$("#post_link7").click(function() {
	event.preventDefault();
  $( ".post.7" ).slideToggle( "slow" );
});

$("#post_link6").click(function() {
	event.preventDefault();
  $( ".post.6" ).slideToggle( "slow" );
});

$("#post_link5").click(function() {
	event.preventDefault();
  $( ".post.5" ).slideToggle( "slow" );
});

$("#post_link4").click(function() {
	event.preventDefault();
  $( ".post.4" ).slideToggle( "slow" );
});

$("#post_link3").click(function() {
	event.preventDefault();
  $( ".post.3" ).slideToggle( "slow" );
});

$("#post_link2").click(function() {
	event.preventDefault();
  $( ".post.2" ).slideToggle( "slow" );
});

$("#post_link1").click(function() {
	event.preventDefault();
  $( ".post.1" ).slideToggle( "slow" );
});

$("#comment_box_link").click(function() {
	event.preventDefault();
  $( ".comment_box" ).slideToggle( "slow" );
});