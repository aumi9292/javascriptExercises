let Account = {
  init(email, password, firstName, lastName) {
    this.prototype = {};
    this.prototype.email = email;
    this.prototype.password = password;
    this.prototype.firstName = firstName,
    this.prototype.lastName = lastName;
    this.displayName = function generateDisplayName() {
      let alpha = 'abcdefghijklmnopqrstuvwxyz';
      let num = '0123456789';
      let display = '';
      for (let letterIdx = 0; letterIdx < 8; letterIdx++) {
        display += (alpha[Math.floor(Math.random() * alpha.length)]);
      }
      for (let numIdx = 0; numIdx < 8; numIdx++) {
        display += (num[Math.floor(Math.random() * num.length)]);
      }
      return display;
    }();
    return this;
  },
  reanonymize(currentPw) {
    if (currentPw !== this.prototype.password) return 'Invalid Password';
    this.displayName = function generateDisplayName() {
      let alpha = 'abcdefghijklmnopqrstuvwxyz';
      let num = '0123456789';
      let display = '';
      for (let letterIdx = 0; letterIdx < 8; letterIdx++) {
        display += (alpha[Math.floor(Math.random() * alpha.length)]);
      }
      for (let numIdx = 0; numIdx < 8; numIdx++) {
        display += (num[Math.floor(Math.random() * num.length)]);
      }
      return display;
    }();
    return true;
  },
  resetPassword(currentPw, newPw) {
    if (currentPw !== this.prototype.password) return 'Invalid Password';
    this.prototype.password = newPw;
    return true;
  },
  firstName(currentPw) {
    if (currentPw !== this.prototype.password) return 'Invalid Password';
    return this.prototype.firstName;
  },
  lastName(currentPw) {
    if (currentPw !== this.prototype.password) return 'Invalid Password';
    return this.prototype.lastName;
  },
  email(currentPw) {
    if (currentPw !== this.prototype.password) return 'Invalid Password';
    return this.prototype.email;
  },
};


const fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function

console.log(fooBar);
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

const displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false