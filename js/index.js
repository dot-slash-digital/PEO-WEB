// JUMBOTRON PARALLAX SCROLL, JUMBOTRON CONTENT OPACITY ADJUSTMENTS, SCROLL-TO-TOP BUTTON OPACITY ADJUSTMENTS

$(window).scroll(() => {
    const scrollPos = $(document).scrollTop();
    const contentFade = $(window).height();
    const contentFadehalf = contentFade/3;

    if ($(window).width() > 449) {
        $(".parallax-slider").css({"transform" : "translateY( calc(" + scrollPos + "px * .6) )"});
        if (scrollPos > (contentFadehalf)) {
            $(".parallax-content").css({"opacity" : "calc( 1.0 - ((("+contentFadehalf+" - "+scrollPos+") * -.0025)))"});
        }
        else {
            $(".parallax-content").css({"opacity" : "1.0"});
        }
    }




    if (scrollPos > ($(window).height() - 100)) {
        $("#scroll-to-top").css({"visibility" : "visible"});
        $("#scroll-to-top").css({"opacity" : "1.0"});
    }
    else {
        $("#scroll-to-top").css({"opacity" : "0"});
        $("#scroll-to-top").css({"visibility" : "hidden"});
    }
});

// MOBILE MENU CLICK TO OPEN AND CLOSE

$(".mobile-menu").click(() => {
    if ($(".nav").outerHeight() === 100) {
        $(".nav").css({"height" : "auto"});
    }
    else {
        $(".nav").css({"height" : "100px"});
    }
});

// MOBILE MENU CLOSE IF WINDOW IS RESIZED

$(window).resize(() => {
    if ($(window).width() > 991) {
        $(".nav").css({"height" : "100vh"});
    }
    else {
        $(".nav").css({"height" : "100px"});
    }
});

// MOBILE MENU CLOSE IF NAV LINK IS CLICKED

$(".nav-link").click(() => {
    if ($(window).width() < 992) {
        $(".nav").css({"height" : "100px"});
    }
});

// CLOSE PROMO BANNER WHEN X ICON IS CLICKED

$(".close-button").click(() => {
        $(".promo-banner").css({"display" : "none"});
});

// TESTIMONIAL CAROUSEL ROTATION

var currentSlide = 1;
var inReverse = false;
var vertPos = "";

$(window).resize(() => {
    if ($(window).width() > 499) {
        vertPos = "calc(200px - 50%)";
    }
    else {
        vertPos = "calc(300px - 50%)";
    }
});

$(document).ready(() => {

    if ($(window).width() > 499) {
        vertPos = "calc(200px - 50%)";
    }
    else {
        vertPos = "calc(300px - 50%)";
    }
    rotate();
});

function rotate() {
    if (currentSlide === 1) {
        $("#testimonials-container .testimonial:nth-child(1)").css({"transform": "translate(0,0)"});
        $("#testimonials-container .testimonial:nth-child(2)").css({"transform": "translate(100%,0)"});
        $("#testimonials-container .testimonial:nth-child(3)").css({"transform": "translate(200%,0)"});
        $("#testimonials-container .testimonial:nth-child(4)").css({"transform": "translate(300%,0)"});
        $("#testimonials-container .testimonial:nth-child(5)").css({"transform": "translate(400%,0)"});
    } else if (currentSlide === 2) {
        $("#testimonials-container .testimonial:nth-child(1)").css({"transform": "translate(-100%,0)"});
        $("#testimonials-container .testimonial:nth-child(2)").css({"transform": "translate(0,0)"});
        $("#testimonials-container .testimonial:nth-child(3)").css({"transform": "translate(100%,0)"});
        $("#testimonials-container .testimonial:nth-child(4)").css({"transform": "translate(200%,0)"});
        $("#testimonials-container .testimonial:nth-child(5)").css({"transform": "translate(300%,0)"});
    } else if (currentSlide === 3) {
        $("#testimonials-container .testimonial:nth-child(1)").css({"transform": "translate(-200%,0)"});
        $("#testimonials-container .testimonial:nth-child(2)").css({"transform": "translate(-100%,0)"});
        $("#testimonials-container .testimonial:nth-child(3)").css({"transform": "translate(0,0)"});
        $("#testimonials-container .testimonial:nth-child(4)").css({"transform": "translate(100%,0)"});
        $("#testimonials-container .testimonial:nth-child(5)").css({"transform": "translate(200%,0)"});
    } else if (currentSlide === 4) {
        $("#testimonials-container .testimonial:nth-child(1)").css({"transform": "translate(-300%,0)"});
        $("#testimonials-container .testimonial:nth-child(2)").css({"transform": "translate(-200%,0)"});
        $("#testimonials-container .testimonial:nth-child(3)").css({"transform": "translate(-100%,0)"});
        $("#testimonials-container .testimonial:nth-child(4)").css({"transform": "translate(0,0)"});
        $("#testimonials-container .testimonial:nth-child(5)").css({"transform": "translate(100%,0)"});
    } else if (currentSlide === 5) {
        $("#testimonials-container .testimonial:nth-child(1)").css({"transform": "translate(-400%,0)"});
        $("#testimonials-container .testimonial:nth-child(2)").css({"transform": "translate(-300%,0)"});
        $("#testimonials-container .testimonial:nth-child(3)").css({"transform": "translate(-200%,0)"});
        $("#testimonials-container .testimonial:nth-child(4)").css({"transform": "translate(-100%,0)"});
        $("#testimonials-container .testimonial:nth-child(5)").css({"transform": "translate(0,0)"});
    }

    if (inReverse) {
        currentSlide -= 1;
        if (currentSlide === 0) {
            currentSlide = 1;
            inReverse = false;
        }
    } else {
        currentSlide += 1;
        if (currentSlide === 6) {
            currentSlide = 4;
            inReverse = true;
        }
    }
}

