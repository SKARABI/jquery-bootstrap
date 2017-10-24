(function($) {


    $(document).ready(function() {
 // adjust the slider
            $(".skitter-large").skitter();

     $(".navbar-toggler").click(function () {
              $("#main-nav").toggle();
          });

    $(".get-quote").click(function () {
            $(".features").toggleClass("main");
        });

    $("#showoverview button").click(function () {
        $("#showoverview h2").fadeToggle();
        $("#showoverview p").fadeToggle();
    });

    $("#hide").click(function () {
        $("h2").hide();
        $("p").hide();
    });
    $("#show").click(function () {
        $("h2").show();
        $("p").show();
    });


    });

$(document).ready(function() {
    $(".skitter-large").skitter();
});
})(jQuery)
// Loading Screen
$(window).on('load', function() {

    // Loading elements
    $(".loading-overlay .spinner").fadeOut(1000, function () {
       $(this).parent().fadeOut(1000, function () {
           // Show the scroll
           $("body").css("overflow","auto");
           // not let any user removes my loading screen
           $(this).remove();
       });
    });
})
