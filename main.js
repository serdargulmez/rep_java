let tstString = "...starting program"
console.log(tstString);

let subStrings = tstString.split(" ");
console.log(subStrings.length);
console.log(subStrings.at(0));
console.log(subStrings.at(1));

// Assign 20 variables to an array and print them sequentially
let variablesArray = [];
for (let i = 1; i <= 20; i++) {
  variablesArray.push(`variable${i}`);
}

variablesArray.forEach((value) => {
  console.log(value);
});
