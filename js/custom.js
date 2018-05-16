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

// Bolds the current day and its corresponding open hours in the 'Locations' section
var currentDate = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var hours = ["Closed", "9:30am - 5:30pm", "9:30am - 5:30pm", "9:30am - 5:30pm", "9:30am - 5:30pm", "9:30am - 5:30pm", "10:00am - 2:00pm"];
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

if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
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