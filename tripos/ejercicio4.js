//val = a * (b + (c / d)) - e * (f + g);

let a = 2, b = 3, c = 4, d = 1, e = 10, f = 2, g = 3;
let t1 = c / d;
let t2 = b + t1;
let t3 = a * t2;
let t4 = f + g;
let t5 = e * t4;
let t6 = t3 - t5;
let val = t6;
console.log("val =", val); // Resultado: -36    