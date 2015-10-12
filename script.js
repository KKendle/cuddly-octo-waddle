var friends = {};

friends.bill = {
    firstName: "Bill",
    lastName: "Gates",
    number: "(123)456-7890",
    address: ["111 Someplace", "Washington", "99999"]
}
friends.steve = {
    firstName: "Steve",
    lastName: "Jobs",
    number: "(098)765-4321",
    address: ["222 Nopeville", "California", "11111"]
}

var list = function(object) {
    for(var key in object) {
        console.log(key);
    }
}
var search = function(name) {
    for(var key in friends) {
        if(friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
        }
    }
}
