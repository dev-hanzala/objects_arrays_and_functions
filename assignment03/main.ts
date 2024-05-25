// 1:

let inventory: {
	name: string;
	model: number;
	price: number;
	quantity: number;
}[] = [];

// 2:

let product1 = {
	name: "Juicer",
	model: 3,
	price: 100,
   quantity: 10,
};

let product2 = {
	name: "Mixer",
   model: 4,
   price: 200,
   quantity: 20,
};

let product3 = {
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

console.log(`Stove quantity: ${inventory[2].quantity}`);