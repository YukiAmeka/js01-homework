const a = parseInt(prompt("Введіть відоме число a"));
const b = parseInt(prompt("Введіть відоме число b"));
const c = parseInt(prompt("Введіть відоме число c"));


function solveQuadr(a, b, c) {
    const x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2 * a;
    const x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2 * a;
    return 'X1 = ' + x1 + ' X2 = ' + x2;
}

// const a = document.getElementById("var_a");
// const b = document.getElementById("var_b");
// const c = document.getElementById("var_c");
const result = solveQuadr(a,b,c);
alert(result);