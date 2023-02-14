/**
 * checkLogin function to check input value.
 * IF it empty string or wrong username and password it will show error_msg.
 * @param {string, string} {username, password}
 * Expect: if username and password is right: get hidden block and show you output_msg
 */
// passing input param
function checkLogin(username, password) {
  "use strict";

  // store username and password
  var name = "manali";
  var mypassword = "123";

  // covert username and password in to md5encrypt
  var myName = md5Encrypt(name);
  var myPassword = md5Encrypt(mypassword);
  // console.log(myName, myPassword);

  // convert user input log in value in to md5encrypt
  var userUsername = md5Encrypt(username);
  var userPassword = md5Encrypt(password);
  // console.log(userUsername, userPassword);

  // create a var to enter output_msg
  var output_msg = "";

  if (username == "") {
    output_msg = "No username entered.";
  } else if (password == "") {
    output_msg = "No password entered.";
    // output.innerHTML = output_msg;
  } else if (myName === userUsername && myPassword === userPassword) {
    output_msg = true;
    // output.innerHTML = output_msg;
  } else if (myName != userUsername || myPassword != userPassword) {
    output_msg = 'Invalid Username or Password.';
    // output.innerHTML = output_msg;
  }
  return output_msg;

};

