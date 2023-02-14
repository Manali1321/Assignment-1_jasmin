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