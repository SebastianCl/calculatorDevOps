angular
    .module("ngDevops", [])
    .controller("ngCtrl", ['$scope', ctrl]);

function ctrl(sc) {

    sc.init = function () {
        sc.result = 0;
        sc.n1 = 0;
        sc.n2 = 0;
    }

    sc.clickSum = function (n1, n2) {
        if (validateIsNumber(n1) && validateIsNumber(n2)) {
            sc.result = sum(n1, n2);
        }
        else {
            sc.result = "You must enter two numbers";
        }
    }

    sc.clickSubtract = function (n1, n2) {
        if (validateIsNumber(n1) && validateIsNumber(n2)) {
            sc.result = subtract(n1, n2);
        }
        else {
            sc.result = "You must enter two numbers";
        }
    }

    sc.clickMultiply = function (n1, n2) {
        if (validateIsNumber(n1) && validateIsNumber(n2)) {
            sc.result = multiply(n1, n2);
        }
        else {
            sc.result = "You must enter two numbers";
        }
    }

    sc.clickDivide = function (n1, n2) {
        if (validateIsNumber(n1) && validateIsNumber(n2)) {
            if (validateNumberZero(n2)) {
                sc.result = divide(n1, n2);
            }
            else {
                sc.result = "Math ERROR";
            }
        }
        else {
            sc.result = "You must enter two numbers";
        }

    }


}




