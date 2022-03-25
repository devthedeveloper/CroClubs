$(document).ready(function () {
    $("#picture-carousel").owlCarousel({
        navigation: false,
        pagination : true,
        slideSpeed : 1000,
        autoPlay: 2000,
        items : 1,
        stopOnHover : true,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [992,1],
        itemsTablet : [768,1],
        itemsMobile : [320,1]
    });

    $(".linkHome").click(function () {
        $('html, body').animate({
            scrollTop: $(".linkedHome").offset().top - 163
        }, "slow");

    });
    $(".linkAbout").click(function () {
        $('html, body').animate({
            scrollTop: $(".linkedAbout").offset().top - 163
        }, "slow");

    });
    $(".linkStory").click(function () {
        $('html, body').animate({
            scrollTop: $(".linkedStory").offset().top - 163
        }, "slow");

    });
    $(".linkTeam").click(function () {
        $('html, body').animate({
            scrollTop: $(".linkedTeam").offset().top - 163
        }, "slow");

    });
    $(".linkRoadMap").click(function () {
        $('html, body').animate({
            scrollTop: $(".linkedRoadMap").offset().top - 163
        }, "slow");
    });
});


// Set the date we're counting down to
var countDownDate = new Date("March 31, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="countTimer"
    document.getElementById("countTimer").innerHTML = days + "Days " + hours + "Hours "
        + minutes + " : " + seconds + " ";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countTimer").innerHTML = "READY TO ROCK!";
    }
}, 1000);


