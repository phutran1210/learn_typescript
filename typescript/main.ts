// sử dụng tsc -init ==> để có thể buid ts về js
// ======================================================
// Typescript basic
/**
 * Typescript có tổng cộng 
 * 
 */
// ======================================================
// Kiểu dữ liệu cơ bản của typescript
let isBooLean: boolean = true;
console.log("Kiểu dữ liệu true/false =>", isBooLean);

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log('Đây là kiểu dữ liệu số =>', decimal, hex, binary, octal);

// ======================================================
// Kiểu dữ liệu chuỗi String
let color: string = "blue";
color = 'red';
console.log('Kiểu dữ liệu "string" =>', color);

// String teamplate
let fullName: string = `Trần Gia Phú`;
let age: number = 26;
let sentence: string = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next year.`;

console.log("Sử dụng 'string teamplate'=>",sentence);

// ======================================================

// Kiểu dữ liệu Array
// có hai cách khai báo array với typescript

let list: number[] = [1, 2, 3];

// Cách thứ hai sử dụng kiểu mảng chung, Array <elemType>:
let lists: Array<number> = [1, 2, 3];

// ======================================================

// tuple cho phép bạn khai báo mảng với các giá trị có kiểu dữ liệu mà bạn đã biết.
// Declare a tuple type
let x: [string, number];
// khởi tạo
x = ["hello", 10]; // OK

// Initialize it incorrectly
// x = [10, "hello"]; // Error ==> báo lỗi number không thể gán = string

// OK
console.log("đây là log x:",x[0]);

console.log("substring: ",x[0].substring(3));

// console.log(x[1].substring(1));