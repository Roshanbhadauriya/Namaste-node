// Modules protect there functions and variables from leaking
// means you  cant just access it

console.log("mein chal gya ...");
const x = "hello world";
function sum(a, b) {
  console.log(a + b);
}

module.exports = { sum, x };
