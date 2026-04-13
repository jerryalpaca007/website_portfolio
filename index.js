/*console.log("hello");

document.getElementById("pid").textContent = "Welcome to my webpage";
let x = 123;
console.log(typeof x);
console.log(`this is your number ${x}`);

let h = "random@gmail.com";
console.log(`the given gmail is ${h}`);

x--;
console.log(x);


 1:()
 2:**
 3:*,/,%
 4:+,-

let username;
username = window.prompt("what is your username");
console.log(username);
*/
/*const pi = 3.14;
let radius;
let circumfrence;
document.getElementById("submit").onclick = function () {
  radius = document.getElementById("txtbox").value;
  radius = Number(radius);
  circumfrence = 2 * pi * radius;
  document.getElementById("myh2").textContent = circumfrence + "cm";
};

const dec = document.getElementById("dec");
const inc = document.getElementById("inc");
const reset = document.getElementById("reset");
const cnt = document.getElementById("cnt-no");
let count = 0;

dec.onclick = function () {
  count--;
  cnt.textContent = count;
};

inc.onclick = function () {
  count++;
  cnt.textContent = count;
};

reset.onclick = function () {
  count = 0;
  cnt.textContent = count;
};
*/

/*let time = 18;
if (time <= 8) {
  console.log("good morning");
} else if (time >= 18) {
  console.log("good evening");
} else {
  console.log("good afternoon");
}*/

/*const txt = document.getElementById("mytext");
const su = document.getElementById("mysubmit");
const resele = document.getElementById("result");

let age;
su.onclick = function () {
  age = txt.value;
  age = Number(age);
  if (age < 18) {
    console.log("not old enough");
  } else if (age >= 18) {
    console.log("old enough");
  } else {
    console.log("idek");
  }
};*/

/*const check = document.getElementById("checkbox1");
const check1 = document.getElementById("checkbox2");
const check2 = document.getElementById("checkbox2");
const submit = document.getElementById("newsubmit");
const pdetails = document.getElementById("para");

submit.onclick = function () {
  if (check.checked) {
    pdetails.textContent = "noice";
  } else {
    pdetails.textContent = "nuh uh";
  }

  if (check1.checked) {
    pdetails.textContent = "idk bro";
  } else if (check2.checked) {
    pdetails.textContent = "idek bro";
  }
};*/
/*let age = 19;
let message = age >= 18 ? "youre an adult" : "youre a minor";
console.log(message);

let y = 4;
switch (y) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("friday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;
  default:
    console.log("does not exist");
}*/
/*
let testscore = 100;
let lettergrade;
switch (true) {
  case testscore >= 100:
    lettergrade = "A";
    break;
  case testscore >= 90:
    lettergrade = "B";
    break;
  case testscore >= 80:
    lettergrade = "C";
    break;
}
console.log(lettergrade);
*/
/*let username = "jerry";
let result = username.startsWith(" ");
if (result) {
  console.log("you cant start a username with a space");
} else {
  console.log("continue");
}
*/
/*let phone = "123-456-789";
let newphone = phone.padEnd(16, "0");
console.log(newphone);
*/
/*
const fullname = "jaden p";
let fslice = fullname.slice(0, fullname.indexOf(" "));
let lslice = fullname.slice(fullname.indexOf(" ") + 1);
console.log(fslice);
console.log(lslice);
*/
/*
let username = window.prompt("enter your username");

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extrachars = username.slice(1);
extrachars = extrachars.toLowerCase();
username = letter + extrachars;
console.log(username);
*/
/*
let username = window.prompt("enter your username");
username =
  username.trim().charAt(0).toUpperCase() +
  username.trim().slice(1).toLowerCase();
console.log(username);
*/
/*
const temp = 25;
if (temp > 30 || temp <= 0) {
  console.log("bad weather");
} else {
  console.log("good weather");
}
const pi = 3.14;
if (pi !== "3.14") {
  console.log("that is not pi");
} else {
  console.log("That is  pi");
}
*/
/*
let username = "a";
do {
  username = window.prompt("enter your username");
} while (username === "" || username === null);

console.log("welcome");
*/
/*
let loggedin = true;
let username;
let password;

while (!loggedin);
username = window.prompt("enter username");
password = window.prompt("enter password");
if (username === "user" && password === "user") {
  loggedin = true;
  console.log("logged in");
} else {
  console.log("invalid credentials, try again.");
}
*/
/*
for (let i = 1; i <= 20; i++) {
  if (i == 13) {
    break;
  } else {
    console.log(i);
  }
}
*/

//number guessing game
/*
const minimum = 1;
const maximum = 100;
const answer = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`guess the number from ${minimum} to ${maximum}`);
  guess = Number(guess);
  if (isNaN(guess)) {
    window.alert("enter a valid number");
  } else if (guess < minimum || guess > maximum) {
    window.alert("enter a number within the given range");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("too low try again");
    } else if (guess > answer) {
      window.alert("too high try again");
    } else {
      window.alert(`Correct the answer is ${answer}`);
      running = false;
    }
  }
}
*/
/*
function cool() {
  console.log("cool");
}
cool();
*/
/*
function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}
function iseven(number) {
  return number % 2 == 0 ? true : false;
}
console.log(iseven(20));

function validemail(email) {
  return email.includes("@") ? true : false;
}
console.log(validemail("oofgmail.com"));
*/
/*
const textbox = document.getElementById("textbox2");
const toFahrenheit = document.getElementById("toFahrenheit");
const tocelsius = document.getElementById("tocelsius");
const result = document.getElementById("result1");
let temp;

function convert() {
  if (toFahrenheit.checked) {
    temp = Number(textbox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + "F";
  } else if (tocelsius.checked) {
    temp = Number(textbox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + "C";
  } else {
    result.textCaontent("select a unit");
  }
}
*/
/*
let fruits = ["apple", "mango", "pineapple"];

fruits.sort().reverse();
for (let fruit of fruits) {
  console.log(fruit);
}

function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

const total = sum(1);
console.log(total);
*/

//Random password generator

function generatepwd(
  length,
  incuppercase,
  inclowercase,
  incnumbers,
  incsymbols,
) {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "1234567890";
  const symbols = "@#$%&?.></_+=:;";

  let allowedchars = "";
  let password = "";

  allowedchars += inclowercase ? lowercase : "";
  allowedchars += incuppercase ? uppercase : "";
  allowedchars += incnumbers ? numbers : "";

  return " ";
}

const length = 12;
const incuppercase = true;
const inclowercase = false;
const incnumbers = true;
const incsymbols = false;

const password = generatepwd(
  length,
  incuppercase,
  inclowercase,
  incnumbers,
  incsymbols,
);
