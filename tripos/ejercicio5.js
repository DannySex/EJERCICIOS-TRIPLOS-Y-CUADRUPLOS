//z = (x + y / o) * r + ((a * b + k) / (c + d));

let x = 8, y = 2, o = 2, r = 2, a = 2, b = 3, k = 1, c = 4, d = 1;
let t1 = y / o;
let t2 = x + t1;
let t3 = t2 * r;
let t4 = a * b;
let t5 = t4 + k;
let t6 = c + d;
let t7 = t5 / t6;
let t8 = t3 + t7;
let z = t8;
console.log("z =", z); // Resultado: 19.4