"use strict";
// sử dụng tsc -init ==> để có thể buid ts về js
// ======================================================
// Typescript basic
/**
 * Typescript có tổng cộng
 *
 */
// ======================================================
// Kiểu dữ liệu cơ bản của typescript
var isBooLean = true;
console.log("Kiểu dữ liệu true/false =>", isBooLean);
// Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log('Đây là kiểu dữ liệu số =>', decimal, hex, binary, octal);
// ======================================================
// Kiểu dữ liệu chuỗi String
var color = "blue";
color = 'red';
console.log('Kiểu dữ liệu "string" =>', color);
// String teamplate
var fullName = "Tr\u00E2\u0300n Gia Phu\u0301";
var age = 26;
var sentence = "Hello, my name is " + fullName + ".\nI'll be " + (age + 1) + " years old next year.";
console.log("Sử dụng 'string teamplate'=>", sentence);
// ======================================================
// Kiểu dữ liệu Array
// có hai cách khai báo array với typescript
var list = [1, 2, 3];
// Cách thứ hai sử dụng kiểu mảng chung, Array <elemType>:
var lists = [1, 2, 3];
// ======================================================
// tuple cho phép bạn khai báo mảng với các giá trị có kiểu dữ liệu mà bạn đã biết.
// Declare a tuple type
var x;
// khởi tạo
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error ==> báo lỗi number không thể gán = string
// OK
console.log("đây là log x:", x[0]);
console.log("substring: ", x[0].substring(3));
// console.log(x[1].substring(1));
//# sourceMappingURL=main.js.map