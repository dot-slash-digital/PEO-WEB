// Contact Form
jQuery(document).ready(function ($) {
    $("#contact-form").submit(function() {
        if ($("#contact-name-input").val() == "") {
            $("#contact-name-input").removeClass("success");
            $("#contact-name-input").addClass("error");
        } else {
            $("#contact-name-input").removeClass("error");
            $("#contact-name-input").addClass("success");
        }

        if ($("#contact-email-input").val() == "") {
            $("#contact-email-input").removeClass("success");
            $("#contact-email-input").addClass("error");
        } else {
            $("#contact-email-input").removeClass("error");
            $("#contact-email-input").addClass("success");
        }

        if ($("#contact-phonenumber-input").val() == "") {
            $("#contact-phonenumber-input").removeClass("success");
        } else {
            $("#contact-phonenumber-input").addClass("success");
        }

        if ($("#contact-subject-input").val() == "") {
            $("#contact-subject-input").removeClass("success");
        } else {
            $("#contact-subject-input").addClass("success");
        }

        if ($("#contact-message-input").val() == "") {
            $("#contact-message-input").removeClass("success");
            $("#contact-message-input").addClass("error");
        } else {
            $("#contact-message-input").removeClass("error");
            $("#contact-message-input").addClass("success");
        }

        if ($("#contact-name-input").val() != "" && $("#contact-email-input").val() != "" && $("#contact-message-input").val() != "")
            return true;
        else
            return false;
    });
});

// Interest Form
jQuery(document).ready(function ($) {
    $("#interest-form").submit(function() {
        if ($("#interest-name-input").val() == "") {
            $("#interest-name-input").removeClass("success");
            $("#interest-name-input").addClass("error");
        } else {
            $("#interest-name-input").removeClass("error");
            $("#interest-name-input").addClass("success");
        }

        if ($("#interest-email-input").val() == "") {
            $("#interest-email-input").removeClass("success");
            $("#interest-email-input").addClass("error");
        } else {
            $("#interest-email-input").removeClass("error");
            $("#interest-email-input").addClass("success");
        }

        if ($("#interest-phonenumber-input").val() == "") {
            $("#interest-phonenumber-input").removeClass("success");
        } else {
            $("#interest-phonenumber-input").addClass("success");
        }

        if ($("#interest-subject-input").val() == "") {
            $("#interest-subject-input").removeClass("success");
        } else {
            $("#interest-subject-input").addClass("success");
        }

        if ($("#interest-comments-input").val() == "") {
            $("#interest-comments-input").removeClass("success");
        } else {
            $("#interest-comments-input").addClass("success");
        }

        if ($("#interest-name-input").val() != "" && $("#interest-email-input").val() != "")
            return true;
        else
            return false;
    });
});

