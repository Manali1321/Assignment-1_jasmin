// md5Encrypt spec
// checking hash value by username
describe('test to pass: md5Encryptsec', function () {
  it("should return a string of the hashed value", function () {
    expect(md5Encrypt('manali')).toEqual("0f225be8b644498c25dd421a12e7cbeb");
  });
  // checking hash value by password
  it("should return a string of the hashed value", function () {
    expect(md5Encrypt('123')).toEqual("202cb962ac59075b964b07152d234b70");
  });
});

// log in spec
// log in with right value
describe('test to pass: Login Spec', function () {
  it("should use the md5Encrypt function, and return the Boolean true", function () {
    expect(checkLogin('manali', '123')).toEqual(true);
  });
});
// with wrong value
describe('test to fail: Login Spec with wrong input', function () {
  it("should return ‘Invalid Username or Password.’", function () {
    expect(checkLogin('manaliddddd', '123')).toEqual("Invalid Username or Password.");
  });
  it("should return ‘Invalid Username or Password.’", function () {
    expect(checkLogin('manali', '12345')).toEqual("Invalid Username or Password.");
  });
  it("should return ‘Invalid Username or Password.’", function () {
    expect(checkLogin('nidhi', '789')).toEqual("Invalid Username or Password.");
  });
});
// no username
describe('test to fail: Login Spec with no username', function () {
  it("should return ‘No username entered.’", function () {
    expect(checkLogin('', '123')).toEqual("No username entered.");
  });
});
// no password
describe('test to fail: Login Spec with no password', function () {
  it("should return ‘No password entered.’", function () {
    expect(checkLogin('manali', '')).toEqual("No password entered.");
  });
});
