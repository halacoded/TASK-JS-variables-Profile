// `index.js` you should define the following variables with these exact names:

// 1. `fullName` -> assign it a value of your full name
// 2. `yearOfBirth` -> assign it a value of your year of birth
// 3. `hobby` -> assign it a value of your favorite hobby
// 4. `funFact` -> assign it a value of some fun fact about yourself
// 5. `image` -> assign it a value of a url of your image or any image that represents you online

// This what it should look like

const fullName = "hala saleh Almutari";
const yearOfBirth = 2003;
let hobby = "coding";
let funFact = "am chess master";
const image =
  "https://yt3.googleusercontent.com/ytc/AIdro_kc88pzshO-NK5Er5UvAc2ScNw9wh3e1mMLFaqYDsRPog=s160-c-k-c0x00ffffff-no-rj";

//   1. `fullNameString` -> assign it to: "My name is {YOUR_FULL_NAME}"
// 2. `yearOfBirthString` -> assign it to: "I am {YOUR_AGE}" (make sure you calculate your age from your year of birth)
// 3. `hobbyString` -> assign it to: "My hobby is {YOUR_HOBBY}"
let current_year = 2024;
let age = current_year - yearOfBirth;
let fullNameString = `My name is ${fullName}`;
let yearOfBirthString = `I am ${age}`;
let hobbyString = `My hobby is ${hobby}`;

/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let stars = 0;

function incrementBy1() {
  // Increment stars by 1 👇🏻
  stars++;
}
function decrementBy1() {
  // decrement stars by 1 👇🏻
  stars--;
}

function incrementBy2() {
  // Increment stars by 2 👇🏻
  stars += 2;
}
function decrementBy2() {
  // decrement stars by 2 👇🏻
  stars -= 2;
}
