// Task 1: Variables and Data Types

let employeeName = "Rio Patel";
const employeeID = 420;
var isActive = true;

console.log(employeeName, typeof(employeeName) );
console.log(employeeID, typeof(employeeID));
console.log(isActive, typeof(isActive));


// Task 2: Compound Data Types

let products = ["IPhone 12", "LG Remote", "OmniBreeze Fan"];
const productDetails = {
    name: products,
    price: 3400,
    inStock: 5,
}

console.log(products, productDetails);


// Task 3: Assignment Operators

let amountBalance = 350000;
amountBalance += 2000;
console.log(amountBalance);
amountBalance -= 4000;
console.log(amountBalance)
amountBalance *= 200;
console.log(amountBalance)
amountBalance /= 5;
console.log(amountBalance)
amountBalance %= 4;
console.log(amountBalance)

// Task 4: Comparison Operators

let employeeScore1 = 35
let employeeScore2 = 50

console.log(employeeScore1 > employeeScore2);
console.log(employeeScore1 < employeeScore2);
console.log(employeeScore1 >= employeeScore2);
console.log(employeeScore1 <= employeeScore2);
console.log(employeeScore1 === employeeScore2);
console.log(employeeScore1 !== employeeScore2);


// Task 5: Logical Operators

let hasKeyCard = true;
let hasPermission = false;

console.log(hasKeyCard && hasPermission);
console.log(hasKeyCard || hasPermission);
console.log(!hasKeyCard);





