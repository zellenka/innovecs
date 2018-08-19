$(document).ready(function() {
    // change phone number code depending on country
    $('#country').on('change', function() {
        var country = this.value;
        var code = $(".country-code");
        var codeInput = $("#code");
        switch (country) {
            case "Romania":
                code.text("+40000");
                codeInput.attr('value', '+40000');
                break;
            case "Ukraine":
                code.text("+380");
                codeInput.attr('value', '+380');
                break;
            default:
                code.text("choose country");
        }
    });
});