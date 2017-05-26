/**
 * 
 * 
 * @param {String} firstAndLast 
 * @returns 
 */
var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly

  let first = firstAndLast.split(' ')[0];
  let last = firstAndLast.split(' ')[1];

  this.getFullName = function() {
    return first + ' ' + last;
  };
  this.getLastName = () => {
    return last;
  };
  this.getFSirstName = () => {
    return first;
  };
  this.setLastName = val => {
    last = val;
  };
  this.setFirstName = val => {
    first = val;
  };
  this.setFullName = val => {
    first = val.split(' ')[0];
    last = val.split(' ')[1];
  };
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(bob.setLastName('Lastname'));
console.log(bob.getFullName());
