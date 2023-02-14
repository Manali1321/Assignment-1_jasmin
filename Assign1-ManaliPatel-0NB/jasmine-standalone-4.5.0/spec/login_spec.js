// log in spec
describe('test to pass: Login Spec', function () {
  it("should use the md5Encrypt function, and return the Boolean true", function () {
    expect(checkLogin('manali', '123')).toEqual(true);
  });
});
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
describe('test to fail: Login Spec with no username', function () {
  it("should return ‘No username entered.’", function () {
    expect(checkLogin('', '123')).toEqual("No username entered.");
  });
});
describe('test to pass: Login Spec with no password', function () {
  it("should return ‘No password entered.’", function () {
    expect(checkLogin('manali', '')).toEqual("No password entered.");
  });
});