setInterval(rotate, 10000);

// SMOOTH SCROLL

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 800, "swing", function(){
        window.location.hash = hash;
      });
    }
  });
});

// BOLDS CURRENT DAY AND HOURS IN LOCATION/HOURS AND FOOTER SECTIONS

var currentDate = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var hours = ["Closed", "10:00am - 4:00pm", "10:00am - 4:00pm", "10:00am - 4:00pm", "10:00am - 4:00pm", "10:00am - 4:00pm", "10:00am - 2:00pm"];
for (var i = 0; i <= 6; i++) {
    if (currentDate.getDay() == i) {
        $(".hours-left-column").append("<p><strong>" + days[i] + "</strong></p>");
        $(".hours-right-column").append("<p><strong>" + hours[i] + "</strong></p>");
    } else {
        $(".hours-left-column").append("<p>" + days[i] + "</p>");
        $(".hours-right-column").append("<p>" + hours[i] + "</p>");
    }
}

function currentlyClosed() {
    $("#smart-hours").html("Currently Closed");
    $("#smart-hours").css({"color": "#a94442", "font-weight": "bold"});
}
function closingSoon(s) {
    $("#smart-hours").html("Closing " + s);
    $("#smart-hours").css({"color": "#af8103", "font-weight": "bold"});
}
function currentlyOpen() {
    $("#smart-hours").html("Currently Open");
    $("#smart-hours").css({"color": "#00a803", "font-weight": "bold"});
}
function openingSoon(s) {
    $("#smart-hours").html("Opening " + s);
    $("#smart-hours").css({"color": "#9daa03", "font-weight": "bold"});
}
var hour = currentDate.getHours();
var minute = currentDate.getMinutes();
var day = days[currentDate.getDay()];

if (currentDate.getMonth() == 2 && currentDate.getDate() == 30 && currentDate.getFullYear() == 2024) {
  $("#smart-hours").html("Closed for Easter");
  $("#smart-hours").css({ color: "#a94442", "font-weight": "bold" });
} else if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
    if (hour <= 8 || (hour == 16 && minute >= 1) || hour >= 17) // 12:00am - 8:59am, 4:01pm - 11:59pm
        currentlyClosed();
    else if (hour == 9) // 9:00am - 9:59am
        openingSoon("Soon");
    else if ((hour >= 10 && hour <= 14)) // 10:00am - 2:59pm
        currentlyOpen();
    else if (hour == 15 || (hour == 16 && minute == 0)) // 3:00pm - 4:00pm
        closingSoon("Soon");
} else if (day == "Saturday") {
    if (hour <= 8 || (hour == 14 && minute >= 1) || hour >= 15) // 12:00am - 8:59am, 2:01pm - 11:59pm
        currentlyClosed();
    else if (hour == 9) // 9:00am - 9:59am
        openingSoon("Soon");
    else if ((hour >= 10 && hour <= 12)) // 10:00am - 12:59pm
        currentlyOpen();
    else if (hour == 13 || (hour == 14 && minute == 0)) // 1:00pm - 2:00pm
        closingSoon("Soon");
} else if (day == "Sunday")
    currentlyClosed();

// CONTACT FORM INPUT VALIDATION

jQuery(document).ready(function ($) {
    $("#contact-form").submit(function() {
        if ($("#name-input").val() == "") {
            $("#name-input").removeClass("success");
            $("#name-input").addClass("error");
        } else {
            $("#name-input").removeClass("error");
            $("#name-input").addClass("success");
        }

        if ($("#email-address-input").val() == "") {
            $("#email-address-input").removeClass("success");
            $("#email-address-input").addClass("error");
        } else {
            $("#email-address-input").removeClass("error");
            $("#email-address-input").addClass("success");
        }

        if ($("#phone-input").val() == "") {
            $("#phone-input").removeClass("success");
        } else {
            $("#phone-input").addClass("success");
        }

        if ($("#subject-input").val() == "") {
            $("#subject-input").removeClass("success");
        } else {
            $("#subject-input").addClass("success");
        }

        if ($("#message-input").val() == "") {
            $("#message-input").removeClass("success");
            $("#message-input").addClass("error");
        } else {
            $("#message-input").removeClass("error");
            $("#message-input").addClass("success");
        }

        if ($("#name-input").val() != "" && $("#email-address-input").val() != "" && $("#message-input").val() != "")
            return true;
        else
            return false;
    });
});
