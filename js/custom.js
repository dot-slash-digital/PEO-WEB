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