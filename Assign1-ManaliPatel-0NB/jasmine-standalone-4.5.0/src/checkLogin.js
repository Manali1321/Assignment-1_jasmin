/**
 * checkLogin function to check input value.
 * IF it empty string or wrong username and password it will show error.
 * @param {username, password}; return valid or not
 * Expect: if username and password is right: get hidden block and show you value
 */
function checkLogin(username, password) {
  var name = "Manali";
  var mypassword = "manali123";

  var myName = md5Encrypt(name);
  var myPassword = md5Encrypt(mypassword);
  console.log(myName, myPassword);


  // console.log(username, password);
  var userPassword = md5Encrypt(password);
  var userUsername = md5Encrypt(username);
  if (encrypt_name === "") {
    // return "emptry username";
  }
}
