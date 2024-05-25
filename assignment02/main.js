var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
var rearrangedArray = scrambledArray;
rearrangedArray.splice(2, 2);
rearrangedArray.unshift(rearrangedArray[5]);
rearrangedArray.pop();
rearrangedArray.splice(1, 0, rearrangedArray[3], rearrangedArray[4]);
rearrangedArray.splice(5, 2);
console.log(rearrangedArray.join(' '));
