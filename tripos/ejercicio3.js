//total = (a + b * c) * (d - e) - (f + g);

let a = 2, b = 3, c = 4, d = 1, e = 10, f = 2, g = 3;
let t1 = b * c;
let t2 = a + t1;
let t3 = d - e;
let t4 = t2 * t3;
let t5 = f + g;
let t6 = t4 - t5;
let total = t6;
console.log("total =", total); // Resultado: -131