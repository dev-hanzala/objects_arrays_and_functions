// 1:
var people = {
    friends: [],
};
// 2:
var friend1 = {
    firstName: "Imran",
    lastName: "Khan",
};
var friend2 = {
    firstName: "Mohammad",
    lastName: "Khan",
};
var friend3 = {
    firstName: "Ali",
    lastName: "Khan",
};
// 3:
people.friends.push(friend1);
people.friends.push(friend2);
people.friends.push(friend3);
// 4:
console.log("Name: Hanzala, Friend List:");
people.friends.forEach(function (friend) {
    console.log("".concat(friend.firstName, " ").concat(friend.lastName));
});
