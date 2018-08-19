jQuery(document).ready(function($) {
    $(".form").submit(function() {

        var th = $(this);
        var firstName = $("input[name*='FirstName']");
        var lastName = $("input[name*='LastName']");
        var mail = $("input[name*='Email']");
        var phone = $("input[name*='Phone']");


           // reset errors
        $(".errors").text('');
        $(".form-input").removeClass('has-error');


            //erorrs
        function errorsChek() {

            var x = true;

            if (firstName.val() === "") {
                $('.first-name-error').text('Please enter your first name.');
                firstName.addClass('has-error');
                x = false;

            } else if (firstName.val().length <= 3) {
                $('.first-name-error').text('First name must contain more than three letters.');
                firstName.addClass('has-error');
                x = false;
            }

            if (lastName.val() === "") {
                $('.last-name-error').text('Please enter your last name.');
                lastName.addClass('has-error');

            } else if (firstName.val().length <= 3) {
                $('.last-name-error').text('Last name must contain more than three letters.');
                lastName.addClass('has-error');
                x = false;
            }

            function validateEmail(email) {
                var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }

            if (mail.val() === "") {
                $('.mail-error').text('Please enter email.');
                mail.addClass('has-error');
                x = false;

            } else if (!validateEmail(mail.val())) {
                $('.mail-error').text('Email not vaild.');
                mail.addClass('has-error');
                x = false;
            }

            if (phone.val() === "") {
                $('.phone-error').text('Please enter your phone number.');
                phone.addClass('has-error');
                x = false;

            } else if (phone.val().length < 7) {
                $('.phone-error').text('Phone number should contain 7 or more chars.');
                phone.addClass('has-error');
                x = false;

            }

            return x;

        }



        if (errorsChek()) {
            
            $.ajax({
                type: "POST",
                url: "/mail.php",
                data: th.serialize(),
                success: function(result) {
                    $(".form").fadeOut(700);
                    $(".result").text(result);
                    $(".result").fadeIn(700);
                }
            }).done(function() {
                setTimeout(function() {
                    // Done Functions
                    th.trigger("reset");
                }, 1000);
            });
            return false;
        }
        return false;
    });

});