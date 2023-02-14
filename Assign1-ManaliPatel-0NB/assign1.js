window.onload = function () {

    "use strict";
    var form = document.forms.form;
    var output = document.getElementById("output");
    output.style.display = 'hide';

    function form_validate() {
        var input__name = form.username__field;
        var input__password = form.userpassword__field;
        var result = checkLogin(input__name.value, input__password.value);
        console.log(result);
        // if (result === true) {
        //     output.innerHTML = "welcome back" + input__name.value + "!";
        // } else {
        //     output.innerHTML = result;
        // }
        output.style.display = 'block';
        return false;
    };
    form.onsubmit = form_validate;
};