// Bolds the current day and its corresponding open hours in the 'Locations' section
var currentDate = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var hours = ["Closed", "10:00am - 4:00pm", "10:00am - 4:00pm", "10:00am - 4:00pm", "10:00am - 4:00pm", "10:00am - 4:00pm", "10:00am - 2:00pm"];
for (var i = 0; i <= 6; i++) {
    if (currentDate.getDay() == i) {
        $(".days").append("<p><strong>" + days[i] + "</strong></p>");
        $(".hours").append("<p><strong>" + hours[i] + "</strong></p>");
    } else {
        $(".days").append("<p>" + days[i] + "</p>");
        $(".hours").append("<p>" + hours[i] + "</p>");
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

// Smart Hours
var hour = currentDate.getHours();
var minute = currentDate.getMinutes();
var day = days[currentDate.getDay()];

if (currentDate.getMonth() == 2 && currentDate.getDate() <= 31 && currentDate.getFullYear() == 2020) {
    $("#smart-hours").html("Closed until April 1st (due to COVID-19 mandate),<br /> by appointment only");
    $("#smart-hours").css({"color": "#a94442", "font-weight": "bold"});
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
} else if (day == "Sunday") // closed on Sundays
    currentlyClosed();

// Set all reviews to same height
function reviewHeight() {
    var tallestSlide = -1;
    $(".slide-testimonial").each(function() {
        $(this).height("auto");
        if ($(this).height() > tallestSlide)
            tallestSlide = $(this).height();
    });

    $(".slide-testimonial").each(function() {
        $(this).height(tallestSlide);
    });
}
$(reviewHeight());
$(window).resize(function() {
    reviewHeight();
});

// Set heights for brand logos
jQuery(document).ready(function() {
    $(".owl-item").each(function() {
        if ($(this).height() < $(".owl-stage-outer").height()) {
            $(this).css({"margin-top": (($(".owl-stage-outer").height() - $(this).height()) / 2)});
            $(this).css({"margin-bottom": (($(".owl-stage-outer").height() - $(this).height()) / 2)});
        }
    });
});

$("#email-banner-close i").click(function() {
    $("#email-banner").css("display", "none");
    $("#footer").css("margin-bottom", 0);
});

$("#footer").css("margin-bottom", $("#email-banner").height());

jQuery(document).ready(function ($) {
    $("#testimonials-container .testimonial").each(function() {
        marginHeight = ($("#testimonials-container").height() - $(this).height() - 42) / 2;
        $(this).css({"margin-top": marginHeight, "margin-bottom": marginHeight});
    });

    var currentSlide = 1;
    var inReverse = false;
    function rotate() {
        if (currentSlide === 1) {
            $("#testimonials-container .testimonial:nth-child(1)").css({"transform": "translateX(0)"});
            $("#testimonials-container .testimonial:nth-child(2)").css({"transform": "translateX(100%)"});
            $("#testimonials-container .testimonial:nth-child(3)").css({"transform": "translateX(200%)"});
            $("#testimonials-container .testimonial:nth-child(4)").css({"transform": "translateX(300%)"});
            $("#testimonials-container .testimonial:nth-child(5)").css({"transform": "translateX(400%)"});
        } else if (currentSlide === 2) {
            $("#testimonials-container .testimonial:nth-child(1)").css({"transform": "translateX(-100%)"});
            $("#testimonials-container .testimonial:nth-child(2)").css({"transform": "translateX(0)"});
            $("#testimonials-container .testimonial:nth-child(3)").css({"transform": "translateX(100%)"});
            $("#testimonials-container .testimonial:nth-child(4)").css({"transform": "translateX(200%)"});
            $("#testimonials-container .testimonial:nth-child(5)").css({"transform": "translateX(300%)"});
        } else if (currentSlide === 3) {
            $("#testimonials-container .testimonial:nth-child(1)").css({"transform": "translateX(-200%)"});
            $("#testimonials-container .testimonial:nth-child(2)").css({"transform": "translateX(-100%)"});
            $("#testimonials-container .testimonial:nth-child(3)").css({"transform": "translateX(0)"});
            $("#testimonials-container .testimonial:nth-child(4)").css({"transform": "translateX(100%)"});
            $("#testimonials-container .testimonial:nth-child(5)").css({"transform": "translateX(200%)"});
        } else if (currentSlide === 4) {
            $("#testimonials-container .testimonial:nth-child(1)").css({"transform": "translateX(-300%)"});
            $("#testimonials-container .testimonial:nth-child(2)").css({"transform": "translateX(-200%)"});
            $("#testimonials-container .testimonial:nth-child(3)").css({"transform": "translateX(-100%)"});
            $("#testimonials-container .testimonial:nth-child(4)").css({"transform": "translateX(0)"});
            $("#testimonials-container .testimonial:nth-child(5)").css({"transform": "translateX(100%)"});
        } else if (currentSlide === 5) {
            $("#testimonials-container .testimonial:nth-child(1)").css({"transform": "translateX(-400%)"});
            $("#testimonials-container .testimonial:nth-child(2)").css({"transform": "translateX(-300%)"});
            $("#testimonials-container .testimonial:nth-child(3)").css({"transform": "translateX(-200%)"});
            $("#testimonials-container .testimonial:nth-child(4)").css({"transform": "translateX(-100%)"});
            $("#testimonials-container .testimonial:nth-child(5)").css({"transform": "translateX(0)"});
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
    rotate();
});
