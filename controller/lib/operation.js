var validateNumberZero = function (n) {
    if (n == 0) {
        return false;
    }
    return true;
};

var validateIsNumber = function (caracter) {
    if (!/^([0-9])*$/.test(caracter)) {
        return false;
    }
    return true;
};

/*var sum = (n1, n2) => n1 + n2;
var subtract = (n1, n2) => n1 - n2;
var multiply = (n1, n2) => n1 * n2;
var divide = (n1, n2) => n1 / n2;*/

var sum = function (n1,n2){
    return n1+n2;
};
var subtract = function (n1,n2){
    return n1-n2;
};
var multiply = function (n1,n2){
    return n1*n2;
};
var divide = function (n1,n2){
    return n1/n2;
};