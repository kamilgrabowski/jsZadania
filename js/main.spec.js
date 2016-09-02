'use strict';

describe('calculator module tests', function () {

    it('should add two numbers', function () {
        // given
        var a = 2, b = 5, result;
        // when
        result = calculator.add(a, b);
        //then
        expect(result).toBe(7);
    });

   it('should minus two numbers', function () {
       // given
       var a = 5, b = 1, result;
       // when
       result = calculator.minus(a, b);
       //then
       expect(result).toBe(4);
   });

   it('should multiplication two numbers', function () {
       // given
       var a = 2, b = 3, result;
       // when
       result = calculator.multiplication(a, b);
       //then
       expect(result).toBe(6);
   });

   it('should division two numbers', function () {
       // given
       var a = 12, b = 4, result;
       // when
       result = calculator.division(a, b);
       //then
       expect(result).toBe(3);
   });

   it('should silnia', function () {
       // given
       var a = 4, result;
       // when
       result = calculator.factorial(a);
       //then
       expect(result).toBe(24);
   });

 it('should silniawyjatek', function () {
       // given
       var a = -2;
       // when
      
       //then
       expect(function () { calculator.factorial(a); }).toThrow( new Error("Number musy be positive"));
   });
});




