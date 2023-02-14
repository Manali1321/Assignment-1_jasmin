window.onload = function () {

    "use strict";
    var form = document.forms.form;
    var output = document.getElementById("output");
    // hide a output div
    output.style.display = 'hide';

    function form_validate() {
        // store input__name
        var input__name = form.username__field;
        // store password
        var input__password = form.userpassword__field;

        // collected both input value and pass to checkLogin function
        var result = checkLogin(input__name.value, input__password.value);

        // returned output_msg stored in var result
        if (result == true) {
            output.innerHTML = "Welcome back!";
        } else {
            output.innerHTML = result;
        }
        output.style.display = 'block';
        return false;
    };
    form.onsubmit = form_validate;
};
