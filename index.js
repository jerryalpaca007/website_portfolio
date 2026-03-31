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
let username;

document.getElementById("submit").onclick = function () {
  username = document.getElementById("txtbox").value;
  document.getElementById("myh1").textcontent = `hello ${username}`;
};
