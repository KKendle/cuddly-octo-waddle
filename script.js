function Friend(firstName, lastName, number, street, state, zipcode) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.number = number;
  this.street = street;
  this.state = state;
  this.zipcode = zipcode;
}

var bill = new Friend("Bill", "Gates", "(123)456-7890", "111 Someplace", "Washington", "999999");
var steve = new Friend("Steve", "Jobs", "(098)765-4321", "222 Nopeville", "California", "111111");

var list = function(object) {
    for(var key in object) {
        console.log(key);
    }
}
var search = function(name) {
    for(var key in friend) {
        if(friend[key].firstName === name) {
            console.log(friend[key]);
            return friend[key];
        }
        else {
          return console.log("Person not found");
        }
    }
}

Friend.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Friend.prototype.address = function() {
  return this.street + " " + this.state + ", " + this.zipcode;
}

Friend.prototype.call = function() {
  return "Calling " + this.fullName() + " at " + this.number;
}
