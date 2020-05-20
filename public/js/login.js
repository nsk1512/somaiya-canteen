// Toggle Function
$('.toggle').click(function () {
    // Switches the Icon
    $(this).children('i').toggleClass('fa-pencil');



    $(this).children('div').first().text(($(this).children('div').first().text() == 'Register') ? 'Sign in' : 'Register').fadeIn();



    // Switches the forms  
    $('.form').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: "toggle"
    }, "slow");
});