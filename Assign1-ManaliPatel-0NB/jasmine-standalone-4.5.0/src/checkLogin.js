/**
 * checkLogin function to check input value.
 * IF it empty string or wrong username and password it will show error.
 * @param {username, password}; return valid or not
 * Expect: if username and password is right: get hidden block and show you value
 */
function checkLogin(username, password) {
  "use strict";
  var name = "manali";
  var mypassword = "123";

  var myName = md5Encrypt(name);
  var myPassword = md5Encrypt(mypassword);
  console.log(myName, myPassword);

  // console.log(username, password);
  var userUsername = md5Encrypt(username);
  var userPassword = md5Encrypt(password);
  console.log(userUsername, userPassword);

  var output_msg = "";
  if (username == "") {
    output_msg = "No username entered.";
    output.innerHTML = output_msg;
  } else if (password == "") {
    output_msg = "No password entered.";
    output.innerHTML = output_msg;
  } else if (myName === userUsername && myPassword === userPassword) {
    output_msg = true;
    output.innerHTML = output_msg;
  } else if (myName != userUsername || myPassword != userPassword) {
    output_msg = 'Invalid Username or Password.';
    output.innerHTML = output_msg;
  }
  return output_msg;

};

