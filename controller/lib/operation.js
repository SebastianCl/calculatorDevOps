function validateNumberZero(n) {
    if (n == 0) {
        return false;
    }
    return true;
};

function validateIsNumber(caracter) {
    if (!/^([0-9])*$/.test(caracter)) {
        return false;
    }
    return true;
};

/*sum = (n1, n2) => n1 + n2;
subtract = (n1, n2) => n1 - n2;
multiply = (n1, n2) => n1 * n2;
divide = (n1, n2) => n1 / n2;
*/
function sum(n1, n2) {
    return n1 + n2;
};
function subtract(n1, n2) {
    return n1 - n2;
};
function multiply(n1, n2) {
    return n1 * n2;
};
function divide(n1, n2) {
    return n1 / n2;
};


module.exports = sum;