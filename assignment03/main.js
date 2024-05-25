// 1:
var inventory = [];
// 2:
var product1 = {
    name: "Juicer",
    model: 3,
    price: 100,
    quantity: 10,
};
var product2 = {
    name: "Mixer",
    model: 4,
    price: 200,
    quantity: 20,
};
var product3 = {
    name: "Stove",
    model: 5,
    price: 300,
    quantity: 30,
};
// 3:
inventory.push(product1);
inventory.push(product2);
inventory.push(product3);
// 4:
console.log("Stove quantity: ".concat(inventory[2].quantity));
