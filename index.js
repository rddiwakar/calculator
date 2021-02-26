let display = document.getElementsByClassName("calculator__display")[0];
let addition = document.getElementsByClassName("key--operator")[0];
let multiply = document.getElementsByClassName("key--operator")[2];
let division = document.getElementsByClassName("key--operator")[3];
let subtract = document.getElementsByClassName("key--operator")[1];
let equal = document.getElementsByClassName("key--equal")[0];
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let zero = document.getElementById("0");
let decimal = document.getElementById("decimal");
let clear = document.getElementById("clear")

let arr = [one,two, three, four, five, six, seven, eight, nine, zero, decimal, addition, multiply, division, subtract];

arr.forEach(element => {
    element.addEventListener("click", () => display.innerText += element.innerText);
});

equal.addEventListener("click", () => display.innerText = eval(display.innerText));
clear.addEventListener("click", ()=> display.innerText = 0)
