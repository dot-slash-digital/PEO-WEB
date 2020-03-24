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
var hours = ["Closed", "Closed", "Closed", "Closed", "Closed", "Closed", "Closed"];
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
    $("#smart-hours").html("Closed until April 1st (due to COVID-19 mandate)");
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

if (currentDate.getMonth() == 3 && currentDate.getDate() <= 31 && currentDate.getFullYear() == 2020) {
    currentlyClosed();
} else if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
    if ( hour < 6 || hour > 17 || (hour == 17 && minute > 30) ) // 12:00am - 5:59am, 5:31pm - 11:59pm
        currentlyClosed();
    else if ( (hour >= 6 && hour < 8) || (hour == 8 && minute == 0) ) // 6:00am - 8:00am
        openingSoon(" in " + Math.round(9.5 - hour - (minute / 60)) + " hours");
    else if ( hour == 8 || (hour == 9 && minute < 30) ) // 8:01am - 9:29am
        openingSoon("Soon");
    else if ( (hour == 9 && minute >= 30) || (hour >= 10 && hour <= 15) || (hour == 16 && minute < 30) ) // 9:30am - 4:29pm
        currentlyOpen();
    else if (hour == 16 && minute == 30) // 4:30pm
        closingSoon("in 1 hour");
    else if (hour == 16 && minute >= 30) // 4:31pm - 4:59pm
        closingSoon("in " + (90 - minute) + " minutes");
    else if (hour == 17 && minute < 29) // 5:00pm - 5:28pm
        closingSoon("in " + (30 - minute) + " minutes");
    else if (hour == 17 && minute == 29) // 5:29pm
        closingSoon("in 1 minute");
    else if (hour == 17 && minute == 30) // 5:30pm
        closingSoon("Now");
} else if (day == "Saturday") {
    if (hour < 6 || hour > 14 || (hour == 14 && minute >= 1)) // 12:00am - 5:59am, 2:01pm - 11:59pm
        currentlyClosed();
    else if (hour == 6 || hour == 7 || (hour == 8 && minute <= 29)) // 6:00am - 8:29am
        openingSoon("in " + Math.round(10 - hour - (minute / 60)) + " hours");
    else if ( (hour == 8 && minute >= 30) || (hour == 9 && minute == 0) ) // 8:30am - 9:00am
        openingSoon("in 1 hour");
    else if (hour == 9) // 9:01am - 9:59am
        openingSoon("Soon");
    else if (hour >= 10 && hour <= 12 ) // 10:00am - 12:59pm
        currentlyOpen();
    else if (hour == 13 && minute == 0) // 1:00pm
        closingSoon("in 1 hour");
    else if (hour == 13 && (minute >= 1 && minute <= 58)) // 1:01pm - 1:58pm
        closingSoon("in " + (60 - minute) + " minutes");
    else if (hour == 13 && minute == 59) // 1:59pm
        closingSoon("in 1 minute");
    else if (hour == 14 && minute == 0) // 2:00pm
        closingSoon("Now");
    
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