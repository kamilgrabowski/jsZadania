'use strict';


var calculator = (function () {
    return {
        add: function (a, b) {
            return a + b;
        },
        minus: function (a, b) {
            return a - b;
        },
        multiplication: function (a, b) {
            return a * b;
        },
        division: function (a, b) {
            return a / b;
        },
        factorial: function factorial(n) {
            if (n < 0) {
                throw new Error("Number musy be positive");
            }

            if (n == 0)
                return 1;
            else
                return (n * factorial(n - 1));
        }

    }
})();



