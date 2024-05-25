// 1:

let people: {
  friends: {
    firstName: string;
    lastName: string;
  }[];
} = {
  friends: [],
};

// 2:

let friend1 = {
  firstName: "Imran",
  lastName: "Khan",
};

let friend2 = {
  firstName: "Mohammad",
  lastName: "Khan",
};

let friend3 = {
  firstName: "Ali",
  lastName: "Khan",
};

// 3:

people.friends.push(friend1);
people.friends.push(friend2);
people.friends.push(friend3);

// 4:

console.log(`Name: Hanzala, Friend List:`);

people.friends.forEach((friend) => {
  console.log(`${friend.firstName} ${friend.lastName}`);
});