window.onload = function () {

    "use strict";
    var form = document.forms.form;
    var output = document.getElementById("output");

    function form_validate() {
        var input__name = form.username__field;
        var input__password = form.userpassword__field;
        // return (input__name.value, input__password.value);
        checkLogin(input__name.value, input__password.value);
        return false;
    }
    form.onsubmit = form_validate;
}
