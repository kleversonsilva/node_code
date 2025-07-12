//Formas de expostar: console.log(module.exports===this)
//console.log(module.exsports===exports)

console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1000;
exports.b = 2000;
module.exports.c = 3000;

// module = null; // Esta linha foi removida, pois causava o erro.

console.log(module.exports);

console.log("O numero é: ", exports.b)