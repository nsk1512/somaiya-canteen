var stripe = Stripe('pk_test_hSd6sfCAFsvHFkLvLx3EKkNO00crIKDOP7');

var $form = $('#checkout-form');

$form.submit(function (event) {
    $form.find('button').prop('disabled', true);
    Stripe.card.createToken({
        number: $('#card-number').val(),
        cvc: $('#card-cvc').val(),
        exp_month: $('#card-expiry-month').val(),
        exp_year: $('#card-expiry-year').val(),
        name: $('#name').val()
    },stripeResponseHandler);
    return false;

});

function stripeResponseHandler(status, response) {

    if (response.error){
        $('#charge-error').text(response.error.message);
        $('#charge-error').removeClass('hidden');

        $form.find('button').prop('disabled', false);
    } else {
        //Token Created
        //Get token Id
        var token=response.id;

        //Insert token in the form
        $form.append($('<input type="hidden" name="stripeToken"/>').val(token));

        //Submit the form
        $form.get(0).submit();

    }

}