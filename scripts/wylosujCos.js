function generateDiscount() {
    return Math.floor(Math.random() * 21);
}

function generateDiscountCode() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var code = '';
    for (var i = 0; i < 8; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
}

function showFortuneWheel() {
    var dialogOptions = {
        autoOpen: true,
        modal: true,
        width: 300,
        buttons: [{
            text: "Zamknij",
            click: function() {
                $(this).dialog("close");
            }
        }]
    };

    $("#dialog").dialog(dialogOptions);

    var discount = generateDiscount();

    var discountCode = generateDiscountCode();

    $('#wylosujCos').html('<p>Gratulacje! Twój rabat wynosi: <strong>' + discount + '%</p></strong>' +
        '<p>Twój kod rabatowy to: <strong>' + discountCode + '</strong></p>');
}

$(document).ready(function() {
    $('#openDialog').click(function() {
        showFortuneWheel();
    });
});
